const {Router} = require('express');//funcion de expres para administrar rutas
const router = Router();
const {postUser,select_users} = require('../controllers/admin.controller');
const {getProducts} = require('../controllers/general.controller');

const {
    isUser
} = require('../controllers/users.controller');

router.post('/isUser',isUser);

router.post('/getProducts',getProducts);

router.get('/selectUsers/:adm_id',select_users);

module.exports = router;