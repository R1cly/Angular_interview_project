import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { MainPageComponent } from './heroes/main-page/main-page.component';
import { VerHeroeComponent } from './heroes/ver-heroe/ver-heroe.component';

const appRoutes:Routes=[

  {path:'', component:MainPageComponent},
  {path:'ver-heroe/:nombre', component:VerHeroeComponent},

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
