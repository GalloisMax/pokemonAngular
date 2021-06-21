import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    getApiPokemons(limit: number, offset: number) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    }

    getMoreData(name: string) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }


    // getApiPokemons(): Observable<any> {
    //     return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=10`).pipe(tap(() => console.log('fetched pokemons')),
    //         catchError(this.handleError('getApiPokemons', [])));
    // }


    // private handleError<T>(operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //         console.log(error);
    //         console.log(`${operation} failed: ${error.message}`);

    //         return of(result as T)
    //     }
    // }

}