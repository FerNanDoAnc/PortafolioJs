'use strict';

var express = require('express');
var ProjectController = require('../controllers/project');   //importar el controlador

var router =express.Router(); //cargar servico para cceder a sus metodos

router.get('/home',ProjectController.home);     //accedemos al home que viene del cotrolador
router.post('/test',ProjectController.test);    //ruta wuee carga el metodo del contrlador llamado teste

module.exports = router;    //cargar esta ruta en el app.js