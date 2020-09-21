const { config } = require('../config/config')

// Postgres (pg)
const { Pool } = require('pg')
if (!config.databaseUrl) throw new Error(`.env DATABASE_URL not set`)
const pool = new Pool({ connectionString: config.databaseUrl })

// Connect to database, do query, then release database connection
module.exports.query = async (sqlString) => {
  try {
    const client = await pool.connect()
    const results = await client.query(sqlString)
    await client.end()
    await client.release()
    return results
  } catch (error) {
    return { error }
  }
}
