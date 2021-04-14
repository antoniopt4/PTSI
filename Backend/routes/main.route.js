const router =require('express').Router();


const controllerUser = require('../controllers/user.controller.js');
const controllerSearch = require('../controllers/search.controller.js');


module.exports = router;

// router.post('/search/', controllerSearch.NOME_DO_METODO_NO_CONTROLLER);

router.get('/teste', function(req,res){
    res.render('index')});