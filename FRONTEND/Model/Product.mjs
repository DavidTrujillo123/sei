import Conexion from './Conexion.mjs';
export default class Product {
   
    async getProduct(obj_data){
        const urlApi = 'http://localhost:3000/selectProducts';
        const conn = new Conexion;
        const response = await conn.getData(urlApi, obj_data);
        return response;
    }
    async postProduct(obj_data){
        const urlApi = 'http://localhost:3000/insertProduct';
        const conn = new Conexion;
        const response = await conn.postData(urlApi, obj_data);
        return response;
    }
    async updateProduct(obj_data){
        const urlApi = 'http://localhost:3000/updateProduct';
        const conn = new Conexion;
        const response = await conn.putData(urlApi, obj_data);
        return response;
    }
    async deleteProduct(obj_data){
        const urlApi = 'http://localhost:3000/deleteProduct';
        const conn = new Conexion;
        const response = await conn.deleteData(urlApi, obj_data);
        return response;
    }
}