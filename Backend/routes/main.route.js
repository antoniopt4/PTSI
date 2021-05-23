const router =require('express').Router();


const controllerUser = require('../controllers/user.controller.js');
const controllerSearchTopic = require('../controllers/searchTopic.controller.js');
const controllerSearchProfile = require('../controllers/searchProfile.controller.js');
const controllerCreateChart = require('../controllers/createChart.controller.js');



router.post('/searchTopic/', controllerSearchTopic.srchTop);
router.post('/searchProfile/', controllerSearchProfile.srchProfile);
router.get('/getWord/', controllerCreateChart.crtChart);
    


router.get('/searchTopic', function(req,res){
    res.render('index')});

router.get('/searchProfile', function(req,res){
    res.render('index')});


module.exports = router;