import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'mvat-dar-vuelta-anumero',
  templateUrl: './dar-vuelta-anumero.component.html',
  styleUrls: ['./dar-vuelta-anumero.component.css']
})
export class DarVueltaANumeroComponent implements OnInit {
  numeroVolteado: number;
// cantidad de digitos
  numDigitos: number;


  constructor() {
  }


  ngOnInit() {
  }

  cambio( value: any) { this.numDigitos = value;  }
  focus( foco: HTMLInputElement ) { foco.style.backgroundColor = 'rgba(63, 255, 10, 0.27)'; }
  blurs(blu: HTMLInputElement ) { blu.style.backgroundColor = ''; }

  voltear(val: number) {
    this.numeroVolteado = this.voltearNumero(val);
  }

  voltearNumero(numero: number): number {
    const cantidad: number = this.numDigitos;
    let nuevoNum = 0;
    for (let i = 0; i < cantidad; i++) {
      nuevoNum = nuevoNum * 10 + numero % 10;
      numero = Math.trunc(numero / 10);
    }
    return nuevoNum;
  }
}
