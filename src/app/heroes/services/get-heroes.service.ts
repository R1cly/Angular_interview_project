import { Injectable } from '@angular/core';
import { Heroes } from '../interfaces/heores.interface';

@Injectable()

export class GetHeroesService {

  //String del filtro
  public filtroHeroe: string = ''


  // Array para mostrar los heroes.
  private _arrayResultados: Heroes [] = [];

  // Mock de personajes
  private _heroes: Heroes[]=[
    {
      nombre: "Aquaman",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",          
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",          
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",          
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Linterna Verde",          
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

  // Metodo para retornar todos los heroes en el mock.
  get todosLosHeroes(): Heroes[]{

    this._arrayResultados = [];
    
    this._arrayResultados = this._heroes;

    return this._arrayResultados;
    
  }

  // Metodo para retornar los heroes por nombre.
  getHeroePorNombre( nombreHeroe: string ): Heroes[]{

    this._arrayResultados = [];

    for(let i = 0; i < this._heroes.length; i++){

      if(nombreHeroe === this._heroes[i].nombre){

        this._arrayResultados.push(this._heroes[i]);
        break;
      }
    }
    return this._arrayResultados;
  }

  
  // Metodo para retornar los heroes por casa o nombre
  getHeroePorFiltro( data : string ): Heroes[]{

    this._arrayResultados = [];
    
    for(let i = 0; i < this._heroes.length; i++){

      if(data === this._heroes[i].casa.toLowerCase() || data === this._heroes[i].nombre.toLowerCase()){
    
        this._arrayResultados.push(this._heroes[i]);
      }
    }
    return this._arrayResultados;
  }

}
