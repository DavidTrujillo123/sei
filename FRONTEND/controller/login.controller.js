import Login from '../Model/Login.mjs';
import { writable } from 'svelte/store'
import {  Link, navigate } from "svelte-routing";

export async function login(obj_data) {
    const user = new Login();
    let response = await user.isUser(obj_data);
    return response;
}

export function redirect(response){
    if(response.res == "TRUE"){
        let user = createUser()
        user.setUser(response)
        navigate('/', { replace: true })
        window.location.href = '../src/Email_send.svelte'
    }
    else{
        
    }
}


const createUser = () => {
    const { subscribe, set } = writable(null)

    return {
        subscribe,
        setUser: (user) => {
            set(user)
        }
    }
}

