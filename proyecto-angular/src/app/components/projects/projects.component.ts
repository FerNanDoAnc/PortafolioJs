import { Component, OnInit } from '@angular/core';
//Importamos el modelo
import {Project} from '../../models/project';
//importar el servicio
import {ProjectService} from '../../services/project.service';
//cargar archivo global para sacar la URL
import {Global} from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  //pasamos el servicio
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  //array para mostarl en la vista
  public projects: Project[];x
  //para la img
  public url: string;

  constructor(
    //cargamos el servicio ara luego injectarlo 
    private _projectService: ProjectService
  ) { 
    //para la img
    this.url =Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }
  //metodo que usamos desde el project.service
  getProjects(){
    //suscribe- para recoger las respuestas del API
    this._projectService.getProjects().subscribe(
      response=>{
        //si llega response.project
        
        if(response.projects){
          //se le da el valor de :
          this.projects = response.projects;
          console.log(response);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
