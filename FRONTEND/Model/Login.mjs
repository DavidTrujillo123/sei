export default class Login {
    isUser(us_email, us_password) {
        const apiUrl = 'http://localhost/isUser';
        const postData = { us_email: us_email, us_password: us_password };

        postData(apiUrl, postData)
            .then(data => {
                console.log('Respuesta:', data)
                if (data.res == true) {
                    return data
                }
                else{
                    return 'Usuario no encontrado'
                }
            }
            )
            .catch(error => console.error('Error en la solicitud:', error));
    }

    async postData(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            return console.error('Error:', error);
        }
    }
}

