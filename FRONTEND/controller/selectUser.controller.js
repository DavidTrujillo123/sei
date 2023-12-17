import Usuario from '../Model/User.mjs';
import { getSession } from '../Model/Session.js';

let obj_data = getSession('user');

export async function getUsers() {
    const users = new Usuario();
    let result = await users.getUsers(obj_data.user.us_id);
    return result;
}

export async function getUsersByState() {
    const users = new Usuario();
    let result = await users.getUsersByState(obj_data.user.us_id);
    return result;
}

export async function postUsersQuery(obj_data) {
    const users = new Usuario();    
    let result = await users.postUsers(obj_data);
    return result;
}

export async function updateUser(obj_data) {
    const users = new Usuario();    
    let result = await users.updateUsers(obj_data);
    return result;
}

export async function deleteUser(obj_data) {
    const users = new Usuario();    
    let result = await users.deleteUsers(obj_data);
    return result;
}

