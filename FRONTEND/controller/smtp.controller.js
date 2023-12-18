// import {user} from '../controller/login.controller';
import {navigate} from "svelte-routing";
import { userSaver } from "../src/store.js"

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
    console.log(rol_id);
        if(rol_id == 0){
            navigate('/', { replace: true })
        }
        else if(rol_id == 2){
            navigate('/admin', { replace: true })
        }
        else if(rol_id == 1){
            navigate('/operador', { replace: true })
        }
        else if(rol_id == 3){
            navigate('/products', { replace: true })
        }
        else if(rol_id == 4){
            navigate('/auditor', { replace: true })
        }
}