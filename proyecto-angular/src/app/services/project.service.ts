//importar MODULOS Para EL SERVICO
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';    //para hacer peticiones ajax:httpclient
import {Observable} from 'rxjs/Observable'; //incluida en angular-de lo contraio npm install --save rxjs-compat
import {Project} from '../models/project';
import {Global} from './global';   //importado desde el global.ts
import { observable } from 'rxjs';

@Injectable()
export class ProjectService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url =Global.url;
    }
    testService(){
        return 'Probando el servicio de angular';
    }
    saveProjects(project: Project):Observable<any>{  //Se devleve un observable
        //paraetros que se van a enviar por JSONSTRING
        let params = JSON.stringify(project);
        //cabeceras de como se va a enviar la informacion
        let headers =new HttpHeaders().set('Content-Type','application/json');
        //POST PARA CREA EN EL API
        return this._http.post(this.url+'save-project',params,{headers:headers});//la url viene del global .Luego se pasan los params como segundo parmetro,son los datos que se van a guaradar

    }
    //Este metodo sera usao en el project.component.ts
    getProjects():Observable<any>{
        //set enviar informacion ,por JSON
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        //peticion AJAX por get,comsumimos la url del API y pasamoslos headers
        return this._http.get(this.url+'projects',{headers:headers});
    }
    //Para sacar un unico proyecto
    //se usara en el detail.component.ts
    getProject(id): Observable<any>{
        //set enviar informacion ,por JSON
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        //hacemos una peticion por get yadeas se le concatena el id para porder extraerlo   
        return this._http.get(this.url+'project/'+id,{headers:headers});    
    }
    //para Borrar.Se usara en el detail.component paraa elminar un project
    deleteProject(id):Observable<any>{
         //set enviar informacion ,por JSON
         let headers = new HttpHeaders().set('Content-Type', 'application/json');
         //la id y la id para borrar
        return this._http.delete(this.url+'project/'+id,{headers:headers});

    }
} 