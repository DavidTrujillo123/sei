import Login from '../Model/Login.mjs';
import SMTP from '../Model/SMTP.mjs';
import { writable } from 'svelte/store';
import { setSession } from '../Model/Session.js';
import {  Link, navigate } from "svelte-routing";

let code;
export let user;
export async function login(obj_data) {
    const user = new Login();
    let response = await user.isUser(obj_data);
    return response;
}

export function redirect(response, flag){
    if(response.res == "TRUE" && flag){
        const smtp = new SMTP();

        code = generateVerificationCode();
        user = createUser();

        //user.setUser(response.user, code);
        setSession("user", response);
        setSession("code", code);

        smtp.sendVerificationEmail(response.user.us_email,  code, response.user.us_nombre)

        navigate('/emalsend', { replace: true })
       
    }
}


const createUser = () => {
    const { subscribe, set } = writable(null)

    return {
        subscribe,
        setUser: (user, code) => {
            set({user, code}) 
        }
    }
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

