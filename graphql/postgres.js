const { config } = require('../config/config')

// Postgres (pg)
const { Pool } = require('pg')
const pool = new Pool({ connectionString: config.databaseUrl })

// Connect to database, do query, then release database connection
module.exports.query = async (sqlString) => {
  try {
    // const client = await pool.connect()
    const results = await pool.query(sqlString)
    // client.release()
    return results
  } catch (error) {
    return { error }
  }
}
