import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetsModule } from '../common/pets/pets.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    PetsModule,
    AdminRoutingModule,
    BrowserAnimationsModule
  ],
})
export class AdminModule { }
