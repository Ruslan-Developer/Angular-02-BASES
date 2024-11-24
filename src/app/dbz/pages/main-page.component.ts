import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    //Componenete personalizado
    selector: 'app-dbz-main-page',
    standalone: false,
    templateUrl: './main-page.component.html'

})

export class MainPageComponent {

    public characters: Character[] = [{
        name: 'Goku',
        power: 9500
    },
    {
        name: 'Krillin',
        power: 7000
    },
    {
        name: 'Vegeta',
        power: 8000
    },
    {
        name: 'Gohan',
        power: 8500
    },
    {
        name: 'Piccolo',
        power: 9500
    }
    ];

    //Metodo que escucha el evento del componente hijo, mirar luego el HTML
    onNewCharacterMain(character: Character): void {

        this.characters.push(character);
    }

    /**
     ** 1º Paso: Crear un metodo que reciba el indice del personaje a eliminar del componente hijo
     ** mediante el evento.
     * Este metodo del componente Padre escucha al componente hijo que emite el evento
     * @param index  
     */


     onNewDeleteCharacterMain(index: number): void {
        this.characters.splice(index, 1);
    }

}


