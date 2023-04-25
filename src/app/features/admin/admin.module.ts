import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './admin.component';
import { AddPetButtonComponent } from './add-pet-button/add-pet-button.component';
import { PetsModule } from '../common/pets/pets.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddPetDialogComponent } from './add-pet-dialog/add-pet-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    AddPetButtonComponent,
    AddPetDialogComponent,
  ],
  imports: [
    CommonModule,
    PetsModule,
    AdminRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    {provide: MatDialogRef, useValue:{}}
 ]
})
export class AdminModule { }
