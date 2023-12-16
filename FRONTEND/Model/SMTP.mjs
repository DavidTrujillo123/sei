import axios from 'axios';

export default class SMTP {
  constructor() {
    this.apiKey = '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';
    this.apiUrl = 'https://api.brevo.com/v3/smtp/email';
  }

  buildEmailData(recipientEmail, verificationCode, username) {
    return {
      sender: {
        name: 'Código autentificación SEI',
        email: 'cursosutn95@gmail.com',
      },
      to: [
        {
          email: recipientEmail,
          name: username,
        },
      ],
      subject: 'Código de Verificación',
      htmlContent: `
        <html>
          <head>
          </head>
          <body>
            <p>Tu código de verificación es: <strong>${verificationCode}</strong></p>
          </body>
        </html>`,
    };
  }


  async sendVerificationEmail(recipientEmail, verificationCode,username) {
    console.log("1:"+recipientEmail + "2"+username + "3"+verificationCode)
    const emailData = this.buildEmailData(recipientEmail, verificationCode, username);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'api-key': this.apiKey,
      },
    };

    try {
      
      const response = await axios.post(this.apiUrl, emailData, config);
      console.log(response);
      return response;
    } catch (error) {
        return error.message;
    }

    
  }
}

// //const axios = require('axios');


// // URL de la API Brevo
// const apiUrl = 'https://api.brevo.com/v3/smtp/email';
// // API key proporcionada por Brevo
// const apiKey = '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';

// // Dirección de correo electrónico a la que se enviará el código de verificación
// const recipientEmail = 'david-alfredo21@hotmail.com';

// // Generar un código de verificación (puedes implementar tu lógica aquí)
// const verificationCode = generateVerificationCode();

// // Datos del correo electrónico con el código de verificación
// const emailData = {
//   sender: {
//     name: 'Código autentificación SEI',
//     email: 'cursosutn95@gmail.com',
//   },
//   to: [
//     {
//       email: recipientEmail,
//       name: 'JORDI',
//     },
//   ],
//   subject: 'Código de Verificación',
//   htmlContent: `
//     <html>
//         <head>
//         </head>
//         <body>
//             <p>Tu código de verificación es: <strong>${verificationCode}</strong></p>
//         </body>
//     </html>`,
// };

// // Configuración de la solicitud HTTP
// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'api-key': apiKey,
//   },
// };
// // Realizar la solicitud POST a la API Brevo
// axios.post(apiUrl, emailData, config)
//   .then(response => {
//     console.log('Código de verificación enviado con éxito. Respuesta de la API:', response.data);
//   })
//   .catch(error => {
//     console.error('Error al enviar la solicitud:', error.message);
//   });
// // Función para generar un código de verificación simple (puedes personalizarla según tus necesidades)
// function generateVerificationCode() {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }