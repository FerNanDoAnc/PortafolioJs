'use strict';

var Project=require('../models/project');   //Importar  prject desde models
//libreria para borrar un archivo o img
var fs = require('fs');

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
    },
    
    saveProject: function(req, res){
        var project =new Project();
        //aceder a las propiedades del modelo 
        var params = req.body;
        project.name=params.name;
        project.description=params.description;
        project.category=params.category;
        project.year=params.year;
        project.langs=params.langs;
        project.image=null;
        //guardar datos en  la base de datos
        project.save((err,projectStored)=>{
            if(err)return res.status(500).send({message:"Error al guardar documento"});
            if(!projectStored)return res.status(404).send({message:"No se ha podido guardar el proyecto"});
            return res.status(200).send({project: projectStored});
        });
    },
    //Nos va adevolver el objeto q le solicitemos por la URL
    getProject: function(req, res){
        var projectid=req.params.id;
        //para que el ID sea opcional
        if(projectid==null) return res.status(404).send({message:"El proyecto no existe"});
    
        //buscar un objeto de la bd con findById(recibe 2 parametros , el prooyect id ,y luego el callback)
        Project.findById(projectid,(err, project)=>{
            if(err)return res.status(500).send({message:"Error al listar los datos"});
            if(!project)return res.status(404).send({message:"El proyecto no existe"});
            return res.status(200).send({
                project
            });
        });
    },
    //Metodo para listar los pryectos q estan en la base de datos
    getProjects: function(req, res){
        //Find saca los documentos de la entidad o coleccion y tambien para psar condiciones
        Project.find({}).sort('-year').exec((err, projects)=>{
            if (err) return res.status(500).send({message:"Error al devolver los datos"});
            if (!projects) return res.status(404).send({message:"No hay proyectos para mostrrar"});
            return res.status(200).send({projects});
        });
    },
    //Actualizar proyecto 
    updateProject: function(req, res){
        //capturar valores
        var projectid = req.params.id;
        //recoger los datos actualizados
        var update = req.body;

        Project.findByIdAndUpdate(projectid, update, {new:true},(err, projectUpdate) =>{
            if (err) return res.status(500).send({message:"Error al actualizar los datos"});
            if (!projectUpdate) return res.status(404).send({message:"No hay proyectos para actualizar"});
            return res.status(200).send({project: projectUpdate});
        })
    },
    //Borrar 
    deletePoject: function(req, res){
        var projectid = req.params.id;

        Project.findByIdAndRemove(projectid,(err, projectRemoved)=>{
            if (err) return res.status(500).send({message:"Error al borrar el documento"});
            if (!projectRemoved) return res.status(404).send({message:"No se puede eliminar este proyecto"});
            return res.status(200).send({
                project: projectRemoved
            });
        })
    },
    //Subir imagen
    uploadImage: function(req, res){
        var projectId = req.params.id;
        var fileName="Error!! Imagen no subida...";

        if(req.files){  //recoger imagen
            var filePath=req.files.image.path;
            var fileSplit =filePath.split('\\');
            var fileName=fileSplit[1];
            //sacar la exxtension del archivos
            var extSplit =fileName.split('\.');
            var fileExt=extSplit[1];

            //validacion al subir imagenes
            if(fileExt=='png'||fileExt=='jpg'||fileExt=='jpeg'||fileExt=='gif'){
                    //psar la propiedad image para guardarla
                Project.findByIdAndUpdate(projectId,{image:fileName},{new:true},(err,projectUpdate)=>{
                    if(err) return res.status(500).send({message:"Error al subir imagen"});
                    if(!projectUpdate) return res.status(404).send({message:"La imagen no existe"});

                    return res.status(200).send({
                        project:projectUpdate  
                    });
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extension de la imagenn  no es valida'});

                });
            }
        }else{
            return res.status(200).send({
                message: fileName
            });
        }
    }
}; 

module.exports =controller;