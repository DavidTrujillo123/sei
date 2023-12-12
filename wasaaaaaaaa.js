const axios = require('axios');

// URL de la API Brevo
const apiUrl = 'https://api.brevo.com/v3/smtp/email';

// API key proporcionada por Brevo
const apiKey = 'YOUR_API_KEY';

// Dirección de correo electrónico a la que se enviará el código de verificación
const recipientEmail = 'testmail@example.com';

// Generar un código de verificación (puedes implementar tu lógica aquí)
const verificationCode = generateVerificationCode();

// Datos del correo electrónico con el código de verificación
const emailData = {
  sender: {
    name: 'Sender Alex',
    email: 'senderalex@example.com',
  },
  to: [
    {
      email: recipientEmail,
      name: 'Recipient Name',
    },
  ],
  subject: 'Código de Verificación',
  htmlContent: `<html><head></head><body><p>Tu código de verificación es: <strong>${verificationCode}</strong></p></body></html>`,
};

// Configuración de la solicitud HTTP
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'api-key': apiKey,
  },
};

// Realizar la solicitud POST a la API Brevo
axios.post(apiUrl, emailData, config)
  .then(response => {
    console.log('Código de verificación enviado con éxito. Respuesta de la API:', response.data);
  })
  .catch(error => {
    console.error('Error al enviar la solicitud:', error.message);
  });

// Función para generar un código de verificación simple (puedes personalizarla según tus necesidades)
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
