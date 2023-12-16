import Conexion from './Conexion.mjs';
export default class Product {
   
    async getProduct(obj_data){
        const urlApi = 'http://localhost:3000/selectProducts';
        const conn = new Conexion;
        const response = await conn.getData(urlApi, obj_data);
        return response;
    }
}