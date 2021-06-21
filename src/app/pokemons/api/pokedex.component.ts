import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemon.service';
import { ApiService } from './api.service';

@Component({
    selector: 'pokedex',
    templateUrl: './pokedex.component.html'
})
export class PokedexComponent implements OnInit {
    page: number = 1;
    pokemons: any[] = [];
    totalPokemons?: number;

    constructor(private authService: AuthService, private router: Router, private apiService: ApiService, private pokemonsService: PokemonsService) {

    }

    ngOnInit() {
        this.getPokemons();

    }

    getPokemons() {
        this.apiService.getApiPokemons(10, this.page + 0).subscribe((response: any) => {
            this.totalPokemons = response.count;
            response.results.forEach((result: any) => {
                this.apiService.getMoreData(result.name).subscribe((uniqResponse: any) => {
                    this.pokemons.push(uniqResponse);
                })
            });

        });
    }

    captured(name: string, typeEn: string, health: number, attack: number, picture: string) {
        var type: string;

        if (typeEn === "grass") {
            type = "Plante"
        } else if (typeEn === "fire") {
            type = "Feu"
        } else if (typeEn === "water") {
            type = "Eau"
        } else if (typeEn === "bug") {
            type = "Insecte"
        } else if (typeEn === "normal") {
            type = "Normal"
        } else if (typeEn === "poison") {
            type = "Poison"
        } else if (typeEn === "electric") {
            type = "Electrique"
        } else if (typeEn === "psychic") {
            type = "Psy"
        } else if (typeEn === "fly") {
            type = "Vol"
        } else { type = "Feu" }

        const newPokemon: Pokemon = {
            id: Math.random(),
            hp: health,
            cp: attack,
            name: name,
            picture: picture,
            types: [type],
            created: new Date()
        }
        this.pokemonsService.createPokemon(newPokemon).subscribe(() => this.goBack())

    }

    // pokemonAlreadyCaptured(name: string): boolean {
    //     const pokemonCaptured: Pokemon = this.pokemonsCaptured.find(x => x.name === name);
    //     if (pokemonCaptured) {
    //         return true
    //     } else return false
    // }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }

    getAuthServiceLogout() {
        return this.authService.logout();
    }
    // selectPokemon(pokemon: Pokemon) {
    //     this.router.navigate(['/pokemon', pokemon.id]);
    // }
}
