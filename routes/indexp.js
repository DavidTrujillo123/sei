const {Router} = require('express');//funcion de expres para administrar rutas
const {
    getPizza, getPizzaByID, 
    createPizza, updatePizza, 
    deletePizza
} = require('../controllers/pizza.controller');


const router = Router();
router.get('/pizzas', getPizza);
router.get('/pizzas/:id', getPizzaByID);//parametro, debe coincidir

router.post('/pizzas', createPizza);

router.put('/pizzas/', updatePizza);

router.delete('/pizzas/', deletePizza);
module.exports = router;