// import {user} from '../controller/login.controller';
import {navigate} from "svelte-routing";
import { getSession, removeSession,setSession } from '../Model/Session.js';

const codeSession = getSession('code');
const userSession = getSession('user1');

export const isVerifiedEmail = (code) =>{
    if(codeSession == code){
        setSession('user', userSession);
        removeSession('user1');
        return true;
    }
    else{
        return false;
    }
}

export const redirectByRole=()=>{
    let rol_id = userSession.user.rol_id;
        if(rol_id == 0){
            navigate('/', { replace: true })
            removeSession('user1');
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