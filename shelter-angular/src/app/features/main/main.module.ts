import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { PetsModule } from '../common/pets/pets.module';


@NgModule({
  declarations: [
    MainComponent,
    IntroComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    PetsModule,
    MainRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class MainModule { }
