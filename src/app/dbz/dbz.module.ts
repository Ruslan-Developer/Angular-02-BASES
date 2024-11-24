import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    CharacterComponent,
    

  ],
  //Es para importar modulos
  imports: [
    CommonModule,
    FormsModule,

  ],

  //Nota: Exportar el componente para poder usarlo en otros modulos
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
