import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonapiService {


options:any[]=['pikachu', 'ditto', 'arceus', 'zacian'];

  constructor(private http:HttpClient) { }

  fetchPokemon(pokemonName):Observable<any>{

    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  }

  fetchAllPoke(index:number):Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}`);

  }



}
