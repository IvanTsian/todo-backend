const { Client } = require('pg');
const client = new Client({
    user: 'ivantsian',
    host: 'localhost',
    database: 'todo_db',
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

module.exports = client // 导出数据库连接;