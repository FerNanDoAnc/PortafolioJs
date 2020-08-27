import { Component, OnInit } from '@angular/core';
//imprtar modelo
import {Project} from '../../models/project';
//imprtar el servicio
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  //cargar el servicio
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
  //crear propiedades 
  public title: string;

  public name: string;
  public description: string;
  public category: string;
  public langs: string;

  public project: Project;
  //validar correos
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  constructor(
    private _projectService: ProjectService
  ) { 
    //dar valor a las propiedades
    this.title ="Crear Proyecto";
    this.project=new Project('','','','',2020,'','');

    
  }
  ngIf(){

  }
  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.project);

    //my validaciones click 
    if(form.valid==true){
      form.resetForm();
    }else{
    console.log("Error en la validacon")
    }
  }
}
