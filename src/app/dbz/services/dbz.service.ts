import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  constructor() {
    console.log('Servicio Inicializado');
  }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 5000,
    },
    {
      nombre: 'Vegeta',
      poder: 4000,
    },
  ];
}
