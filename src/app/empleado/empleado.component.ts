import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  //Dentro de está clase quede el activete activado por mí

  identificador: string;

  constructor(private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    //Cuando arranque mi componente quiero recuperar las partes dinámicas de la URL. Tiene un atributo 'params'. Cómo no sabemos que tipo es <params> -- el tipo de esto es un Observable (es decir un Objeto).

    //Un observable es algo parecido a las promesas. Simplemenhte me permite estár pendiente de un valor, y cuando cambie ese valor me avisas de que cambias. Siempre funcionan igual,; ¿Cómo funcionan? Me he de susbribir  a los cambuios que se produzcan sobre ese observable 'subscribe();--> siempre recibe una función anónima (() => {}).

    //Son funciones asincrónas, es decir que vayan cada una a su bola, es decir, primero se ejecuta ngOnInit y por otro lado la función anónima. No sé puede retonar esa función.

    this.activateRouter.params.subscribe(params => {
      this.identificador = params.empleadoId;
      //¿Cómo hacemos extraemos de la funcion el empleadoId? ¿Cómo sacar la variable?
      //No hace falta sacar la variable. ¿Dónde defino las variables para usar en el HTML?

    });
  }

}
