import Rol from '../Model/Rol.mjs';
import { getSession } from '../Model/Session.js';

let user_data = getSession('user');
const rols = new Rol();

export async function getRol() {
    let data = await rols.getRol(user_data.role.rol_id);   
    return data;
}

export async function deleteRol(obj_data) {
    let data = await rols.deleteRol(obj_data);   
    return data;
}

export async function postRol(obj_data) {
    let data = await rols.postRol(obj_data);   
    return data;
}

export async function updateRol(obj_data) {
    let data = await rols.updateRol(obj_data);   
    return data;
}