'use strict';

var mongoose = require('mongoose'); //importar mongoose que se encarga de trabajar con los modulos
var Schema =mongodb.Schema;         //esuema de un modelo con el objeto Schema

var ProjectSchema= Schema({         //objto molde para crear nuevos proyectos
    name:String, //en mongose se define asi,para qe este lo cree en la bd
    description:String,
    category:String,
    year:Number,
    language:[String]
});

module.exports = mongoose.model('Proyect',ProjectSchema);
//Mongose guarda el modelo(Proyect) en minusculas y en plural : proyects
