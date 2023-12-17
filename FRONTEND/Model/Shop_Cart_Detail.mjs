import Conexion from './Conexion.mjs';
export default class Shop_Cart_Detail {
   
    async getShop_Cart_Detail(obj_data){
        const urlApi = 'http://localhost:3000/selectdetOrders';
        const conn = new Conexion;
        const response = await conn.getData(urlApi, obj_data);
        return response;
    }
    async postShop_Cart_Detail(obj_data){
        const urlApi = 'http://localhost:3000/insertDetShoppingOrder';
        const conn = new Conexion;
        const response = await conn.postData(urlApi, obj_data);
        return response;
    }
    async updateShop_Cart_Detail(obj_data){
        const urlApi = 'http://localhost:3000/updateDetShoppingOrder';
        const conn = new Conexion;
        const response = await conn.putData(urlApi, obj_data);
        return response;
    }
    async deleteShop_Cart_Detail(obj_data){
        const urlApi = 'http://localhost:3000/deleteDetShoppingOrder';
        const conn = new Conexion;
        const response = await conn.deleteData(urlApi, obj_data);
        return response;
    }
}