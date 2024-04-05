import { Pool, Client, PoolConfig } from 'pg'
import { config } from 'config/config'
import { dateAsISO } from 'lib/formatDate'

// Postgres (pg)
if (config.databaseUrl === undefined) throw new Error('.env DATABASE_URL not set')
const postgresOptions: PoolConfig = {
  connectionString: config.databaseUrl + '?sslmode=require',
  max: 10
  // idleTimeoutMillis: 1000,
  // connectionTimeoutMillis: 1000
  // ssl: { rejectUnauthorized: false },
}
export const pool = new Pool(postgresOptions)

// Connect to database, do query, then release database connection
export const query = async (sqlString: string): Promise<any[]> => {
  try {
    // Connect db
    const client = new Client(postgresOptions)
    await client.connect()
    // Run function
    const { rows } = await client.query(sqlString)
    // Release db
    await client.end()
    // await client.release()
    const rowsCamelCase = rows.map(mapKeysToCamelCase)
    return rowsCamelCase
  } catch (error: any) {
    console.error('Database query error:', error, '\nError:', error.message, '\n\nSQL:\n', sqlString, '\n')
    throw new Error('Database query failed')
  }
}

const snakeToCamel = (str: string): string => str.toLowerCase().replace(/([-_][a-z])/g, (group: string) =>
  group
    .toUpperCase()
    .replace('-', '')
    .replace('_', '')
)

export const camelToSnake = (str: string): string => str.replace(/([A-Z0-9])/g, (match) => `_${match.toLowerCase()}`)

const isDate = (obj: any): boolean => obj.constructor.toString().includes('Date')

export const formatSqlValue = (obj: any): any => typeof obj === 'string'
  ? `'${obj.replace(/'/g, "''")}'`
  : isDate(obj)
    ? `'${dateAsISO(obj) as string}'`
    : obj

const mapKeysToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(v => mapKeysToCamelCase(v))
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [snakeToCamel(key)]: mapKeysToCamelCase(obj[key])
      }),
      {}
    )
  }
  return obj
}

// const sqlString = createUpsertQuery('customer', 'customer_number', [customerNumber], customerFieldsWithNoCustomerNumber)
export const createUpsertQuery = (tableName: string, fieldsRequiredNames: string, fieldsRequiredValues: any[], fieldsNotRequired: Record<string, any> = {}): string => {
  const fieldsNotRequiredNames = Object.keys(fieldsNotRequired).map(camelToSnake)
  const allFieldsNames = [
    ...fieldsRequiredNames.split(',').map(s => s.replace(/'/g, '').trim()),
    ...Object.keys(fieldsNotRequired)
  ].map(formatSqlValue)
  const allFieldsValues = [
    ...fieldsRequiredValues,
    ...Object.values(fieldsNotRequired)
  ].map(formatSqlValue)
  const sqlString = `INSERT INTO "${tableName}"
    (${allFieldsNames.join(', ').replace(/'/g, '')})
    VALUES (${allFieldsValues.join(', ')})
    ON CONFLICT (${fieldsRequiredNames})\n` +
    (fieldsNotRequiredNames.length > 0
      ? `DO UPDATE SET ${fieldsNotRequiredNames.map(fieldName => `${fieldName} = EXCLUDED.${fieldName}`).join(', ')};`
      : 'DO NOTHING;')
  return sqlString
}
