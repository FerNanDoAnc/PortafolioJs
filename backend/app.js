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
app.get('/',(req, res)=>{       //req.recibe los datos q envia el cliente//res es la resuesta
    res.status(200).send(     //send para enviar los datos del res
        "<h1>hola mundo<h1>"
    );
});

app.get('/test',(req, res)=>{       //req.recibe los datos q envia el cliente//res es la resuesta
    res.status(200).send({      //send para enviar los datos del res
        message: "hola mundo desde mi api de node.js"
    });
});
//exportar
module.exports =app;