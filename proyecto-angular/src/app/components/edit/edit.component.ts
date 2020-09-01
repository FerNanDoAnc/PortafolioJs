import { Component, OnInit } from '@angular/core';
//imprtar modelo
import {Project} from '../../models/project';
//imprtar el servicio
import {ProjectService} from '../../services/project.service';
//Se carga els ervicio q se ha creado para subbir archivos,my image
import{UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';
//cargar componentes del router ...
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  //reutilizamos el create.component
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  //cargar el servicio
  providers: [
    ProjectService,
    UploadService     //cargar archivos ,my image 
  ]
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public save_project   //Para mostrar el detalle de c/u de los proyectos
  public status: string;    //Para mostrar un mensaje de exito
  public filesToUpload: Array<File>;  //ficheros para subir, my amegenes
  public url: string; //para cargar la imagen

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,    //viene del servicio creado para subir archivos, my imagenes
    private _route: ActivatedRoute,    //injectamos en el constructor
    private _router: Router //para cargar la imagen
    
  ) { 
    //dar valor a las propiedades
    this.title ="Editar Proyecto";
    this.url=Global.url;
  }


  ngOnInit(): void{
    //recogemos el parametro /con suscribe lo recogemos
    this._route.params.subscribe(params=>{
      let id = params.id;

      this.getProject(id);
    });
  }
  //Viene de project.service. Tambiense reutilizara en el edit
  getProject(id){
    //peticion AJAX al backend
    //invocamos al metodo del servicio
    this._projectService.getProject(id).subscribe(
      response=>{
        //ya odemos mostrar los detallles en el html
        this.project=response.project;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
}
