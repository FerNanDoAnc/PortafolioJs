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
} 