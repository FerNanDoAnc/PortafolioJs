'use strict';

var express=require('express');
var bodyParser=require('body-parser');

var app = express();

//Cargar archivos de rutas

//middlewares se ejecuta antes de la accion de un controlador,- funcionalidad peincipal
app.use(bodyParser.urlencoded({ extended: false })); //confg. nesesaria para body parser
app.use(bodyParser.json());//convertitr a json lo q llegue al body

//CORS


//Rutas

//exportar
module.exports =app;