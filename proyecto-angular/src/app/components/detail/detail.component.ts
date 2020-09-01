import { Component, OnInit } from '@angular/core';
//Importamos el modelo
import {Project} from '../../models/project';
//importar el servicio
import {ProjectService} from '../../services/project.service';
//cargar archivo global para sacar la URL
import {Global} from '../../services/global';
//cargar componentes del router ...
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  //Caragr el servicio
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  //PROPIEDADES
  public url: string;
  public project: Project //sera pra el response del getProject

  constructor(
    //cargar el servicio
    private _projectService: ProjectService,
    //injectamos en el constructor
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    //url para utilizarlo en la vista
    this.url=Global.url;
  }

  ngOnInit(): void{
    //recogemos el parametro /con suscribe lo recogemos
    this._route.params.subscribe(params=>{
      let id = params.id;

      this.getProject(id);
    });
  }
  //Viene de project.service
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
  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      response=>{
        if(response.project){
          //redirccionar a:
          this._router.navigate(['/proyectos']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
