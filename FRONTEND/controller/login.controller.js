import Login from '../Model/Login.mjs';
import SMTP from '../Model/SMTP.mjs';
import { writable } from 'svelte/store';
import { setSession } from '../Model/Session.js';
import { navigate } from "svelte-routing";
import { codeSaver, userSaver } from "../src/store.js"

async function login(obj_data) {
    const user = new Login();
    let response = await user.isUser(obj_data);
    return response;
}

export async function redirect(obj_data,flag){
    let response = await login(obj_data);
   
    if(response.res == "TRUE" && flag){
        const smtp = new SMTP();
        let code = generateVerificationCode();
        
        userSaver.setData(response.user);
        codeSaver.setData(code);
 
        smtp.sendEmail(response.user.us_email,  code, response.user.us_nombre);

        navigate('/emalsend', { replace: true })
        return true    
    }
    return false;
}

const generateVerificationCode = () =>{
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export function validateRecaptcha() {
    // @ts-ignore
    let recaptchaInstance = grecaptcha.getResponse();

    if (recaptchaInstance) {
      return true;
    } else{
      return false;
    }
  }
