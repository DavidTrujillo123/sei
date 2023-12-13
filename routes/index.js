var express = require('express');
var router = express.Router();

const {Home} = require('../controllers/home.controller')


/* GET home page. */
router.get('/',Home);

module.exports = router;
