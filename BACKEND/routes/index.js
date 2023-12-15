const {Router} = require('express');//funcion de expres para administrar rutas
const router = Router();
const {postUser,
    select_users,
select_products,
select_roles,
select_shopping_order} = require('../controllers/admin.controller');
const {getProducts} = require('../controllers/general.controller');

const {
    isUser
} = require('../controllers/users.controller');



router.post('/getProducts',getProducts);


//RUTAS DE ADMINISTRADOR
router.post('/isUser',isUser);
router.get('/selectUsers/:adm_id',select_users);
router.get('/selectProducts/:adm_id',select_products);
router.get('/selectRoles/:adm_id',select_roles);
router.get('/selectOrders/:adm_id',select_shopping_order);

module.exports = router;