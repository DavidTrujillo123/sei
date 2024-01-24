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
async function isBlock(email) {
  const user = new Login();
  let response = await user.isUserBlock(email);
  return response;
}

async function blockUser(email) {
  const user = new Login();
  let response = await user.updateUserBlock(email);
  return response;
}

let cont = 1;
export async function redirect(obj_data,flagcapcha){
    let response = await login(obj_data);
    let isblock = await isBlock({us_email: obj_data.us_email});
    
    if(isblock.res){
      alert('Usuario bloqueado')
      return false
    }
    else if(response.res == 'NOT_FOUND'){//NO SE ENCUENTRA EL EMAIL
      alert('Not Found user');
    }
    else if(response.res == "TRUE" && flagcapcha){// SI LOGEA CORRECTAMETNE Y HACE EL CAPCHA
        const smtp = new SMTP();
        let code = generateVerificationCode();
        
        userSaver.setData(response.user);
        codeSaver.setData(code);
 
        smtp.sendEmail(response.user.us_email,  code, response.user.us_nombre);

        navigate('/emalsend', { replace: true })
        return true    
    }
    else if (response.res == "FALSE"){//SI ES EMAIL
      alert('Intentos disponibles: '+cont);
      if(cont == 3){
        alert('usuario bloqueado')
        //bloquear usuariuoo
        blockUser({us_email: obj_data.us_email})
        cont = 0
      }
      cont++;
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
