import Conexion from './Conexion.mjs';
class Usuario {
    async getUsers(obj_data){
        const urlApi = 'http://localhost:3000/selectUsers/';
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
}
module.exports = Usuario;