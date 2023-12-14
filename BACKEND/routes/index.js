const {Router} = require('express');//funcion de expres para administrar rutas
const router = Router();
const {postUser} = require('../controllers/admin.controller');

router.post('/admin', postUser);


module.exports = router;