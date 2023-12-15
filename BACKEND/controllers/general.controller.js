const { db } = require("../config/connection");

const getProducts = async (req, res) => {
    const { us_id } = req.query;
    try {
        const response = await db.oneOrNone(
            `select * from select_product($1)`,
            [us_id]
        );
        res.json({
            state: true,
            product: response
        });
    } catch (error) {
      res.json({
        state: false,
        error: error.message
      });
    }
}

const select_products = async (req, res) => {
    const adm_id  = req.params.adm_id;
    try {
      const response = await db.any(
        `SELECT * FROM select_product($1);`,
        [adm_id]
      );
      if (response) {
        res.json({
          response
        });
      } else {
        res.json({
          res: "Productos no encontrados"
        });
      }
    } catch (error) {
      res.json({
        res: "ERROR",
        error: error.message
      });
    }
  };

  const select_shopping_order = async (req, res) => {
    const adm_id  = req.params.adm_id;
    try {
      const response = await db.any(
        `SELECT * FROM select_shopping_order($1);`,
        [adm_id]
      );
      if (response) {
        res.json({
          response
        });
      } else {
        res.json({
          res: "Ordenes no encontradas"
        });
      }
    } catch (error) {
      res.json({
        res: "ERROR",
        error: error.message
      });
    }
  };

  const select_det_shopping_order = async (req, res) => {
    const adm_id  = req.params.adm_id;
    const ord_id =  req.query.ord_id;
    try {
      const response = await db.any(
        `SELECT * FROM select_det_shopping_order($1,$2);`,
        [adm_id,ord_id]
      );
      if (response) {
        res.json({
          response
        });
      } else {
        res.json({
          res: "Ordenes no encontradas"
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
    getProducts
}
