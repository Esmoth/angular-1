import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  contador = 0;
  contadorSignal = signal(0);
  /*/Computed sirve para crear una señal que se actualiza reactivamente dependiendo del valor de otra señal.
    Aquí esta señal "computed" toma la señal contadorSignal y la multiplica por 2, esto determina el valor de contadorDoble.
    En el metodo Contar() se suma 1 a la señal contadorSignal, al realizar esta actualización automáticamente se dispara el metodo
    computed de contador doble y recalcula automáticamente su valor.
    Lo mísmo ocurre en el metodo ResetearContador(), la señal contadorSignal se deja en 0 y eso dispara automáticamente el calculo
    de contadorDoble.
  */
  contadorDoble = computed(()=>this.contadorSignal()*2);

  Contar(){
    this.contador++;
    //Update para señales es cuando se actualiza el valor dependiendo del valor actual de la señal.
    this.contadorSignal.update( (i) => i+1  );
  }
  ResetearContador(){
    this.contador = 0;
    //Set para señales es cuando se cambia el valor de la señal por parámetro, sin depender del valor actual de la señal.
    this.contadorSignal.set(0);
  }
}
