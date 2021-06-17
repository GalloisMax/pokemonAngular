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
        console.log('this.types', this.types);
    }

    // La méthode appelée lorsque le formulaire est soumis.
    onSubmit(form: NgForm) {
        console.log('pokemon====>', this.pokemon);
        const id = Math.random();

        const created = new Date();

        const picture = this.onValidUrlPicture(form.value['picture']);
        const types = [form.value['types']];
        const newPokemon = { ...this.pokemon, picture, types, created, id }


        this.pokemonsService.createPokemon(newPokemon).subscribe(() => this.goBack())
    }

    onValidUrlPicture(numberForm: string): string {
        var validNumber!: string;

        if (numberForm.length == 1) {
            validNumber = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${numberForm}.png`
        } else if (numberForm.length == 2) {
            validNumber = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${numberForm}.png`
        } else {
            validNumber = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberForm}.png`
        }
        return validNumber
    }



    goBack() {
        this.router.navigate(['/pokemons']);
    }

}