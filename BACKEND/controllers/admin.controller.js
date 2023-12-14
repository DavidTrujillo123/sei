const {} = require("express");
const { db } = require("../config/connection");

const postUser = async (req, res) => {
    const {rol_id_p,us_name_p ,
        us_surname_p,us_email_p,
        us_password_p,
        us_state_p,us_id_created} = req.query;
    try {
      const response = await db.one(
        `CALL insert_users($1, $2, $3, $4, $5, %6, $7);`,
        [rol_id_p,us_name_p ,
         us_surname_p,us_email_p,
         us_password_p,
         us_state_p,us_id_created]
      );
      res.json({
        message: "Usuario creado con exito!!",
        // body: {
        //   blog: {
        //     response,
        //   },
        // },
      });
    } catch (error) {
      res.json({
        message: "Error  Fatal al crear el Comentario!!",
        error: { error },
      });
    }
  };


module.exports = {
    postUser
}