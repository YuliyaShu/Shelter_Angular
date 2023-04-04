import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PetsModule } from 'src/app/shared/pets/pets.module';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    PetsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
