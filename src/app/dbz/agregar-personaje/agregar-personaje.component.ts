import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
})
export class AgregarPersonajeComponent {

  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    if(this.nuevoPersonaje.nombre.trim().length === 0){
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    console.log(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }
}
