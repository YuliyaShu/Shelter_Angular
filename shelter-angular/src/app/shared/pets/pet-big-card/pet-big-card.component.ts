import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pet-big-card',
  templateUrl: './pet-big-card.component.html',
  styleUrls: ['./pet-big-card.component.scss']
})
export class PetBigCardComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    name: string;
    animalType: string;
    breed: string;
    description: string;
    age: string;
    inoculations: string;
    diseases: string;
    parasites: string;
  }) { }
}
