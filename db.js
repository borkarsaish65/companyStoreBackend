const { Pool } = require('pg');
const config = {
    db: { /* do not put password or any sensitive info here, done only for demo */
      host:'localhost',
      port:'5432',
      user:'postgres',
      password:'admin',
      database:'test',
    }
  };
  


const pool = new Pool(config.db);

/**
 * Query the database using the pool
 * @param {*} query 
 * @param {*} params 
 * 
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query, params) {
    const {rows, fields} = await pool.query(query, params);

    return rows;
}

module.exports = query;