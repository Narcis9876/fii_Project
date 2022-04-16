import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPokeComponent } from './all-poke/all-poke.component';
import { BattlePokeComponent } from './battle-poke/battle-poke.component';
import { FindPokemonComponent } from './find-pokemon/find-pokemon.component';
import { FormPokeComponent } from './form-poke/form-poke.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'findPokemon'},
  {path:'home', component:HomeComponent},
{path:'findPokemon', component:FindPokemonComponent},
{path:'allPoke', component:AllPokeComponent} ,
{path:'battle', component:BattlePokeComponent},
{path:'addPokemon', component:FormPokeComponent} ,
{path:'**', pathMatch:'full', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
