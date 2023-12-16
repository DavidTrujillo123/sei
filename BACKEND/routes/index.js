const {Router} = require('express');//funcion de expres para administrar rutas
const router = Router();
const {
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
    insert_user,
    update_user} = require('../controllers/admin.controller');

const {getProducts} = require('../controllers/general.controller');

const {
    isUser
} = require('../controllers/users.controller');


//RUTAS DE USUARIO
router.post('/getProducts',getProducts);


//RUTAS DE ADMINISTRADOR
router.post('/isUser',isUser);
router.get('/selectUsers/:adm_id',select_users);
router.get('/selectProducts/:adm_id',select_products);
router.get('/selectCategoriesProducts/:adm_id',select_cat_pro);
router.get('/selectRoles/:adm_id',select_roles);
router.get('/selectAudit/:adm_id',select_audit);
router.get('/selectOrders/:adm_id',select_shopping_order);
router.post('/selectdetOrders/',select_det_shopping_order);


router.post('/insertUser',insert_user);
router.post('/insertCategoryProducts',insert_category_product);
router.post('/insertDetShoppingOrder',insert_det_shopping_order);
router.post('/insertShoppingOrder',insert_shopping_order);

router.put('/updateUser',update_user);






module.exports = router;