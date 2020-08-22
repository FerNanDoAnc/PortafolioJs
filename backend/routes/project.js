'use strict';

var express = require('express');
var ProjectController = require('../controllers/project');   //importar el controlador

var router =express.Router(); //cargar servico para cceder a sus metodos

//middleware ---para subir imagenes
var multipart= require('connect-multiparty');

router.get('/home',ProjectController.home);     //accedemos al home que viene del cotrolador
router.post('/test',ProjectController.test);    //ruta wuee carga el metodo del contrlador llamado teste
router.post('/save-project',ProjectController.saveProject);
router.get('/project/:id?',ProjectController.getProject);
//../:id?=significa que el id es opcional
router.get('/projects',ProjectController.getProjects);
//put para actualizar
router.put('/project/:id',ProjectController.updateProject);
router.delete('/project/:id',ProjectController.deletePoject);
router.post('/upload-image/:id',ProjectController.uploadImage);

module.exports = router;    //cargar esta ruta en el app.js