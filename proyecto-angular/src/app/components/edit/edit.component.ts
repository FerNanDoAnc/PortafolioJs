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
  templateUrl: './edit.component.html', //reutilizamos el create.component
  styleUrls: ['./edit.component.css'],
  providers: [  //cargar el servicio
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
    this.title ="Editar Proyecto";  //dar valor a las propiedades
    this.url=Global.url;//cargar imagen
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
  onSubmit(){
    this._projectService.updateProject(this.project).subscribe(
      response=>{
        //se copa del create.component
        if(response.project){
          //SUBIR la imagen //_Uploadservice proviene de upload.service.ts
          //se fube cando if tenga algo
          if(this.filesToUpload){
              this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload, 'image')
              .then((result:any)=>{
              //para hacer el link en el htl q redirige al detalle del proyecto
              this.save_project=result.project;
              this.status ='success';
              console.log(result);
            });
          }
          else{
            this.save_project=response.project;
              this.status ='success';
          }
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  //captuar el evento del boton->input del html
  fileChangeEvent(fileInput:any){
    //capturar eventeo y castear a un array de file y seleccionar el archivo q se recoge con el input
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }
}
