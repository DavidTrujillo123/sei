const {} = require("express");
const { db } = require("../config/connection");

//SELECTS

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

const select_users_active = async (req, res) => {
  const adm_id = req.params.adm_id;
  try {
    const response = await db.any(`SELECT * FROM select_users($1) WHERE us_state = TRUE;`, [adm_id]);
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
  const { adm_id, ord_id } = req.query;
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

//INSERTS

const insert_category_product = async (req, res) => {
  const { cat_name_p, id_aut } = req.body;
  try {
    const response = await db.any(
      `CALL public.insert_category_product($1,true,$2)`,
      [cat_name_p, id_aut]
    );
    res.json({
      res: "Categoria creada con exito",
    });
  } catch (error) {
    res.json({
      res: "Error al crear la categoria",
      error: error.message,
    });
  }
};

const insert_det_shopping_order = async (req, res) => {
  const { so_id_p, 
          pro_id_p, 
          det_quantity_p,
          us_id_created 
  } = req.body; 
  try {
    const response = await db.any(
      `CALL public.insert_det_shopping_order($1,$2,$3,true,$4)`,
      [so_id_p, pro_id_p, det_quantity_p, us_id_created]
    );
    res.json({
      res: "Detalle creada con exito",
    });
  } catch (error) {
    res.json({
      res: "Error al crear el responde",
      error: error.message,
    });
  }
};

const insert_shopping_order = async (req, res) => {
  const { us_id_p, so_price_p, us_id_created } = req.body;
  try {
    const response = await db.any(
      `CALL public.insert_shopping_order($1,$2,true,$3)`,
      [us_id_p, so_price_p, us_id_created]
    );
    res.json({
      res: "Orden creada con exito",
    });
  } catch (error) {
    res.json({
      res: "Error al crear la orden",
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
  } = req.body;
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
      user: {
        rol_id: rol_id_p,
        us_name: us_name_p,
        us_surname: us_surname_p,
        us_email: us_email_p,
        us_password: us_password_p
      },
    });
  } catch (error) {
    res.json({
      message: "Error al crear el Usuario!!",
      error: { error },
    });
  }
};

const insert_product = async (req, res) => {
  const {
    cat_id_p,
    pro_name_p,
    pro_price_p,
    pro_stock_p,
    pro_img_p,
    pro_description_p,
    us_id_created,
  } = req.body;
  try {
    const response = await db.any(
      `CALL insert_product($1, $2, $3, $4, $5, true, $6,$7);`,
      [
        cat_id_p,
        pro_name_p,
        pro_price_p,
        pro_stock_p,
        pro_img_p,
        pro_description_p,
        us_id_created,
      ]
    );
    res.json({
      message: "Producto creado con exito!!"
    });
  } catch (error) {
    res.json({
      message: "Error al crear el Producto!!",
      error: { error },
    });
  }
};

const insert_role = async (req, res) => {
  const { rol_name_p, id_aut } = req.body;
  try {
    const response = await db.any(
      `CALL public.insert_role($1,true,$2)`,
      [rol_name_p, id_aut]
    );
    res.json({
      res: "Rol creado con exito",
    });
  } catch (error) {
    res.json({
      res: "Error al crear el Rol",
      error: error.message,
    });
  }
};

//UPDATES

const update_user = async (req, res) => {
  const {
    us_id_p,
    rol_id_p,
    us_name_p,
    us_surname_p,
    us_email_p,
    us_password_p,
    us_state_p,
    us_id_created,
  } = req.body;
  try {
    const response = await db.any(
      `CALL public.update_users($1,$2,$3,$4,$5,$6,$7,$8);`,
      [
        us_id_p,
        rol_id_p,
        us_name_p,
        us_surname_p,
        us_email_p,
        us_password_p,
        us_state_p,
        us_id_created,
      ]
    );
    res.json({
      message: "Usuario actualizado con exito!!",
      user: {
        us_id: us_id_p,
        rol_id: rol_id_p,
        us_name: us_name_p,
        us_surname: us_surname_p,
        us_email: us_email_p,
        us_password: us_password_p,
        us_state: us_state_p,
      },
    });
  } catch (error) {
    res.json({
      message: "Error al actualizar el Usuario!!",
      error: { error },
    });
  }
};

const update_product = async (req, res) => {
  const {
    pro_id_p,
    cat_id_p,
    pro_name_p,
    pro_price_p,
    pro_stock_p,
    pro_img_p,
    pro_description_p,
    pro_state_p,
    us_id_created,
  } = req.body;
  try {
    const response = await db.any(
      `CALL public.update_product($1,$2,$3,$4,$5,$6,$7,$8);`,
      [
        pro_id_p,
        cat_id_p,
        pro_name_p,
        pro_price_p,
        pro_stock_p,
        pro_img_p,
        pro_description_p,
        pro_state_p,
        us_id_created,
      ]
    );
    res.json({
      message: "Producto actualizado con exito!!",
      product: {
        pro_id: pro_id_p,
        cat_id: cat_id_p,
        pro_name: pro_name_p,
        pro_price: pro_price_p,
        pro_stock: pro_stock_p,
        pro_img: pro_img_p,
        pro_description: pro_description_p,
        pro_state: pro_state_p,
      },
    });
  } catch (error) {
    res.json({
      message: "Error al actualizar el Producto!!",
      error: { error },
    });
  }
};

const update_role = async (req, res) => {
  const { rol_id_p, rol_name_p, rol_state_p, us_id_created } = req.body;
  try {
    const response = await db.any(`CALL public.update_role($1,$2,$3,$4);`, [
      rol_id_p,
      rol_name_p,
      rol_state_p,
      us_id_created,
    ]);
    res.json({
      message: "Rol actualizado con exito!!",
      role: {
        rol_id: rol_id_p,
        rol_name: rol_name_p,
        rol_state: rol_state_p,
      },
    });
  } catch (error) {
    res.json({
      message: "Error al actualizar el Rol!!",
      error: { error },
    });
  }
};

const update_shopping_order = async (req, res) => {
  const { so_id_p, us_id_p, so_price_p, so_state_p, so_date_p, us_id_created } =
    req.body;
  try {
    const response = await db.any(
      `CALL public.update_shopping_order($1,$2,$3,$4,$5,$6);`,
      [so_id_p, us_id_p, so_price_p, so_state_p, so_date_p, us_id_created]
    );
    res.json({
      message: "Orden actualizada con exito!!",
      order: {
        so_id: so_id_p,
        us_id: us_id_p,
        so_price: so_price_p,
        so_state: so_state_p,
        so_date: so_date_p,
      },
    });
  } catch (error) {
    res.json({
      message: "Error al actualizar la Orden!!",
      error: { error },
    });
  }
};

const update_det_shopping_order = async (req, res) => {
  const {
    det_id_p,
    so_id_p,
    pro_id_p,
    det_quantity_p,
    det_price_p,
    det_state_p,
    us_id_created,
  } = req.body;
  try {
    const response = await db.any(
      `CALL public.update_det_shopping_order($1,$2,$3,$4,$5,$6,$7);`,
      [
        det_id_p,
        so_id_p,
        pro_id_p,
        det_quantity_p,
        det_price_p,
        det_state_p,
        us_id_created,
      ]
    );
    res.json({
      message: "OrdenDet actualizada con exito!!",
      order_det: {
        det_id: det_id_p,
        so_id: so_id_p,
        pro_id: pro_id_p,
        det_quantity: det_quantity_p,
        det_price: det_price_p,
        det_state: det_state_p,
      },
    });
  } catch (error) {
    res.json({
      message: "Error al actualizar la OrdenDet!!",
      error: { error },
    });
  }
};

const update_category_product = async (req, res) => {
  const { cat_id_p, cat_name_p, cat_state_p, us_id_created } = req.body;
  try {
    const response = await db.any(
      `CALL public.update_category_product($1,$2,$3,$4);`,
      [cat_id_p, cat_state_p, cat_name_p, us_id_created]
    );
    res.json({
      message: "Categoria actualizado con exito!!",
      role: {
        cat_id: cat_id_p,
        cat_name: cat_name_p,
        cat_state: cat_state_p,
      },
    });
  } catch (error) {
    res.json({
      message: "Error al actualizar la Categoria!!",
      error: { error },
    });
  }
};

//DELETES

const delete_user = async (req, res) => {
  const { us_id_p, us_id_created } = req.body;
  try {
    const response = await db.any(`CALL public.delete_user($1,$2);`, [
      us_id_p,
      us_id_created,
    ]);
    res.json({
      message: "Usuario eliminado con exito!!",
    });
  } catch (error) {
    res.json({
      message: "Error al eliminar el Usuario!!",
      error: { error },
    });
  }
};

const delete_product = async (req, res) => {
  const { pro_id_p, us_id_created } = req.query;
  try {
    const response = await db.any(`CALL public.delete_product($1,$2);`, [
      pro_id_p,
      us_id_created,
    ]);
    res.json({
      message: "Producto eliminado con exito!!",
    });
  } catch (error) {
    res.json({
      message: "Error al eliminar el Producto!!",
      error: { error },
    });
  }
};

const delete_role = async (req, res) => {
  const { rol_id_p, us_id_created } = req.body;
  try {
    const response = await db.any(`CALL public.delete_role($1,$2);`, [
      rol_id_p,
      us_id_created,
    ]);
    res.json({
      message: "Rol eliminado con exito!!",
    });
  } catch (error) {
    res.json({
      message: "Error al eliminar el Rol!!",
      error: { error },
    });
  }
};

const delete_category_product = async (req, res) => {
  const { cat_id_p, us_id_created } = req.body;
  try {
    const response = await db.any(
      `CALL public.delete_category_product($1,$2);`,
      [cat_id_p, us_id_created]
    );
    res.json({
      message: "Categoria eliminado con exito!!",
    });
  } catch (error) {
    res.json({
      message: "Error al eliminar el Categoria!!",
      error: { error },
    });
  }
};

const delete_shopping_order = async (req, res) => {
  const { so_id_p, us_id_created } = req.body;
  try {
    const response = await db.any(`CALL public.delete_shopping_order($1,$2);`, [
      so_id_p,
      us_id_created,
    ]);
    res.json({
      message: "Orden eliminado con exito!!",
    });
  } catch (error) {
    res.json({
      message: "Error al eliminar el Orden!!",
      error: { error },
    });
  }
};

const delete_det_shopping_order = async (req, res) => {
  const { det_id_p, us_id_created } = req.body;
  try {
    const response = await db.any(
      `CALL public.delete_det_shopping_order($1,$2);`,
      [det_id_p, us_id_created]
    );
    res.json({
      message: "OrdenDet eliminado con exito!!",
    });
  } catch (error) {
    res.json({
      message: "Error al eliminar el OrdenDet!!",
      error: { error },
    });
  }
};


const count_actions = async (req, res) => {
  const action = req.params.action;
  try {
    const response = await db.any(`
    select u.us_name, count(*)
from audit a, users u
where u.us_id = a.us_id
and au_action = $1
group by u.us_id;`,[action]);
    if (response) {
      res.json(
        response
      );
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

const count_actions_by_user = async (req, res) => {
  const id_user = req.params.id_user;
  try {
    const response = await db.any(`
    select a.au_action, count(*)
from audit a, users u
where u.us_id = a.us_id
and a.us_id = $1
group by a.au_action;`,[id_user]);
    if (response) {
      res.json(
        response
      );
    } else {
      res.json({
        res: "Actions no encontrados",
      });
    }
  } catch (error) {
    res.json({
      res: "ERROR",
      error: error.message,
    });
  }
};

const count_actions_table_by_user = async (req, res) => {
  const id_user = req.params.id_user;
  try {
    const response = await db.any(
     `select a.au_action, a.au_table, count(*)
      from audit a, users u
      where u.us_id = a.us_id
      and a.us_id = $1
      group by a.au_action, a.au_table
      order by a.au_action;`,
      [id_user]);
    if (response) {
      res.json(
        response
      );
    } else {
      res.json({
        res: "Actions no encontrados",
      });
    }
  } catch (error) {
    res.json({
      res: "ERROR",
      error: error.message,
    });
  }
};

module.exports = {
  select_users,
  select_users_active,
  select_products,
  select_roles,
  select_audit,
  select_shopping_order,
  select_det_shopping_order,
  select_cat_pro,

  insert_category_product,
  insert_det_shopping_order,
  insert_shopping_order,
  insert_user,
  insert_product,
  insert_role,

  update_user,
  update_product,
  update_role,
  update_category_product,
  update_det_shopping_order,
  update_shopping_order,

  delete_category_product,
  delete_det_shopping_order,
  delete_product,
  delete_shopping_order,
  delete_role,
  delete_user,

  count_actions,
  count_actions_by_user,
  count_actions_table_by_user
};
