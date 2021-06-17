import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { CreatePokemonComponent } from './create-pokemon.component';

import { AuthGuard } from '../auth-guard.service';
import { PokedexComponent } from './api/pokedex.component';

// les routes du module Pokémon
const pokemonsRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard] },
    { path: 'pokemon/edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard] },
    { path: 'pokemon/create', component: CreatePokemonComponent, canActivate: [AuthGuard] },
    { path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard] },
    { path: 'pokedex', component: PokedexComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }