const {Router} = require('express');//funcion de expres para administrar rutas
const router = Router();
const {postUser} = require('../controllers/admin.controller');

const {
    isUser
} = require('../controllers/users.controller');

router.post('/isUser',isUser);

module.exports = router;