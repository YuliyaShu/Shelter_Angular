import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { PetSmallCardComponent } from './pet-small-card/pet-small-card.component';
import { PetBigCardComponent } from './pet-big-card/pet-big-card.component';
import { UpdatePetDialogComponent } from './update-pet-dialog/update-pet-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPetButtonComponent } from './add-pet-button/add-pet-button.component';
import { AddPetDialogComponent } from './add-pet-dialog/add-pet-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    PetsComponent,
    PetSmallCardComponent,
    PetBigCardComponent,
    UpdatePetDialogComponent,
    AddPetButtonComponent,
    AddPetDialogComponent,
  ],
  exports: [
    PetsComponent,
    PetSmallCardComponent,
    PetBigCardComponent,
    UpdatePetDialogComponent,
    AddPetButtonComponent,
    AddPetDialogComponent,
  ],
  providers:[
    {provide: MatDialogRef, useValue:{}}
  ]
})
export class PetsModule { }
