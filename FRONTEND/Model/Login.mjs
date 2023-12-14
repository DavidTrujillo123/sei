export default class Login {
    async isUser(us_email_p, us_password_p) {
        const apiUrl = 'http://localhost:3000/isUser';

        const postData_p = {
            us_email: us_email_p,
            us_password: us_password_p
        };

        console.log(postData_p);

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData_p)
            });

            // Manejar la respuesta de la API
            const datar = await response.json();
            console.log(datar); // Puedes realizar acciones con la respuesta aquí


        } catch (error) {
            console.error('Error:', error);
        }
    }
}


