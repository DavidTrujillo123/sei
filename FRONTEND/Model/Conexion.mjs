export default class Conexion {
    async postData(urlApi, obj_data){
        try {
            const response = await fetch(urlApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj_data),
            });
            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Error during login:', err);
            throw err; // Puedes manejar el error según tus necesidades
        }
    }
    async getData(urlApi, params) {
        try {
            // Realiza la solicitud GET
            const response = await fetch(`${urlApi}/${params}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            // Maneja la respuesta
            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Error during GET request:', err);
            throw err; // Puedes manejar el error según tus necesidades
        }
    }
    async putData(urlApi, obj_data){
        try {
            const response = await fetch(urlApi, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj_data),
            });
            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Error during PUT:', err);
            throw err;
        }
    }
    async deleteData(urlApi, obj_data){
        try {
            const response = await fetch(urlApi, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj_data),
            });
            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Error during DELETE:', err);
            throw err;
        }
    }
}