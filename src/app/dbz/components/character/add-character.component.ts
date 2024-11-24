import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
 
  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {

    if( this.character.name.length === 0 ) {
      return;
    }

    this.onNewCharacter.emit(this.character);

    /* this.character.name = '';
    this.character.power = 0; */

    //Forma mas eficiente al ser un objeto 
    this.character = {
      name: '',
      power: 0	
    }
  }

}
