// import {user} from '../controller/login.controller';

import { userSaver } from "../src/store.js"
import {redirectWithRol} from '../controller/autenticated.controller.js';

export const isVerifiedEmail = (codeSession, code) =>{
    console.log(codeSession);
    if(codeSession == code){
        userSaver.updateState();
        
        return true;
    }
    else{
        return false;
    }
}

export const redirectByRole=(rol_id)=>{
    redirectWithRol(rol_id);
        // if(rol_id == 0){
        //     navigate('/', { replace: true })
        // }
        // else if(rol_id == 2){
        //     navigate('/admin', { replace: true })
        // }
        // else if(rol_id == 1){
        //     navigate('/operador', { replace: true })
        // }
        // else if(rol_id == 3){
        //     navigate('/products', { replace: true })
        // }
        // else if(rol_id == 4){
        //     navigate('/auditor', { replace: true })
        // }
}