import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PetBigCardComponent } from '../pet-big-card/pet-big-card.component';

@Component({
  selector: 'app-pet-small-card',
  templateUrl: './pet-small-card.component.html',
  styleUrls: ['./pet-small-card.component.scss']
})
export class PetSmallCardComponent {
  @Input() name = '';
  @Input() animalType = '';
  @Input() breed = '';
  @Input() description = '';
  @Input() age = '';
  @Input() inoculations = '';
  @Input() diseases = '';
  @Input() parasites = '';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PetBigCardComponent, {
      data: {
        name: this.name,
        animalType: this.animalType,
        breed: this.breed,
        description: this.description,
        age: this.age,
        inoculations: this.inoculations,
        diseases: this.diseases,
        parasites: this.parasites,
      }
    });
  }
}
