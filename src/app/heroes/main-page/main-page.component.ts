import { Component, Input} from '@angular/core';
import { GetHeroesService } from '../services/get-heroes.service';
import { Heroes } from '../interfaces/heores.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'], 
})

export class MainPageComponent{

  filtro : string = '';

  constructor( private GetHeroesService: GetHeroesService ) {}

  personajesPorFiltro(): Heroes[]{

    const filtroFinal = this.filtro
       
    console.log(this.filtro);

    if( filtroFinal === '' || null) { 
      return this.GetHeroesService.todosLosHeroes;
    }

    return this.GetHeroesService.getHeroePorFiltro(filtroFinal)
  
   }
}
