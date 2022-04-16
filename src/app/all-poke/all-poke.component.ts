import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PokemonapiService } from '../pokemonapi.service';

@Component({
  selector: 'app-all-poke',
  templateUrl: './all-poke.component.html',
  styleUrls: ['./all-poke.component.css']
})
export class AllPokeComponent implements OnInit {
  pokemons:any[]=[];
  index:number=1;
  constructor(private servicePoke:PokemonapiService) { }

  ngOnInit(): void {
this.getAllPoke();
  }

  getAllPoke(){
    this.servicePoke.fetchAllPoke(this.index).subscribe(responseData=>{
  this.pokemons.push(responseData);
  console.log(this.pokemons);
  this.index++;
    })
  }
}
