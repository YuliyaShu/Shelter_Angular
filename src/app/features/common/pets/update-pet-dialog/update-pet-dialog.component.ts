import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output } from '@angular/core';
import { PetWithStringId } from '../interfaces/PetWithStringId';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-pet-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './update-pet-dialog.component.html',
  styleUrls: ['./update-pet-dialog.component.scss']
})
export class UpdatePetDialogComponent {
  @Output() updatedPetData = new EventEmitter<PetWithStringId>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: PetWithStringId) {}
  updatedPet: PetWithStringId = {
    name: this.data.name,
    animalType: this.data.animalType,
    breed: this.data.breed,
    description: this.data.description,
    age: this.data.age,
    inoculations: this.data.inoculations,
    diseases: this.data.diseases,
    parasites: this.data.parasites,
    id: this.data.id
  }

  updatePet(): void {
    const updatedPetRequestBody: PetWithStringId = {
      name: this.updatedPet.name,
      animalType: this.updatedPet.animalType,
      breed: this.updatedPet.breed,
      description: this.updatedPet.description,
      age: this.updatedPet.age,
      inoculations: this.updatedPet.inoculations,
      diseases: this.updatedPet.diseases,
      parasites: this.updatedPet.parasites,
      id: this.updatedPet.id
    }
    this.updatedPetData.emit(updatedPetRequestBody);
  }
}
