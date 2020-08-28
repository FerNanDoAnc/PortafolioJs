import {Injectable} from '@angular/core';
import {Global} from './global';

@Injectable()
export class UploadService {
    public url: string;

    constructor(){
        this.url =Global.url;
    }
    //peticion ajax.juntaremos los archivos para subirlos //LUEGO sera llamdo en el create component
    makeFileRequest(url: string,params: Array<string>,  files: Array<File>, name:string){
        return new Promise(function(resolve, reject){
            var formData:any = new FormData();  //nos permite crear una especie de formulario en un objeto
            var xhr = new XMLHttpRequest();     //xhr es sinonimo de ajax //http... es un objeto de peticiones asincronas sn js
            //recorrer archivos q pueddene estar llegando
            for(var i = 0; i < files.length; i++){
                formData.append(name, files[i],files[i].name);  //..y adjuntarle a formdata ,recorrerlo, añadirlo y recoger el nombre
            }
            //PETICION AJAX
            xhr.onreadystatechange = function(){    
                if(xhr.readyState==4){  //si ajax esta==4 
                    if(xhr.status==200){    // si devuelve la peticion 200 
                        resolve(JSON.parse(xhr.response));  //se ejecuta el resolve de la promesa
                    }
                    else{
                        reject(xhr.response);
                    }
                }
            }
            //Peticion ajax por POST
            xhr.open('POST',url,true);  //true para qu haga la peticion
            xhr.send(formData);         //send par ENVIAR wl formdata
        });
    }
}