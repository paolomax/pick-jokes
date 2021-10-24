import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesComponent } from './jokes-component/jokes.component';
import { CurrentJokeComponent } from './current-joke/current-joke.component';
import { LikedJokesComponent } from './liked-jokes/liked-jokes.component';
import { DislikedJokesComponent } from './disliked-jokes/disliked-jokes.component';


@NgModule({
  declarations: [
    JokesComponent,
    CurrentJokeComponent,
    LikedJokesComponent,
    DislikedJokesComponent
  ],
  imports: [
    CommonModule,
    JokesRoutingModule
  ]
})
export class JokesModule { }
