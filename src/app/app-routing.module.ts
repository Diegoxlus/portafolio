import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProyectosComponent} from './proyectos/proyectos.component';
import {EstudiosComponent} from './estudios/estudios.component';
import {InicioComponent} from './inicio/inicio.component';
import {TecnologiasComponent} from './tecnologias/tecnologias.component';


const routes: Routes = [
  {path: 'inicio' ,component: InicioComponent},
  {path: 'proyectos' ,component: ProyectosComponent},
  {path: 'estudios' ,component: EstudiosComponent},
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  {path: 'tecnologias' ,component: TecnologiasComponent},
  {path: 'estudios',component:EstudiosComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
