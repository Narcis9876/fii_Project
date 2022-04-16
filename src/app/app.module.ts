import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FindPokemonComponent } from './find-pokemon/find-pokemon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AllPokeComponent } from './all-poke/all-poke.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FormPokeComponent } from './form-poke/form-poke.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BattlePokeComponent } from './battle-poke/battle-poke.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindPokemonComponent,
    NotFoundComponent,
    HomeComponent,
    AllPokeComponent,
    LoadingSpinnerComponent,
    FormPokeComponent,
    BattlePokeComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,HttpClientModule,AppRoutingModule, HttpClientModule, FormsModule,MatAutocompleteModule,  MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
