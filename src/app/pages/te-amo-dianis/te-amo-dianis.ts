import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-te-amo-dianis',
  imports: [FormsModule],
  templateUrl: './te-amo-dianis.html',
  styleUrl: './te-amo-dianis.css',
})
export class TeAmoDianis {
  preguntas = signal([
    { 
      pregunta: '¿Año en que nos conocimmos?',
      alternativas: ["2012", "2013", "2014", "2015"],
      respuestaPosicion: 1,
      respuestaSeleccionada: null as number | null
    },
    { 
      pregunta: '¿Nuestro deporte favorito?',
      alternativas: ["Futbol", "Tenis", "Hockey", "Lucha Libre"],
      respuestaPosicion: 2,
      respuestaSeleccionada: null as number | null
    },
    { 
      pregunta: '¿Cuántos gatos tenemos?',
      alternativas: ["1", "4", "5", "2"],
      respuestaPosicion: 3,
      respuestaSeleccionada: null as number | null
    },
  ]);
  mensajeFinal = signal("");
  mostrarResultado = false;
  ProcesarRespuestas(){
    let respuestasCorrectas = 0;
    this.preguntas().forEach((p)=>{
      if(p.respuestaPosicion==p.respuestaSeleccionada){
        respuestasCorrectas++;
      }
    })
    const porcentajeCorrectas = Math.round((respuestasCorrectas/this.preguntas().length)*100);
    if(porcentajeCorrectas>50){
      this.mensajeFinal.set(`Felicidades, tu porcentaje del amor es de ${porcentajeCorrectas}% 💕. Acertaste en ${respuestasCorrectas} preguntas. `)
    }
    else{
            this.mensajeFinal.set(`Qué lastima, tu porcentaje del amor es de ${porcentajeCorrectas} 😢. Solo acertaste en ${respuestasCorrectas} preguntas. `)

    }
  }
}