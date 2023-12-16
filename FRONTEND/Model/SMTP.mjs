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
