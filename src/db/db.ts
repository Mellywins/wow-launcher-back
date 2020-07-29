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
// const client = new Client({
//     user: 'melly',
//     host: 'localhost',
//     database: 'wow',
//     password: '1999',
//     port: 5400
// })
// client.connect()
//     .then(() => console.log('connected sucessfully!'))
//     .then(() => client.query('select * from account'))
//     .then((results: any) => console.table(results.rows))
//     .catch((err: any) => console.error(err))
//     .finally(() => client.end())
export default db;
