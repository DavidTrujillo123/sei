const {} = require("express");
const { db } = require("../config/connection");


const isUser = async (req, res) => {
    const { us_email, us_password } = req.query;
    try {
      const response = await db.one(
        `INSERT INTO comentario(
            pub_id, aut_id, com_descripcion)
            VALUES ( $1, $2, $3) RETURNING *;`,
        [pub_id, aut_id, com_descripcion]
      );
      res.json({
        message: "Comentario Creado con exito!!",
        body: {
          blog: {
            response,
          },
        },
      });
    } catch (error) {
      res.json({
        message: "Error  Fatal al crear el Comentario!!",
        error: { error },
      });
    }
  };


module.exports = {
    isUser
}