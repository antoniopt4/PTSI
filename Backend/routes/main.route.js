const router =require('express').Router();


const controllerUser = require('../controllers/user.controller.js');
const controlleSearch = require('../controllers/search.controller.js');


module.exports = router;

router.post('/search/', controllerSearch.NOME_DO_METODO_NO_CONTROLLER);