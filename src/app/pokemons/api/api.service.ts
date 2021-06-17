import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApiService {
    public httpParams: HttpParams = new HttpParams();

    constructor(private http: HttpClient) {
        this.httpParams = this.httpParams.set('limit', 10);
    }

    getApiPokemons() {
        return this.http.get(`https://pokeapi.co/api/v1/pokemon`, { params: this.httpParams }).pipe(map((res: any) => { return res }));
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