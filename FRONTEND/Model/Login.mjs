import Conexion from './Conexion.mjs';
export default class Login {
    // async postData(urlApi, obj_data){
    //     try {
    //         const response = await fetch(urlApi, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(obj_data),
    //         });
    //         const data = await response.json();
    //         return data;
    //     } catch (err) {
    //         console.error('Error during login:', err);
    //         throw err; // Puedes manejar el error según tus necesidades
    //     }
    // }
    
    async isUser(obj_data){
        const conn = new Conexion()
        const urlApi = 'http://localhost:3000/isUser';
        const response = await conn.postData(urlApi, obj_data);
        return response;
    }
}


