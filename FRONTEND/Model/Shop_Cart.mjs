import Conexion from './Conexion.mjs';
export default class Shop_Cart {
   
    async getShop_Cart(obj_data){
        const urlApi = 'http://localhost:3000/selectOrders';
        const conn = new Conexion;
        const response = await conn.getData(urlApi, obj_data);
        return response;
    }
    async postShop_Cart(obj_data){
        const urlApi = 'http://localhost:3000/insertShoppingOrder';
        const conn = new Conexion;
        const response = await conn.postData(urlApi, obj_data);
        return response;
    }
    async updateShop_Cart(obj_data){
        const urlApi = 'http://localhost:3000/updateShoppingOrder';
        const conn = new Conexion;
        const response = await conn.putData(urlApi, obj_data);
        return response;
    }
    async deleteShop_Cart(obj_data){
        const urlApi = 'http://localhost:3000/deleteShoppingOrder';
        const conn = new Conexion;
        const response = await conn.deleteData(urlApi, obj_data);
        return response;
    }
}