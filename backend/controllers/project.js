'use strict';

var controller ={
    home: function(req,res){
        return res.status(200).send({
            message: 'Soy el home'
        });
    },
    test: function(req, res){
            return res.status(200).send({
                message: 'Soy el metodo o accion test del projecto'
            });
    }
};

module.exports =controller;