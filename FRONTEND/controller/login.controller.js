import Login from './model/Login.js';
// const {Login} = require('./Model/Login.js');
const btn_login = document.getElementById('btn_login');
const us_email = document.getElementById('exampleInputEmail1');
const us_password = document.getElementById('exampleInputPassword1');
        
function login(){
    const user = new Login();
    let response = user.isUser(us_email, us_password);
    console.log(response);
}

btn_login.addEventListener('click', login)