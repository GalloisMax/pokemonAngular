import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemon.service';

@Component({
    selector: 'edit-pokemon',
    template: `
    <h2 class="header center">Editer {{ pokemon?.name }}</h2>
        <p class="center">
            <img *ngIf="pokemon" [src]="pokemon.picture"/>
        </p>
    <pokemon-form [pokemon]="pokemon"></pokemon-form>
  `,
})
export class EditPokemonComponent implements OnInit {

    pokemon!: Pokemon;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pokemonsService: PokemonsService) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        const pokemon: any = this.pokemonsService.pokemons.find(x => x.id === id);
        this.pokemon = pokemon
    }

}