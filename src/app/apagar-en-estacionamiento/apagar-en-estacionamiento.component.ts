import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mvat-apagar-en-estacionamiento',
  templateUrl: './apagar-en-estacionamiento.component.html',
  styleUrls: ['./apagar-en-estacionamiento.component.css']
})
export class APagarEnEstacionamientoComponent implements OnInit {
numeroAPagar: number;
VerComo = true;

  constructor() {
  }


  ngOnInit() {
  }

  ver(): void { if (this.VerComo) {this.VerComo = false} else { this.VerComo = true} }
  focus( foco: HTMLInputElement ) { foco.style.backgroundColor = 'rgba(63, 255, 10, 0.27)'; }
  blurs(blu: HTMLInputElement ) { blu.style.backgroundColor = ''; }

  Pagar(val: string, val2) {
    const hora: string[] = val.split(':', 1) ;
    const minutos: string[] = val.split(':', 2);
    const h: number = parseInt(hora[0], 0);
    const m: number = parseInt(minutos[1], 0);
    const hora2: string[] = val2.split(':', 1) ;
    const minutos2: string[] = val2.split(':', 2);
    const h2: number = parseInt(hora2[0], 0);
    const m2: number = parseInt(minutos2[1], 0);
    return this.numeroAPagar = this.APagar(h, m, h2, m2);
    }

  APagar(hora1: number, minutos1: number, hora2: number, minutos2: number): number {
    const primeraHora = 100;
    let total = 0
    for (let i = (hora1 + 1); i < hora2; i++) {
       total += 80;
     }
    if (minutos2 > 0 ) {
      total += 80;
    }
    console.log(total, hora1, hora2)
    return total + primeraHora;
  }
}
