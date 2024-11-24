import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }

  ]
  /**
   ** 2º Paso: Craer EventEmmiter para emitir el indice del personaje a eliminar
   */

  @Output()
  public onNewDeleteEmitter: EventEmitter<number> = new EventEmitter();

  /**
   ** 3º Paso: Crear metodo que emita el indice del personaje a eliminar
   * @param index 
   */
   onDeleteCharacterChild(index: number): void {
   
     this.onNewDeleteEmitter.emit(index); 

  }


}
