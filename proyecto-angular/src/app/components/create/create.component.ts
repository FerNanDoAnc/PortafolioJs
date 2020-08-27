import { Component, OnInit } from '@angular/core';
//imprtar modelo
import {Project} from '../../models/project';
//imprtar el servicio
import {ProjectService} from '../../services/project.service';
import{UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  //cargar el servicio
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  //crear propiedades 
  public title: string;
  public project: Project;
  //Para mostrar un mensaje de exito
  public status: string;

  public filesToUpload: Array<File>;
  //validar correos
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) { 
    //dar valor a las propiedades
    this.title ="Crear Proyecto";
    this.project=new Project('','','','',2020,'','');

    
  }
  ngOnInit(): void {
  }

  onSubmit(form){
    //my validaciones click 
    /*if(form.valid==true){
      form.resetForm();
    }else{
    console.log("Error en la validacon")
    }*/
    //guardar los datos de la imagen
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        if(response.project){
          //sbir la imagen 
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload, 'image')
          .then((result:any)=>{
            this.status ='success';
            console.log(result);
            form.reset();
          });
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }
}
