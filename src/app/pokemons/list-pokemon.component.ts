import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemon.service';
import { AuthService } from '../auth.service';

import { Pokemon } from './pokemon';


@Component({
    selector: 'list-pokemon',
    templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
    p: number = 1;
    pokemons: any = [];
    colorBorderValue: string = "";
    constructor(private router: Router, private pokemonsService: PokemonsService, private authService: AuthService) {
    }

    getAuthServiceLogout() {
        return this.authService.logout();
    }

    ngOnInit() {
        this.pokemonsService.getPokemons().subscribe(pokemons => this.traitmentPokemons(pokemons) &&
            this.pokemonsService.traitmentPokemonsLocal(pokemons))

    }

    traitmentPokemons(pokemons: any) {
        var arrayPokemon: any[] = []
        for (let pokemon in pokemons) {
            var newPokemon: Pokemon = pokemons[pokemon]

            arrayPokemon.push({ ...newPokemon, firebaseId: pokemon })
        }


        return this.pokemons = arrayPokemon
    }

    selectPokemon(pokemon: Pokemon) {
        this.router.navigate(['/pokemon', pokemon.id]);
    }

    createPokemon(): void {
        this.router.navigate(['/pokemon/create']);
    }

    explorePokedex(): void {
        this.router.navigate(['/pokedex']);
    }

    onEditBorderColor(event: any) {
        this.colorBorderValue = event.target.value;
    }

}
