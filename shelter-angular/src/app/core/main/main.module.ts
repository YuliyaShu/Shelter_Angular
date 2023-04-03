import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PetsComponent } from './pets/pets.component';
import { PetSmallCardComponent } from './pets/pet-small-card/pet-small-card.component';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    MainComponent,
    PetsComponent,
    PetSmallCardComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class MainModule { }
