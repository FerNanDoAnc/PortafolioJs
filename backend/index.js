'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port=3700;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio',{ useNewUrlParser:true, useUnifiedTopology: true })
        .then(()=>{
            console.log("Se ha establecido la conexion con la bd");
            
            //Creando servidor
            
        })
        .catch(err=>console.log(err));