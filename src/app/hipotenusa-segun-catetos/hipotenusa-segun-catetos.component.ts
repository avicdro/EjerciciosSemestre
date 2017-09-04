import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mvat-hipotenusa-segun-catetos',
  templateUrl: './hipotenusa-segun-catetos.component.html',
  styleUrls: ['./hipotenusa-segun-catetos.component.css']
})
export class HipotenusaSegunCatetosComponent implements OnInit {
  numeroHipotenusa: number;


  constructor() {
  }


  ngOnInit() {
  }

  focus( foco: HTMLInputElement ) { foco.style.backgroundColor = 'rgba(63, 255, 10, 0.27)'; }
  blurs(blu: HTMLInputElement ) { blu.style.backgroundColor = ''; }

  hipotenusa(cat1: number, cat2: number) {
    this.numeroHipotenusa = this.sacarHipotenusa(cat1, cat2);
  }

  sacarHipotenusa(cateto1: number, cateto2: number): number {
    const hipotenusa: number = Math.pow((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)), (1 / 2));
    return hipotenusa;
  }
}
