import { Component } from '@angular/core';

@Component({
  selector: 'app-list-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  public deleteHero?: string;

  removeLastHero(): void {
     this.deleteHero =  this.heroes.pop(); //Elimina el último elemento del array
  }

}
