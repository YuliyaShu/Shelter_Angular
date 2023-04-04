import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PetsModule } from 'src/app/shared/pets/pets.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminComponent,
    AddButtonComponent,
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
