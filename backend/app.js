'use strict';

var express=require('express');
var bodyParser=require('body-parser');

var app = express();

//Cargar archivos de rutas
var project_routes = require('./routes/project'); //cargado desde el routes/project.js

//middlewares se ejecuta antes de la accion de un controlador,- funcionalidad peincipal
app.use(bodyParser.urlencoded({ extended: false })); //confg. nesesaria para body parser
app.use(bodyParser.json());//convertitr a json lo q llegue al body

//CORS


//Rutas 
app.use('/api',project_routes);  //api es una direccion q se sobreecribra dentro de la ruta

/*app.get('/',(req, res)=>{       //req.recibe los datos q envia el cliente//res es la resuesta
    res.status(200).send(     //send para enviar los datos del res
        "<h1>hola mundo<h1>"
    );
});

app.post('/test/:id',(req, res)=>{       //req.recibe los datos q envia el cliente//res es la resuesta
    console.log(req.body.nombre);   //Se recogen los datos que se envias por el body
    console.log(req.query.web);     //Acceder al parametro Query 
    console.log(req.params.id);     //En caso de añadirle un parametro a la url,en este caso el id

    res.status(200).send({      //send para enviar los datos del res
        message: "hola mundo desde mi api de node.js"
    });
});
*/
//exportar
module.exports =app;