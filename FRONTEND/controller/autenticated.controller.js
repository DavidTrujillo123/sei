import {navigate } from "svelte-routing";
import {getSession, removeSession} from '../Model/Session'
export function isAutenticated() {
    let useSession = getSession('user');
    return useSession != null;
}

export function isAutenticatedInit() {
    let useSession = getSession('user1');
    return useSession != null;
}

export function navigateLogin(){
    navigate('/', { replace: true })
    removeSession('user');
    removeSession('user1');
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
        navigate('/products', {replace: true })
    }
    else if(rol_id == 3){
        navigate('/admin', {replace: true })
    }
    else if(rol_id == 4){
        navigate('/admin', {replace: true })
    }
    location.reload();
}