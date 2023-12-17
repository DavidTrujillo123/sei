import Conexion from './Conexion.mjs';
export default class Usuario {
    async getUsers(obj_data){
        const urlApi = 'http://localhost:3000/selectUsers';
        const conn = new Conexion;
        const response = await conn.getData(urlApi, obj_data);
        return response;
    } 
    async getUsersByState(obj_data){
        const urlApi = 'http://localhost:3000/selectUsersActive';
        const conn = new Conexion;
        const response = await conn.getData(urlApi, obj_data);
        return response;
    }    
    async postUsers(obj_data){
        const urlApi = 'http://localhost:3000/insertUser';
        const conn = new Conexion;
        const response = await conn.postData(urlApi, obj_data);
        return response;
    } 
    async updateUsers(obj_data){
        const urlApi = 'http://localhost:3000/updateUser';
        const conn = new Conexion;
        const response = await conn.putData(urlApi, obj_data);
        return response;
    } 
    async deleteUsers(obj_data){
        const urlApi = 'http://localhost:3000/deleteUser';
        const conn = new Conexion;
        const response = await conn.deleteData(urlApi, obj_data);
        return response;
    } 
}
