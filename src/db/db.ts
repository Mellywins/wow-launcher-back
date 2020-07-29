const { Pool, Client } = require('pg');
const pool = new Pool({
    user: 'melly',
    host: 'localhost',
    database: 'wow',
    password: '1999',
    port: 5400
})
const db = {
    query(text: string, params?: any, callback?: any): any {
        return pool.query(text, params, callback)
    }
}

export default db;
