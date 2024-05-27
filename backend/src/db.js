const { Pool } = require('pg');

const pool = new Pool({
  host: '200.18.128.54',
  port: 5432,
  user: 'aula',
  password: 'aula',
  database: 'delivery_interplanetary'
});

module.exports = pool;
