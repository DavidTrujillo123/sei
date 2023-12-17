import Conexion from './Conexion.mjs';
export default class Audit {
    
    async getAudit(params){
        const conn = new Conexion()
        const urlApi = 'http://localhost:3000/selectAudit';
        const response = await conn.getData(urlApi, params);
        return response;
    }
    async getCount(params){
        const conn = new Conexion()
        const urlApi = 'http://localhost:3000/count';
        const response = await conn.getData(urlApi, params);
        return response;
    }
}


