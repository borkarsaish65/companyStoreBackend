const { Pool } = require('pg');
const config = {
    db: { /* do not put password or any sensitive info here, done only for demo */
      host:'ec2-44-206-11-200.compute-1.amazonaws.com',
      port:'5432',
      user:'xnylvrmybzcrxk',
      password:'668cdd1a1b65ddc5706acd8e9d057c1ecfabb89d51fb1f1e8d404defa04ed626',
      database:'dbivtia6uumucj',
      ssl: true
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