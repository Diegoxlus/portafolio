import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {
  arrayTecnologias: Map<string,any>;
  arrayLinks: Map<string,any>;
  constructor() {
    this.arrayTecnologias = new Map<string, string>();
    this.arrayLinks = new Map<string, string>();


  }

  ngOnInit(): void {
    this.arrayTecnologias.set("Angular","angular.png");
    this.arrayTecnologias.set("PHP","php.png");
    this.arrayTecnologias.set("MySQL","mysql.jpg");
    this.arrayTecnologias.set("Java","java.jpg");
    this.arrayTecnologias.set("Drools","drools.png");
    this.arrayTecnologias.set("NodeJs","nodejs.jpg");
    this.arrayTecnologias.set("Bootstrap","bootstrap.png");
    this.arrayTecnologias.set("Android","android.jpg");
    this.arrayTecnologias.set("MongoDB","mongodb.png");

    this.arrayLinks.set("Angular","https://angular.io/");
    this.arrayLinks.set("PHP","https://www.php.net/");
    this.arrayLinks.set("MySQL","https://www.mysql.com/");
    this.arrayLinks.set("Java","https://www.java.com/es/");
    this.arrayLinks.set("Drools","https://www.drools.org/");
    this.arrayLinks.set("NodeJs","https://nodejs.org/es/");
    this.arrayLinks.set("Bootstrap","https://getbootstrap.com/");
    this.arrayLinks.set("Android","https://developer.android.com/studio");
    this.arrayLinks.set("MongoDB","https://www.mongodb.com/es");



  }

}
