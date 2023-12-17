import Conexion from './Conexion.mjs';
export default class Rol {
   
    async getRol(obj_data){
        const urlApi = 'http://localhost:3000/selectRoles';
        const conn = new Conexion;
        const response = await conn.getData(urlApi, obj_data);
        return response;
    }
    async postRol(obj_data){
        const urlApi = 'http://localhost:3000/insertRole';
        const conn = new Conexion;
        const response = await conn.postData(urlApi, obj_data);
        return response;
    }
    async updateRol(obj_data){
        const urlApi = 'http://localhost:3000/updateRole';
        const conn = new Conexion;
        const response = await conn.putData(urlApi, obj_data);
        return response;
    }
    async deleteRol(obj_data){
        const urlApi = 'http://localhost:3000/deleteRole';
        const conn = new Conexion;
        const response = await conn.deleteData(urlApi, obj_data);
        return response;
    }
}