const router =require('express').Router();


const controllerUser = require('../controllers/user.controller.js');


//Bolt using moloni
//router.get('/bolt/', controllerBolt.getPackages);
//router.get('/company/', controllerCompany.getCompany);
//router.get('/category/', controllerCategory.getCategory);

//Uber using Jasmin
//router.get('/uber/', controllerUber.getPacotes);

//Kapten using Pipedrive
//router.get('/kapten/', controllerKapten.getPackages);

//Paypal payment
//router.get('/paypal/', controllerPaypal.getPay); //mudar o nome da funçao 'getPay' se for preciso
//router.get('/success/', controllerPaypal.getParameters);
//router.get('/cancel/', controllerPaypal.getCancel);

//Rota Users
//router.get('/users/', controllerUser.read);
//router.get('/cliques/', controllerUser.readC);
//router.post('/cliquesU/',controllerUser.saveU);
//router.post('/cliquesK/',controllerUser.saveK);
//router.post('/cliquesB/',controllerUser.saveB);



module.exports = router;