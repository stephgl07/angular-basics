import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
    nombre: string = 'IronMan';
    edad: number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(newValue: string): void{
        this.nombre = newValue;
    }

    cambiarEdad(newAge: number): void{
        this.edad = newAge;
    }
}