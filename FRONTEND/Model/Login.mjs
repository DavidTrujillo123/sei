import Conexion from './Conexion.mjs';
export default class Login {
    async isUser(obj_data){
        const conn = new Conexion()
        const urlApi = 'http://localhost:3000/isUser';
        const response = await conn.postData(urlApi, obj_data);
        return response;
    }

    async isUserBlock(obj_data){
        const conn = new Conexion()
        const urlApi = 'http://localhost:3000/isUserBlock';
        const response = await conn.postData(urlApi, obj_data);
        return response;
    }

    async updateUserBlock(obj_data){
        const conn = new Conexion()
        const urlApi = 'http://localhost:3000/updateUserBlock';
        const response = await conn.postData(urlApi, obj_data);
        return response;
    }
}


