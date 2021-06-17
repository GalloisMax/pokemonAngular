import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonsService } from './pokemon.service';
import { AuthGuard } from '../auth-guard.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiService } from './api/api.service';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color-pipe';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { PokemonSearchComponent } from './search-pokemon.component';
import { LoaderComponent } from '../loader.component';
import { CreatePokemonComponent } from './create-pokemon.component';
import { PokemonCreateFormComponent } from './pokemon-create-form.component';
import { PokedexComponent } from './api/pokedex.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        PokemonRoutingModule,
    ],
    declarations: [
        ListPokemonComponent,
        PokedexComponent,
        PokemonSearchComponent,
        DetailPokemonComponent,
        EditPokemonComponent,
        CreatePokemonComponent,
        PokemonFormComponent,
        PokemonCreateFormComponent,
        LoaderComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: [PokemonsService, ApiService, AuthGuard]
})
export class PokemonsModule { }