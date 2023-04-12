import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { PetSmallCardComponent } from './pet-small-card/pet-small-card.component';
import { PetBigCardComponent } from './pet-big-card/pet-big-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PetsComponent,
    PetSmallCardComponent,
    PetBigCardComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    PetsComponent,
    PetSmallCardComponent,
    PetBigCardComponent,
  ]
})
export class PetsModule { }
