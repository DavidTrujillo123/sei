// Packages
const express = require('express');
const app = express();
const {db} = require('../config/connection');

//middlewars
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(require('../routes/index'));

//Server execution
app.get('/', (req, res)=> {res.send('Hola mundoooo!')});
app.listen(3000);
console.log('Server running in: http://localhost:3000');