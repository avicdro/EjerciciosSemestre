import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mvat-velocidad-segun-distancia-tiempo',
  templateUrl: './velocidad-segun-distancia-tiempo.component.html',
  styleUrls: ['./velocidad-segun-distancia-tiempo.component.css']
})
export class VelocidadSegunDistanciaTiempoComponent implements OnInit {
numeroVelocidad: number;


  constructor() {
  }


  ngOnInit() {
  }

  focus( foco: HTMLInputElement ) { foco.style.backgroundColor = 'rgba(63, 255, 10, 0.27)'; }
  blurs(blu: HTMLInputElement ) { blu.style.backgroundColor = ''; }

  velocidad(dis: number, tiem: number) {
    this.numeroVelocidad = this.sacarVelocidad(dis, tiem);
  }

  sacarVelocidad(distancia: number, tiempo: number): number {
    const velocidad: number = distancia / tiempo;
    return velocidad;
  }
}
