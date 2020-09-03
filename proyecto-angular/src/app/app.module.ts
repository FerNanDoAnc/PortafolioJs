import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';    //para hacer peticiones ajax:httpclient
import {FormsModule} from '@angular/forms';
//importado desde el app routing
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

import * as $ from 'jquery';  //importamos todo de la libreria de jquery

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    //se carga el touting xq es un modulo
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //se carga aqui Porque es un servicio
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
