
import { HttpClient } from '@angular/common/http';
import {Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError,  Subject, throwError } from 'rxjs';
import { PokemonapiService } from '../pokemonapi.service';

@Component({
  selector: 'app-find-pokemon',
  templateUrl: './find-pokemon.component.html',
  styleUrls: ['./find-pokemon.component.css']
})
export class FindPokemonComponent implements OnInit {

  pokemonName:string;
  pokemon=[];
 @ViewChild('f') pokeForm:NgForm;
spinner=true;
haveError=false;

  constructor(private http:HttpClient, private servicePoke: PokemonapiService) { }

  ngOnInit(): void {

  }


options=this.servicePoke.options;
error= new Subject<string>();


fetchPokemon(){
  this.servicePoke.fetchPokemon(this.pokemonName) .pipe(
    catchError(err => {
err=  this.pokemonName+ ' is not a pokemon name';
        return throwError(err);
    })
).subscribe(responsedata=>{
    this.pokemon.push(responsedata);
    console.log(responsedata);

  console.log(this.pokemon);
  this.pokeForm.reset();
  this.spinner=false;
  this.haveError=false;


  }, err=>{
    this.error=err;
    console.log(this.error);
    this.haveError=true;
    this.pokeForm.reset();
  })
};





}

