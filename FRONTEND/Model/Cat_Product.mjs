import Conexion from './Conexion.mjs';
export default class Cat_Product {
   
    async getCatProduct(obj_data){
        const urlApi = 'http://localhost:3000/selectCategoriesProducts';
        const conn = new Conexion;
        const response = await conn.getData(urlApi, obj_data);
        return response;
    }
    async postCatProduct(obj_data){
        const urlApi = 'http://localhost:3000/insertCategoryProduct';
        const conn = new Conexion;
        const response = await conn.postData(urlApi, obj_data);
        return response;
    }
    async updateCatProduct(obj_data){
        const urlApi = 'http://localhost:3000/updateCategoryProduct';
        const conn = new Conexion;
        const response = await conn.putData(urlApi, obj_data);
        return response;
    }
    async deleteCatProduct(obj_data){
        const urlApi = 'http://localhost:3000/deleteCategoryProduct';
        const conn = new Conexion;
        const response = await conn.deleteData(urlApi, obj_data);
        return response;
    }
}