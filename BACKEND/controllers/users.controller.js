const {} = require("express");
const { db } = require("../config/connection");


const isUser = async (req, res) => {
    const { us_email, us_password } = req.query;
    try {
      const response = await db.oneOrNone(
        `SELECT * FROM select_users(1)
        WHERE us_email = $1
        AND us_password = crypt($2, us_password);`,
        [us_email, us_password]
      );
      if (response) {
        res.json({
          res: "TRUE",
          us_id: response.us_id,
          us_nombre: response.us_name,
          us_email: response.us_email
        });
      } else {
        res.json({
          res: "FALSE",
          error: "User not found or incorrect credentials"
        });
      }
    } catch (error) {
      res.json({
        res: "FALSE",
        error: error.message
      });
    }
  };


module.exports = {
    isUser
}