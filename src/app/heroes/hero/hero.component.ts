import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

//Clase que tiene un decorador de angular
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  //Propiedad que devuelve el nombre en mayusculas
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  //Metodo que devuelve la descripcion del heroe
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';

  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }

}
