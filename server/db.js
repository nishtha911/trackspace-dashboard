const { Pool } = require('pg');

const config = {
  user: 'postgres',
  database: 'trackspace',
  password: 'database123',
  host: 'localhost', 
  port: 5432
};

const pool = new Pool(config);

pool.on('error', (err, client) => {
  console.error('Idle client error', err.message, err.stack);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};