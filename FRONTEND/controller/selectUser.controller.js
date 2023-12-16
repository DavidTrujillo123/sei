import Usuario from '../Model/User.js';
import { getSession } from '../Model/Session.js';

async function getUsersQuery(obj_data) {
    const users = new Usuario();
    
    let result = await users.getUsers(obj_data);
    return result;
}

export async function getUsers() {
    let obj_data = getSession('user');
    
    let data = await getUsersQuery(obj_data.user.us_id);
    return data;
}

export async function postUsersQuery(obj_data) {
    const users = new Usuario();    
    let result = await users.postUsers(obj_data);
    return result;
}