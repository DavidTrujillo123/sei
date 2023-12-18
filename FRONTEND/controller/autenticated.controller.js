import {navigate } from "svelte-routing";
import {getSession, removeSession} from '../Model/Session';

export function navigateLogin(){
    navigate('/', { replace: true })
    removeSession('user')
    location.reload();
}

export function redirectWithRol(rol_id){
    if (rol_id == 0){
        navigate('/', { replace: true });
    }
    else if(rol_id == 1){
        navigate('/admin', { replace: true })
    }
    else if(rol_id == 2){
        navigate('/Producto', {replace: true })
    }
    else if(rol_id == 3){
        navigate('/products', {replace: true })
    }
    else if(rol_id == 4){
        navigate('/audit', {replace: true })
    }
    location.reload();
}