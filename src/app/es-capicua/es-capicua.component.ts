import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mvat-es-capicua',
  templateUrl: './es-capicua.component.html',
  styleUrls: ['./es-capicua.component.css']
})
export class EsCapicuaComponent implements OnInit {
  numeroVolteado: number;
// cantidad de digitos
  numDigitos: number;
  esCapicua: boolean;

  constructor() {
  }


  ngOnInit() {
  }

  cambio( value: any) { this.numDigitos = value;  }
  focus( foco: HTMLInputElement ) { foco.style.backgroundColor = 'rgba(63, 255, 10, 0.27)'; }
  blurs(blu: HTMLInputElement ) { blu.style.backgroundColor = ''; }

  capicua(num: number) {
    this.voltear(num);
    console.log(this.numeroVolteado, num);
    if (this.numeroVolteado.toString() ===  num.toString()) {
      this.esCapicua = true;
    } else {
      this.esCapicua = false;
    }
  }

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
