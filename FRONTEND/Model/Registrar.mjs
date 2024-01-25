import Conexion from './Conexion.mjs';
export default class Login {
    async createUser(obj_data){
        const conn = new Conexion()
        const urlApi = 'http://localhost:3000/insertUser';
        const response = await conn.postData(urlApi, obj_data);
        return response;
    }
}