const {} = require("express");
const { db } = require("../config/connection");

const select_users = async (req, res) => {
  const adm_id = req.params.adm_id;
  try {
    const response = await db.any(`SELECT * FROM select_users($1);`, [adm_id]);
    if (response) {
      res.json({
        response,
      });
    } else {
      res.json({
        res: "Usuarios no encontrados",
      });
    }
  } catch (error) {
    res.json({
      res: "ERROR",
      error: error.message,
    });
  }
};

const select_products = async (req, res) => {
  const adm_id = req.params.adm_id;
  try {
    const response = await db.any(`SELECT * FROM select_product($1);`, [
      adm_id,
    ]);
    if (response) {
      res.json({
        response,
      });
    } else {
      res.json({
        res: "Productos no encontrados",
      });
    }
  } catch (error) {
    res.json({
      res: "ERROR",
      error: error.message,
    });
  }
};

const select_cat_pro = async (req, res) => {
  const adm_id = req.params.adm_id;
  try {
    const response = await db.any(`SELECT * FROM select_cat_pro($1);`, [
      adm_id,
    ]);
    if (response) {
      res.json({
        response,
      });
    } else {
      res.json({
        res: "Categorias no encontradas",
      });
    }
  } catch (error) {
    res.json({
      res: "ERROR",
      error: error.message,
    });
  }
};

const select_roles = async (req, res) => {
  const adm_id = req.params.adm_id;
  try {
    const response = await db.any(`SELECT * FROM select_role($1);`, [adm_id]);
    if (response) {
      res.json({
        response,
      });
    } else {
      res.json({
        res: "Roles no encontrados",
      });
    }
  } catch (error) {
    res.json({
      res: "ERROR",
      error: error.message,
    });
  }
};

const select_audit = async (req, res) => {
  const adm_id = req.params.adm_id;
  try {
    const response = await db.any(`SELECT * FROM select_audit($1);`, [adm_id]);
    if (response) {
      res.json({
        response,
      });
    } else {
      res.json({
        res: "Registros no encontrados",
      });
    }
  } catch (error) {
    res.json({
      res: "ERROR",
      error: error.message,
    });
  }
};

const select_shopping_order = async (req, res) => {
  const adm_id = req.params.adm_id;
  try {
    const response = await db.any(`SELECT * FROM select_shopping_order($1);`, [
      adm_id,
    ]);
    if (response) {
      res.json({
        response,
      });
    } else {
      res.json({
        res: "Ordenes no encontradas",
      });
    }
  } catch (error) {
    res.json({
      res: "ERROR",
      error: error.message,
    });
  }
};

const select_det_shopping_order = async (req, res) => {
  const adm_id = req.params.adm_id;
  const ord_id = req.query.ord_id;
  try {
    const response = await db.any(
      `SELECT * FROM select_det_shopping_order($1,$2);`,
      [adm_id, ord_id]
    );
    if (response) {
      res.json({
        response,
      });
    } else {
      res.json({
        res: "Ordenes no encontradas",
      });
    }
  } catch (error) {
    res.json({
      res: "ERROR",
      error: error.message,
    });
  }
};

const insert_user = async (req, res) => {
  const {
    rol_id_p,
    us_name_p,
    us_surname_p,
    us_email_p,
    us_password_p,
    us_id_created,
  } = req.query;
  try {
    const response = await db.any(
      `CALL insert_users($1, $2, $3, $4, $5, true, $6);`,
      [
        rol_id_p,
        us_name_p,
        us_surname_p,
        us_email_p,
        us_password_p,
        us_id_created,
      ]
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

const insert_category_product = async (req, res) => {
  const { cat_name_p, id_aut } = req.query;
  try {
    const response = await db.any(
      `CALL public.insert_category_product($1,$2)`,
      [cat_name_p, id_aut]
    );
    res.json({
      res: "Categoria creada con exito"
    });
  } catch (error) {
    res.json({
      res: "Error al crear la categoria",
      error: error.message,
    });
  }
};

const insert_det_shopping_order = async (req, res) => {
  const { so_id_p, pro_id_p, det_quantity_p, det_price_p, us_id_created } = req.query;
  try {
    const response = await db.any(
      `CALL public.insert_det_shopping_order($1,$2,$3,$4,$5)`,
      [so_id_p, pro_id_p, det_quantity_p, det_price_p, us_id_created]
    );
    res.json({
      res: "Detalle creada con exito"
    });
  } catch (error) {
    res.json({
      res: "Error al crear el responde",
      error: error.message,
    });
  }
};

const insert_shopping_order = async (req, res) => {
  const { us_id_p, so_price_p, so_state_p, us_id_created } = req.query;
  try {
    const response = await db.any(
      `CALL public.insert_shopping_order($1,$2,$3,$4)`,
      [us_id_p, so_price_p, so_state_p, us_id_created]
    );
    res.json({
      res: "Orden creada con exito"
    });
  } catch (error) {
    res.json({
      res: "Error al crear la orden",
      error: error.message,
    });
  }
};

module.exports = {
  select_users,
  select_products,
  select_roles,
  select_audit,
  select_shopping_order,
  select_det_shopping_order,
  select_cat_pro,
  insert_category_product,
  insert_det_shopping_order,
  insert_shopping_order,
  insert_user
};
