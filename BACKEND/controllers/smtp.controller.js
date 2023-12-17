//import axios from 'axios';
const axios = require('axios');
let apiurl = process.env.APIURL;
let apikey = process.env.APIKEY;
const send_email = async (req, res) => {
    const { recipientEmail, verificationCode, username } = req.body;
    try {
        let response = await sendVerificationEmail(recipientEmail, verificationCode, username);
        res.json({
            res: "Correo enviado correctamente",
        }); 
    } catch (error) {
        res.json({
            res: "Error al enviar correo",
            error: error.message,
          });
    }
};

function buildEmailData(recipientEmail, verificationCode, username) {
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
async function sendVerificationEmail(recipientEmail, verificationCode, username) {
    const emailData = buildEmailData(recipientEmail, verificationCode, username);

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'api-key': apikey,
        },
    };

    try {
        const response = await axios.post(apiurl, emailData, config);
        return response;
    } catch (error) {
        return error.message;
    }


}
module.exports = {
    send_email,
}


//   export default class SMTP {
//     constructor() {
//       //this.apiKey = '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';
//       this.apiKey = '';
//       this.apiUrl = 'https://api.brevo.com/v3/smtp/email';
//     }

//     buildEmailData(recipientEmail, verificationCode, username) {
//       return {
//         sender: {
//           name: 'Código autentificación SEI',
//           email: 'cursosutn95@gmail.com',
//         },
//         to: [
//           {
//             email: recipientEmail,
//             name: username,
//           },
//         ],
//         subject: 'Código de Verificación',
//         htmlContent: `
//           <html>
//             <head>
//             </head>
//             <body>
//               <p>Tu código de verificación es: <strong>${verificationCode}</strong></p>
//             </body>
//           </html>`,
//       };
//     }



//   }

