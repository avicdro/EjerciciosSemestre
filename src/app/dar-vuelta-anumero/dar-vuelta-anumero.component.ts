import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'mvat-dar-vuelta-anumero',
  templateUrl: './dar-vuelta-anumero.component.html',
  styleUrls: ['./dar-vuelta-anumero.component.css']
})
export class DarVueltaANumeroComponent implements OnInit {
  numeroVolteado: number;
  numDigitos: number;


  constructor() {
  }


  ngOnInit() {
  }

  cambio( value: any) { this.numDigitos = value;  }
  focus( foco: HTMLInputElement ) { foco.style.backgroundColor = 'rgba(63, 255, 10, 0.27)'; }
  blurs(blu: HTMLInputElement ) { blu.style.backgroundColor = ''; }

  voltearNumero(valor: any) {
    let ab: number = this.numDigitos;
    this.numeroVolteado = 0;
    for (let i = 0; i < this.numDigitos; i++) {
      ab -= 1;
      const aux: number = ((valor % Math.pow(10, ab)) / Math.pow(10, i)) * Math.pow(10, ab);
      this.numeroVolteado = aux + this.numeroVolteado;
    }
  }
}
