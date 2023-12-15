const { } = require("express");
const { db } = require("../config/connection");

const postUser = async (req, res) => {
  const { rol_id_p, us_name_p,
    us_surname_p, us_email_p,
    us_password_p, us_id_created } = req.query;
  try {
    const response = await db.any(
      `CALL insert_users($1, $2, $3, $4, $5, true, $6);`,
      [rol_id_p, us_name_p, us_surname_p,
        us_email_p, us_password_p, us_id_created]
    );
    res.json({
      message: "Usuario creado con exito!!",
      body: {
        user: {
          response: {
            rol_id: rol_id_p,
            us_name: us_name_p,
            us_surname: us_surname_p,
            us_email: us_email_p,
            us_password: us_password_p,
            us_state: true,
          },
        },
      },
    });
  } catch (error) {
    res.json({
      message: "Error al crear el Usuario!!",
      error: { error },
    });
  }
};

const select_users = async (req, res) => {
  const adm_id  = req.params.adm_id;
  console.log(adm_id);
  try {
    const response = await db.any(
      `SELECT * FROM select_users($1);`,
      [adm_id]
    );
    if (response) {
      res.json({
        response
      });
    } else {
      res.json({
        res: "Usuarios no encontrados"
      });
    }
  } catch (error) {
    res.json({
      res: "ERROR",
      error: error.message
    });
  }
};



module.exports = {
  postUser,
  select_users
}