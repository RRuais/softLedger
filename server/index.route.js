var express = require('express');
var router = express.Router();
var indexController = require('./index.controller.js')

router.get('/getData', indexController.getData);
router.get('/getRates', indexController.getRates);



module.exports = router;
