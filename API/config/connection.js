const pgPromise = require ('pg-promise');
// const config = {
//     host: 'localhost',
//     port: '5432',
//     database: 'sei_2023',
//     user: 'admin_sei_2023',
//     password: 'jZgKS6eWe8HqEP3FwptPa3gUeAf3QZzz'
// };

const config= {
    host: 'dpg-clsck2d5jf6s73ahdui0-a.oregon-postgres.render.com',
    port: '5432',

    database: 'sei_2023',
    user: 'admin_sei_2023',
    password: 'jZgKS6eWe8HqEP3FwptPa3gUeAf3QZzz',
    ssl: true
}

const pgp = pgPromise({});
const db = pgp(config);

db.any("select * from audit").then((res)=>{console.log(res);})

exports.db = db;