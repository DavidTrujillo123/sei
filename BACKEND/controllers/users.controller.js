const { } = require("express");
const { db } = require("../config/connection");

const isUser = async (req, res) => {
  const { us_email, us_password } = req.body;
  try {
    const user = await db.oneOrNone(
      `SELECT * from users where us_email like $1;`,
      [us_email]
    );
    if(user){
      const response = await db.oneOrNone(
        `SELECT * from public.login_users($1, $2);`,
        [us_email, us_password]
      );
      if (response) {
        res.json({
          res: "TRUE",
          user: response
        });
      } else {
        res.json({
          res: "FALSE",
          error: "User not found or incorrect credentials"
        });
      }
    }
    else{
      res.json({
        res: "NOT_FOUND",
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


const isUserBlock = async (req, res) => {
  const { us_email } = req.body;
  try {
    const response = await db.oneOrNone(
      `
      SELECT 
        us_block
      FROM
        users
      WHERE
        us_email = $1
      `,
      [us_email]
    );
    //console.log(response.us_block);
    if (response) {
      res.json({
        res:response.us_block
      });
    } else {
      res.json({
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


const updateUserBlock = async (req, res) => {
  const { us_email } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await db.oneOrNone(
      `
      SELECT 
        us_id,
        us_block
      FROM
        users
      WHERE
        us_email = $1
      `,
      [us_email]
    );

    if (user) {
      // El usuario existe, actualizar el campo us_block a false
      await db.none(
        `
        UPDATE users
        SET us_block = true
        WHERE us_id = $1
        `,
        [user.us_id]
      );

      res.json({
        success: true,
        message: "User block status updated to false",
      });
    } else {
      res.json({
        error: "User not found or incorrect credentials",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      error: error.message || "An error occurred while updating user block status",
    });
  }
};


module.exports = {
  isUser,
  isUserBlock,
  updateUserBlock
}