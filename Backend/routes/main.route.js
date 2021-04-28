const router =require('express').Router();


const controllerUser = require('../controllers/user.controller.js');
const controllerSearch = require('../controllers/search.controller.js');




router.post('/searchRoute/', controllerSearch.getFlaskd);

router.get('/searchRoute', function(req,res){
    res.render('index')});


module.exports = router;