import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Hay que definir los parámetros del constructor. El primero hayq ue pasarle un objeto. Angular se ocupa arriba en este mismo documento de importarlo.
  // constructor(router: Router){
  // Si lo utilizamos dentro del CONSTRUCTOR - constructor(router: Router){}, solo se puede acceder desde el método del constructor.

  //Si delante pones private - te permite utilizar desde cualquier punto de este documento. El objeto desde cualquier elemento -constructor(router: Router){}.
  constructor(private router: Router) {

  }

  onClick(ruta) {

    //Recuperación y envios de los datos previos a la navegación.
    this.router.navigate([ruta]);

  }
}
