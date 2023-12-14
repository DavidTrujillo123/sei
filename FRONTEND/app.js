const express = require('express');
const app = express();
// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//middlewears
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/controller',express.static(process.cwd()+'/controller'));
app.use('/model',express.static(process.cwd()+'/Model'));
//Routes
app.get('/', (req,res) => {
    res.render('login', {title: 'Login SEI'})
});

//Service Ejecution

app.listen(3001);
console.log('Server running in: http://localhost:3001');



