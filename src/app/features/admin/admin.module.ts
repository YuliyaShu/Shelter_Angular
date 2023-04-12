import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './admin.component';
import { AddPetButtonComponent } from './add-pet-button/add-pet-button.component';
import { PetsModule } from '../common/pets/pets.module';

@NgModule({
  declarations: [
    AdminComponent,
    AddPetButtonComponent,
  ],
  imports: [
    CommonModule,
    PetsModule,
    AdminRoutingModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class AdminModule { }
