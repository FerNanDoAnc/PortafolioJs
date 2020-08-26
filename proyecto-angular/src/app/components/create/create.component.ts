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
  public project: Project;

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
    
    if(name==null || length==0){
      document.querySelector("#errorNombre").innerHTML="El nombre es obligatorio.";
    }
  }
}
