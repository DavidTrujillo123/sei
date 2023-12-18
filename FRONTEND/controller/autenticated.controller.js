import {navigate } from "svelte-routing";
import {getSession, removeSession} from '../Model/Session';
import { codeSaver, userSaver } from "../src/store";

// export function isAutenticated(userSaver) {
//     const unsubscribe = userSaver.subscribe(value => {
//         //console.log(`El estado de autenticación es: ${value.state}`);
//         return value.state;
//     });

//     // Cuando ya no necesitas la suscripción, puedes cancelarla
//     unsubscribe();
// }


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
        navigate('/products', {replace: true })
    }
    else if(rol_id == 3){
        navigate('/admin', {replace: true })
    }
    else if(rol_id == 4){
        navigate('/admin', {replace: true })
    }
    //location.reload();
}