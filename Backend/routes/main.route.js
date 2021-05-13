const router =require('express').Router();


const controllerUser = require('../controllers/user.controller.js');
const controllerSearchTopic = require('../controllers/searchTopic.controller.js');
const controllerSearchID = require('../controllers/searchID.controller.js');




router.post('/searchTopic/', controllerSearchTopic.srchTop);
router.post('/searchID/', controllerSearchID.srchID);

router.get('/searchTopic', function(req,res){
    res.render('index')});

router.get('/searchID', function(req,res){
    res.render('index')});
    


module.exports = router;