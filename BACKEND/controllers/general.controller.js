const { db } = require("../config/connection");

const getProducts = async (req, res) => {
    const { us_id } = req.query;
    try {
        const response = await db.oneOrNone(
            `select * from select_product($1)`,
            [us_id]
        );
        res.json({
            state: 'TRUE',
            product: response
        });
    } catch (error) {
      res.json({
        state: 'FALSE',
        error: error.message
      });
    }
}

module.exports = {
    getProducts
}
