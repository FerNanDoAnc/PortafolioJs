'use strict';

var express = require('express');
var ProjectController = require('../controllers/project');   //importar el controlador

var router =express.Router(); //cargar servico para cceder a sus metodos

//middleware --Se ejecuta antes de la ejecucion del metodo del controlador-para subir imagenes
var multipart= require('connect-multiparty');
var multipartMiddleware=multipart({ uploadDir: './uploads'});   //ruta para guardar imagenes

router.get('/home',ProjectController.home);     //accedemos al home que viene del cotrolador
router.post('/test',ProjectController.test);    //ruta wuee carga el metodo del contrlador llamado teste
router.post('/save-project',ProjectController.saveProject);
router.get('/project/:id?',ProjectController.getProject);
//../:id?=significa que el id es opcional
router.get('/projects',ProjectController.getProjects);
//put para actualizar
router.put('/project/:id',ProjectController.updateProject);
router.delete('/project/:id',ProjectController.deletePoject);
router.post('/upload-image/:id',multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImagefile);

module.exports = router;    //cargar esta ruta en el app.js
