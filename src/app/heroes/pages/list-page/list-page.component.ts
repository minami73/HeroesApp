import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styles: [
    ]
})

//Usualmente cualquier petición http cuando el componente se monta se hace en NgOnInit
export class ListPageComponent implements OnInit{
    public heroes: Hero[] = [];

    //Inyección del servicio
    constructor(private heroesService: HeroesService) {}
    ngOnInit(): void {
        this.heroesService.getHeroes()
            //Para que se dispare el método debemos subscribirnos
            .subscribe( heroes => this.heroes = heroes)
    }
}
