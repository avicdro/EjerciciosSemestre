import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mvat-segundos-transcurridos',
  templateUrl: './segundos-transcurridos.component.html',
  styleUrls: ['./segundos-transcurridos.component.css']
})
export class SegundosTranscurridosComponent implements OnInit {
  numeroSegundos: number;

  constructor() {
  }


  ngOnInit() {
  }

  focus( foco: HTMLInputElement ) { foco.style.backgroundColor = 'rgba(63, 255, 10, 0.27)'; }
  blurs(blu: HTMLInputElement ) { blu.style.backgroundColor = ''; }

  segundos(val: string) {
    const hora: string[] = val.split(':', 1) ;
    const minutos: string[] = val.split(':', 2);
    const h: number = parseInt(hora[0], 0);
    const m: number = parseInt(minutos[1], 0);
    return this.numeroSegundos = this.sacarSegundos(h, m);
  }

  sacarSegundos(hora: number, minutos: number): number {
    const seg = ((hora * 60) + minutos) * 60;
    return seg;
  }
}
