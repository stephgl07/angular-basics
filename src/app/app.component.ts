import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
