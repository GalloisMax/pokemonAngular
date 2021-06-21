import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemon.service';
import { NgForm } from '@angular/forms';
import { Pokemon } from './pokemon';

@Component({
    selector: 'pokemon-create-form',
    templateUrl: './pokemon-create-form.component.html',
    styleUrls: ['./pokemon-form.css']
})
export class PokemonCreateFormComponent implements OnInit {

    // @Input() pokemon!: Pokemon; // propriété d'entrée du composant
    types!: Array<string>; // types disponibles pour un pokémon : 'Eau', 'Feu', etc ...
    pokemon: Pokemon = new Pokemon();
    constructor(
        private pokemonsService: PokemonsService,
        private router: Router) { }

    ngOnInit() {
        // Initialisation de la propriété types
        this.types = this.pokemonsService.getPokemonTypes();
    }

    // La méthode appelée lorsque le formulaire est soumis.
    onSubmit(form: NgForm) {
        const id = Math.random();

        const created = new Date();

        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${form.value['picture']}.png`
        const types = [form.value['types']];
        const newPokemon = { ...this.pokemon, picture, types, created, id }


        this.pokemonsService.createPokemon(newPokemon).subscribe(() => this.goBack())
    }

    goBack() {
        this.router.navigate(['/pokemons']);
    }

}