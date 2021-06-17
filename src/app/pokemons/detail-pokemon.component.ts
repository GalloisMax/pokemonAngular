import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemon.service';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

    pokemon?: Pokemon;

    constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) { }

    ngOnInit(): void {

        let id = +this.route.snapshot.params['id'];

        this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
    }

    delete(pokemonId: number): void {
        this.pokemonsService.deletePokemon(pokemonId).subscribe(_ => this.goBack())
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
    goEdit(pokemon: Pokemon): void {
        this.router.navigate(['/pokemon/edit', pokemon.id]);
    }

}