//importar MODULOS Para EL SERVICO
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';    //para hacer peticiones ajax:httpclient
import {Observable} from 'rxjs/Observable'; //incluida en angular-de lo contraio npm install --save rxjs-compat
import {Project} from '../models/project';
import {Global} from './global';   //importado desde el global.ts

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
} 