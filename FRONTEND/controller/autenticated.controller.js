import {navigate } from "svelte-routing";
export function isAutenticated(user) {
    return user != null;
}

export function navigateLogin(){
    navigate('/', { replace: true })
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