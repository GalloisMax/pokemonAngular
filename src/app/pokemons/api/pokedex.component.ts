import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ApiService } from './api.service';

@Component({
    selector: 'pokedex',
    templateUrl: './pokedex.component.html'
})
export class PokedexComponent implements OnInit {
    p: number = 1;
    pokemons: any[] = [];

    constructor(private authService: AuthService, private router: Router, private apiService: ApiService) {

    }

    ngOnInit() {

        this.apiService.getApiPokemons().subscribe((response: any) => {
            this.pokemons = response;
            console.log('pokemons====>', this.pokemons);
        });

    }

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
