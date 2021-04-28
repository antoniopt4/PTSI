const router =require('express').Router();


const controllerUser = require('../controllers/user.controller.js');
const controllerSearch = require('../controllers/search.controller.js');


module.exports = router;

router.post('/testmeco/', controllerSearch.getFlaskd);

router.get('/testmeco', function(req,res){
    res.render('index')});


module.exports = router;