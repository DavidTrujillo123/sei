const { } = require("express");
const { db } = require("../config/connection");

const isUser = async (req, res) => {
  const { us_email, us_password } = req.body;
  try {
    const response = await db.oneOrNone(
      `SELECT * from public.login_users($1, $2);`,
      [us_email, us_password]
    );
    if (response) {
      res.json({
        res: "TRUE",
        user: response
        // us_id: response.us_id,
        // us_name: response.us_name,
        // us_email: response.us_email
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
      error: error
    });
  }
}

module.exports = {
  isUser
}