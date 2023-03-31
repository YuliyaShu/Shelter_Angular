import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-small-card',
  templateUrl: './pet-small-card.component.html',
  styleUrls: ['./pet-small-card.component.scss']
})
export class PetSmallCardComponent {
  @Input() name = '';
  @Input() animalType = '';
}
