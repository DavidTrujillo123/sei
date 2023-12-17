import Conexion from './Conexion.mjs';
export default class SMTP {
  	sendEmail (email, code, username) {
      let con = new Conexion();
      let url = 'http://localhost:3000/smtp';
      let obj_data = {
        recipientEmail: email,
        verificationCode: code,
        username: username
      }
      let response = con.postData(url, obj_data);
      return response;
    }
}
