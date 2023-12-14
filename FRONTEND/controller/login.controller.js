import Login from '../Model/Login.mjs';

export async function login(obj_data) {
    const user = new Login();
    let response = await user.isUser(obj_data);
    return response;
}

export function redirect(response){
    if(response.res == "TRUE"){
        window.location.href = '../src/Email_send.svelte'
    }
    else{
        
    }
}
