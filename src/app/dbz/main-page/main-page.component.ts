import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {}
  
  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }
  
  defaultPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje(personaje: Personaje){
    this.personajes.push(personaje);
    console.log("asdasd");
  }


}
