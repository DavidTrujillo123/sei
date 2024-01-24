const { Router } = require("express"); //funcion de expres para administrar rutas
const router = Router();
const { send_email } = require("../controllers/smtp.controller.js");
const {
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
  count_actions_table_by_user,
} = require("../controllers/admin.controller");

const { getProducts } = require("../controllers/general.controller");

const { isUser, isUserBlock, updateUserBlock} = require("../controllers/users.controller");

//RUTA SMTP
router.post("/smtp", send_email); 

//RUTAS DE USUARIO
router.post("/getProducts", getProducts);

//RUTAS DE ADMINISTRADOR
router.post("/isUser", isUser);
router.post("/updateUserBlock", updateUserBlock);
router.post("/isUserBlock", isUserBlock);
router.get("/count/:action", count_actions);
router.get("/countActions/:id_user", count_actions_by_user);
router.get("/countActionsTable/:id_user", count_actions_table_by_user);


router.get("/selectUsers/:adm_id", select_users);
router.get("/selectUsersActive/:adm_id", select_users_active);
router.get("/selectProducts/:adm_id", select_products);
router.get("/selectCategoriesProducts/:adm_id", select_cat_pro);
router.get("/selectRoles/:adm_id", select_roles);
router.get("/selectAudit/:adm_id", select_audit);
router.get("/selectOrders/:adm_id", select_shopping_order);
router.post("/selectdetOrders/", select_det_shopping_order);

router.post("/insertUser", insert_user);
router.post("/insertCategoryProduct", insert_category_product);
router.post("/insertDetShoppingOrder", insert_det_shopping_order);
router.post("/insertShoppingOrder", insert_shopping_order);
router.post("/insertRole", insert_role);
router.post("/insertProduct", insert_product);

router.put("/updateUser", update_user);
router.put("/updateProduct", update_product);
router.put("/updateCategoryProduct", update_category_product);
router.put("/updateDetShoppingOrder", update_det_shopping_order);
router.put("/updateShoppingOrder", update_shopping_order);
router.put("/updateRole", update_role);

//delete
router.put("/deleteUser", delete_user);
router.delete("/deleteProduct", delete_product);
router.delete("/deleteCategoryProduct", delete_category_product);
router.delete("/deleteDetShoppingOrder", delete_det_shopping_order);
router.delete("/deleteShoppingOrder", delete_shopping_order);
router.delete("/deleteRole", delete_role);

module.exports = router;
