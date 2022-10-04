import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Hulk','IronMan','Thor','Black Widow']
  borrados: string[] = [];


  borrarHeroe(): void{
    const heroeBorrado = this.heroes.pop();

    if(heroeBorrado !== undefined){
      this.borrados.push(heroeBorrado);
    }
  }
}
