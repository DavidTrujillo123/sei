import Login from '../Model/Login.mjs';
import SMTP from '../Model/SMTP.mjs';
import { navigate } from "svelte-routing";
import { codeSaver, userSaver } from "../src/store.js"

async function login(obj_data) {
    const user = new Login();
    let response = await user.isUser(obj_data);
    return response;
}

export async function redirect(obj_data,flagcapcha){
    let response = await login(obj_data);
    


    return false;
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
