import {user} from '../controller/login.controller';
import {Link, navigate } from "svelte-routing";
import { getSession } from '../Model/Session.js';

const data_user = getSession('user');
export const isVerifiedEmail = (code)  =>{
    const unsubscribe = user.subscribe(value => {
        let data = value;
        if(data.code == code){
            navigate('/page', { replace: true })
        }else{
            alert("Ta mal la clave")
        }
    });
}
