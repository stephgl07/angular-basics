import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola mundo angularesco</h1>

    <h2>{{ title }}</h2>

    <h3>Base: {{ base }}</h3>

    <button (click)="acumular()">-{{ base }}</button>

    <span> {{ cont }} </span>

    <button (click)="acumular()">+{{ base }}</button>
  `
})
export class ContadorComponent {
  title: string = 'App Contador';
  cont: number = 0;
  base: number = 5;

  sumar(){
    this.cont +=1;
  }

  restar(){
    this.cont -=1;
  }

  acumular(){
    this.cont += this.base;
  }
}
