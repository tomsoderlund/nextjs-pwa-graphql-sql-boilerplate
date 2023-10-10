import { Pool, Client, PoolConfig } from 'pg'
import { config } from 'config/config'
import { dateAsISO } from 'lib/formatDate'

// Postgres (pg)
if (config.databaseUrl === undefined) throw new Error('.env DATABASE_URL not set')
const postgresOptions: PoolConfig = {
  connectionString: config.databaseUrl,
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
  ? `'${obj}'`
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

export const createUpsertQuery = (tableName: string, keyFieldNames: string, keyFieldValues: any[], fieldsWithNoOverlap: any): string => {
  const fieldNames = Object.keys(fieldsWithNoOverlap).map(camelToSnake)
  const fieldValues = [...keyFieldValues, ...Object.values(fieldsWithNoOverlap)].map(formatSqlValue)
  const sqlString = `INSERT INTO "${tableName}" (${keyFieldNames}, ${fieldNames.join(', ')})
    VALUES (${fieldValues.join(', ')})
    ON CONFLICT (${keyFieldNames})
    DO UPDATE SET ${fieldNames.map(fieldName => `${fieldName} = EXCLUDED.${fieldName}`).join(', ')};`
  return sqlString
}
