// import {user} from '../controller/login.controller';
import {navigate } from "svelte-routing";
import { getSession, removeSession } from '../Model/Session.js';

const userSession = getSession('user');
const codeSession = getSession('code');

export const isVerifiedEmail = (code) =>{
    if(codeSession == code){
        let rol_id = userSession.user.rol_id;
        if(rol_id == 0){
            navigate('/', { replace: true })
            removeSession('user');
            removeSession('code');
        }
        else if(rol_id == 1){
            navigate('/admin', { replace: true })
        }
        else if(rol_id == 2){
            navigate('/operador', { replace: true })
        }
        else if(rol_id == 3){
            navigate('/products', { replace: true })
        }
        else if(rol_id == 4){
            navigate('/auditor', { replace: true })
        }
    }
    else{
        alert("Ta mal la clave")
    }
}
