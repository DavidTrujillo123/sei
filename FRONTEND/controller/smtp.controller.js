import {user} from '../controller/login.controller';
import {Link, navigate } from "svelte-routing";


export const isVerifiedEmail = (code)  =>{
    
    const unsubscribe = user.subscribe(value => {
        let data = value;
        console.log('Nuevo valor del usuario en OtroComponente:', data);
        if(data.code == code){
            navigate('/page', { replace: true })
        }else{
            alert("Ta mal la clave")
        }

    });
    
}
