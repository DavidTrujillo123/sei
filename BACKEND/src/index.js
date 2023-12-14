//Packages
const express = require('express');
const app = express();
const {db} = require('../config/connection');
const logger = require('morgan');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(logger('dev'));

//Routes
app.use(require("../routes/index"));

//Server execution
app.get('/',(req, res) => {res.send("Bienvenidos a la mejor APIs")});
app.listen(3000);
console.log('Server running in http://localhost:3000');