import Login from '../Model/Login.mjs';
import { writable } from 'svelte/store'
import {  Link, navigate } from "svelte-routing";


export async function login(obj_data) {
    const user = new Login();
    let response = await user.isUser(obj_data);
    return response;
}

export function redirect(response,flag){
    if(response.res == "TRUE" && flag){
        let user = createUser()
        user.setUser(response)
        navigate('/emalsend', { replace: true })
        
    }
    else{
        
    }
}


const createUser = () => {
    const { subscribe, set } = writable(null)

    return {
        subscribe,
        setUser: (user) => {
            set(user)
        }
    }
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

