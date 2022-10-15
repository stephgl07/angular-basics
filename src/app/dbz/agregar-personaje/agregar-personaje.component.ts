import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
})
export class AgregarPersonajeComponent {

  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService){}

  agregar(): void {
    if(this.nuevoPersonaje.nombre.trim().length === 0){
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevoPersonaje);
    console.log(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }
}
