import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { InicioComponent } from './inicio/inicio.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import {CdkTableModule} from '@angular/cdk/table';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    ProyectosComponent,
    EstudiosComponent,
    InicioComponent,
    TecnologiasComponent,
    ModalComponent
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTableModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [{provide: LocationStrategy,useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
