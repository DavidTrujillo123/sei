import Registrar from '../Model/Registrar.mjs';
import SMTP from '../Model/SMTP.mjs';
import { navigate } from "svelte-routing";
import { codeSaver, userSaver } from "../src/store.js"

async function createUser(obj_data) {
    const user = new Registrar();
    let response = await user.createUser(obj_data);
    return response;
}

export async function redirect(obj_data,flagcapcha){
    let response = await createUser(obj_data);

    if(!flagcapcha){
        return 'Error por favor realize el capcha';
    }
    if(response.flag  == true){
        navigate('/login', { replace: true })
        return ('Usuario creado correctamente');
    }

    return 'Error al crear el usuario';
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
