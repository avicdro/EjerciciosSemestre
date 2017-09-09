import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mvat-intervalo',
  templateUrl: './intervalo.component.html',
  styleUrls: ['./intervalo.component.css']
})
export class IntervaloComponent implements OnInit {
numeroIntervalo: boolean;


  constructor() {
  }


  ngOnInit() {
  }

  focus( foco: HTMLInputElement ) { foco.style.backgroundColor = 'rgba(63, 255, 10, 0.27)'; }
  blurs(blu: HTMLInputElement ) { blu.style.backgroundColor = ''; }

  dentro(v1: number, v2: number, x: number) {
    this.numeroIntervalo = this.verSiEsta(v1, v2, x);
  }

  verSiEsta(valor1: number, valor2: number, x: number): boolean {
    let mayor: number;
    let menor: number;
    let esta: boolean
    if (valor1 > valor2) {
      mayor = valor1;
      menor = valor2
    } else {
      mayor = valor2;
      menor = valor1;
    }
    if ( x <= mayor  && x >= menor) {
      return esta = true;
    } else {
      return esta = false;
    }
  }
}
