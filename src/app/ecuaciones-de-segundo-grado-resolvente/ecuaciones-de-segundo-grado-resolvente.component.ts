import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mvat-ecuaciones-de-segundo-grado-resolvente',
  templateUrl: './ecuaciones-de-segundo-grado-resolvente.component.html',
  styleUrls: ['./ecuaciones-de-segundo-grado-resolvente.component.css']
})
export class EcuacionesDeSegundoGradoResolventeComponent implements OnInit {
numeroDisRestando: number;
numeroDisSumando: number;
VerComo = true;


  constructor() {
  }


  ngOnInit() {
  }

  ver(): void { if (this.VerComo) {this.VerComo = false} else { this.VerComo = true} }
  focus( foco: HTMLInputElement ) { foco.style.backgroundColor = 'rgba(63, 255, 10, 0.27)'; }
  blurs(blu: HTMLInputElement ) { blu.style.backgroundColor = ''; }

  resolvente(A: number, B: number, C: number): void {
    this.numeroDisRestando = Math.trunc(this.DisRestando(A, B, C));
    this.numeroDisSumando = Math.trunc(this.DisSumando(A, B, C));
  }

  DisRestando(A: number, B: number, C: number): number {
    const xb = (-B - Math.pow((Math.pow(B, 2) - 4 * A * C ), (1 / 2))) / 2 * A;
    return xb;
  }

  DisSumando(A: number, B: number, C: number): number {
    const xa = (-B + Math.pow((Math.pow(B, 2) - 4 * A * C ), (1 / 2))) / 2 * A;
    return xa;
  }
}
