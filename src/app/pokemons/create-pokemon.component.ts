import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokemonsService } from './pokemon.service';

@Component({
    selector: 'create-pokemon',
    template: `
    <h2 class="header center">Ajouter </h2>
        <p class="center">
        </p>
    <pokemon-create-form ></pokemon-create-form>
  `,
})
export class CreatePokemonComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private pokemonsService: PokemonsService) { }

    ngOnInit(): void {

    }

}