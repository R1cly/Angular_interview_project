import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { GetHeroesService } from './services/get-heroes.service';
import { VerHeroeComponent } from './ver-heroe/ver-heroe.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainPageComponent,
    VerHeroeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports:[
    MainPageComponent,

  ],
  providers:[
    GetHeroesService
  ]
})
export class HeroesModule {}
