import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroes } from '../interfaces/heores.interface';
import { GetHeroesService } from '../services/get-heroes.service';

@Component({
  selector: 'app-ver-heroe',
  templateUrl: './ver-heroe.component.html',
})
export class VerHeroeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private GetHeroesService: GetHeroesService) { }

  ngOnInit(): void {

    this.nombre = this.route.snapshot.params['nombre'];

    let heroe: Heroes[] = this.GetHeroesService.getHeroePorNombre(this.nombre);

    this.retornarHeroe = heroe;
    
  }

  nombre: string = "";

  public retornarHeroe : Heroes [] = [
    {
      nombre: '',
      casa: '',
      img: '',
      aparicion: ''
    }
  ];

}
