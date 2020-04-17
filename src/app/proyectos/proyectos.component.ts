import { Component, OnInit } from '@angular/core';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  modalRef: MDBModalRef;

  padelData = {

    "indice": " App Deporte",
    "titulo": "Aplicación para gestionar clubs de padel",
    "descripcion": "Este proyecto fue realizado en la asignatura de ABP( Aplicaciones basadas en proyectos ), la aplicación permite gestionar completamente un club de padel, pulse en detalles para consultar algunas funcionalidades al proyecto.",
    "funcionalidades":["Inscripción a campeonatos","Generación autamática de campeonatos","Gestión de escuelas deportivas","Reservas de pista","Gestión de enfrentamientos"],
    "tecnologias": ["PHP","Bootstrap","MySQL"],
    "colaboradores": ["Andrea Álvarez Mariño"],
    "linkedin": ["https://www.linkedin.com/in/andrea-%C3%A1lvarez-mari%C3%B1o/"]
  };

  carreraData = {

    "indice": " App deporte",
    "titulo": "Aplicación para gestionar carreras",
    "descripcion": "Aplicación para Android que permite añadir nuevas carreras, mediante la API de Google Maps se selecciona la ubicación y con el resto de datos se añade una carrera nueva. Una vez se realice el usuario puede añadir los resultados.",
    "funcionalidades":["Añadir nuevas carreras","Listar carreras","Añadir resultado carreras","Selecionar ubicación en el mapa"],
    "tecnologias": ["Java","SQLite"],
    "colaboradores": ["Andrea Álvarez Mariño"],
    "linkedin": ["https://www.linkedin.com/in/andrea-%C3%A1lvarez-mari%C3%B1o/"]
  };

  modaData = {
    "indice": " App moda",
    "titulo": "Aplicación para recomendar complementos de moda",
    "descripcion": "Aplicación en Java que permite recomendar articulos dependiendo del sexo, su estado civil, si tiene hijos... Esto es posible gracias a Drools, un motor de reglas de inferencia.",
    "funcionalidades":["Añadir ropa al carro","Recomendaciones individuales personalizadas","Generar factura"],
    "tecnologias": ["Java","Drools"],
    "colaboradores": ["Andrea Álvarez Mariño"],
    "linkedin": ["https://www.linkedin.com/in/andrea-%C3%A1lvarez-mari%C3%B1o/"]
  };

  driveData = {
    "indice": "  App Almacenamiento",
    "titulo": "Aplicación para el almacenamiento de carpetas y archivos en la nube",
    "descripcion": "Esta aplicación permite a todo usuario registrado y logueado crear carpetas, subir y descargar archivos. Tambien permite compartir archivos y carpetas mediante un link de invitación, este se pega en el navegador y se inicia la descarga.",
    "funcionalidades":["Crear carpetas","Subir archivos","Compartir carpetas","Compartir archivos","Generar link de compartir"],
    "tecnologias": ["Fronty.js","PHP","MySQL"],
    "colaboradores": ["Andrea Álvarez Mariño"],
    "linkedin": ["https://www.linkedin.com/in/andrea-%C3%A1lvarez-mari%C3%B1o/"]
  };


    constructor(private modalService: MDBModalService) {
  }
  modalOptions = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: 'modal-lg modal-dialog modal-dialog-scrollable',
    containerClass: '',
    animated: true,
    data: {
      heading: 'Modal heading',
      content: {heading: 'Content heading', description: 'Content description', datos:''}
    }
  };

  ngOnInit(): void {
  }

  openModal(arrayDatos){
    this.modalOptions.data.content.datos = arrayDatos;
    this.modalRef = this.modalService.show(ModalComponent,this.modalOptions);
  }

}
