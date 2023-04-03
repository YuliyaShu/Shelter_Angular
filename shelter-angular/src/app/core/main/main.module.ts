import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PetsComponent } from './pets/pets.component';
import { PetSmallCardComponent } from './pets/pet-small-card/pet-small-card.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { PetBigCardComponent } from './pets/pet-big-card/pet-big-card.component';


@NgModule({
  declarations: [
    MainComponent,
    PetsComponent,
    PetSmallCardComponent,
    IntroComponent,
    AboutComponent,
    PetBigCardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class MainModule { }
