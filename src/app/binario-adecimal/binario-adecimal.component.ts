import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mvat-binario-adecimal',
  templateUrl: './binario-adecimal.component.html',
  styleUrls: ['./binario-adecimal.component.css']
})
export class BinarioADecimalComponent implements OnInit {
  numeroDecimal: number;
// cantidad de digitos
  numDigitos: number;


  constructor() {
  }


  ngOnInit() {
  }

  cambio( value: any) { this.numDigitos = value;  }
  focus( foco: HTMLInputElement ) { foco.style.backgroundColor = 'rgba(63, 255, 10, 0.27)'; }
  blurs(blu: HTMLInputElement ) { blu.style.backgroundColor = ''; }

  aDecimal(val: number) {
    this.numeroDecimal = this.Adecimal(val);
  }

  Adecimal(numero: number): number {
    const cantidad: number = this.numDigitos;
    let nuevoNum = 0;
    let induno = 0;
    let inddos = 1;
    while ( induno <= (this.numDigitos - 1) && inddos <= this.numDigitos) {
      const aux = Math.trunc((numero % Math.pow(10, inddos)) / Math.pow(10, induno)) * Math.pow(2, induno);
      nuevoNum = aux + nuevoNum;
      induno++;
      inddos++;
    }
    return nuevoNum;
  }
}
