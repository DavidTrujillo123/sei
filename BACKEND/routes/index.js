const {Router} = require('express');//funcion de expres para administrar rutas
const router = Router();

const {
    isUser
} = require('../controllers/users.controller');

router.get('/isUser',isUser);

module.exports = router;