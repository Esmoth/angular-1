import { Component, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  templateUrl: './clientes.html'
})
export class Clientes {
  clientes: string[] = [];
  nuevoCliente: string = "";

  addCliente(){
    if(this.nuevoCliente && this.nuevoCliente.trim()){
      this.clientes.push(this.nuevoCliente.trim());
      this.nuevoCliente ="";  
    }
  }
  removeCliente(index: number){
    this.clientes.splice(index, 1);
  }
}
