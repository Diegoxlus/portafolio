import { Component, OnInit } from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  contenido : Map<String,String>;
  datosPersonales: Map<String, String>;

  constructor() {
    this.contenido = new Map<String, String>();
    this.datosPersonales = new Map<String,String>();
    this.contenido.set("titulo","Diego Lusquiños Otero");
    this.contenido.set("subtitulo","Desde pequeño me apasiona el mundo de la informática, por ello cuando finalicé el Bachillerato, decidí iniciar la carrera de Ingeniería Informática.\n" +
      "Actualmente, estoy en el último año de carrera a punto de adentrarme en el mercado laboral. Gracias a mi formación (en la ingeniería y por mi propia cuenta), habilidades y capacidad de trabajo, creo que estoy capacitado para trabajar. \n");
    this.contenido.set("puesto1", "Front-End Developer");
    this.contenido.set("puesto2", "Back-End Developer");
    this.contenido.set("puesto3", "Full-Stack Developer");
    //this.datosPersonales.set("Nombre","Diego");
    //this.datosPersonales.set("Apellidos", "Lusquiños Otero");
    this.datosPersonales.set("Fecha de nacimiento", "11/11/1996");
    this.datosPersonales.set("Email", "dlotero@esei.uvigo.es");



  }

  ngOnInit(): void {
  }

  originalOrder = (a, b) => {
    return a;
  }


}
