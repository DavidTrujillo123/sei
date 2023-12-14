const express = require('express');
const app = express();
// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//middlewears
app.use(express.json());
//app.use('/src',express.static('/src'));
//app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use('/recursos',express.static(process.cwd()+'/public'));
//Routes
app.get('/', (req,res) => {
    res.render('login', {title: 'Login SEI'})
});


//Service Ejecution

app.listen(3000);
console.log('Server running in: http://localhost:3000');



