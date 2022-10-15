import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  constructor() {
    console.log('Servicio Inicializado');
  }
  
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 5000,
    },
    {
      nombre: 'Vegeta',
      poder: 4000,
    },
  ];

  get personajes(): Personaje[]{
    return [...this._personajes];
  }

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }
}
