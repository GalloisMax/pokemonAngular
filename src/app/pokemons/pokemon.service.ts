import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class PokemonsService {

    private pokemonsUrl = 'api/pokemons';

    pokemons: Pokemon[] = [];

    constructor(private http: HttpClient) {

    }


    private log(log: string) { console.info(log); }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of(result as T)
        }
    }



    updatePokemon(pokemon: Pokemon): Observable<any> {

        return this.http.put(`https://pokemonangular-default-rtdb.europe-west1.firebasedatabase.app/pokemons/${pokemon.firebaseId}.json`, pokemon)
    }

    // createPokemon(pokemon: Pokemon): Observable<any> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //     };
    //     return this.http.post(this.pokemonsUrl, pokemon, httpOptions).pipe(
    //         tap(_ => this.log(`create pokemon id=${pokemon.id}`)),
    //         catchError(this.handleError<any>('createdPokemon', [])));
    // }

    createPokemon(pokemon: Pokemon): Observable<any> {
        return this.http.post('https://pokemonangular-default-rtdb.europe-west1.firebasedatabase.app/pokemons.json', pokemon);
    }

    // Retourne tous les pokémons
    // getPokemons(): Observable<Pokemon[]> {
    //     return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(tap(_ => this.log('fetched pokemons')),
    //         catchError(this.handleError('getPokemons', [])));
    // }

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<any>('https://pokemonangular-default-rtdb.europe-west1.firebasedatabase.app/pokemons.json')

    }

    traitmentPokemonsLocal(pokemons: any) {
        var arrayPokemon: any[] = []
        for (let pokemon in pokemons) {
            var newPokemon: Pokemon = pokemons[pokemon]

            arrayPokemon.push({ ...newPokemon, firebaseId: pokemon })
        }
        return this.pokemons = arrayPokemon
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon> {
        const pokemon = this.pokemons.find(x => x.id === id)
        return this.http.get<Pokemon>(`https://pokemonangular-default-rtdb.europe-west1.firebasedatabase.app/pokemons/${pokemon?.firebaseId}.json`);
    }

    deletePokemon(id: number): Observable<Pokemon> {
        const pokemon = this.pokemons.find(x => x.id === id)
        return this.http.delete<Pokemon>(`https://pokemonangular-default-rtdb.europe-west1.firebasedatabase.app/pokemons/${pokemon?.firebaseId}.json`);
    }

    getPokemonTypes(): string[] {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrique', 'Poison', 'Fée', 'Vol', 'Psy', 'Combat'];
    }
}