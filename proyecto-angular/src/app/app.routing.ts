//importar modulos par el routing
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//importar componentes
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

//definir rutas
const appRoutes: Routes=[
    {path:'',component:AboutComponent},
    {path:'sobre-mi',component:AboutComponent},
    {path:'proyectos',component:ProjectsComponent},
    {path:'crear-proyecto',component:CreateComponent},
    {path:'contacto',component:ContactComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
