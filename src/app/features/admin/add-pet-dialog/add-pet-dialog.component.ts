import { Component, EventEmitter, Output } from '@angular/core';
import { AddPetRequestBody } from 'src/app/features/common/pets/interfaces/AddPetRequestBody';

@Component({
  selector: 'app-add-pet-dialog',
  templateUrl: './add-pet-dialog.component.html',
  styleUrls: ['./add-pet-dialog.component.scss']
})
export class AddPetDialogComponent {
  @Output() newPetData = new EventEmitter<AddPetRequestBody>();
  name = '';
  animalType = '';
  breed = '';
  description = '';
  age = '';
  inoculations = '';
  diseases = '';
  parasites = '';

  addPet() {
    const addPetRequestBody: AddPetRequestBody = {
      name: this.name,
      animalType: this.animalType,
      breed: this.breed,
      description: this.description,
      age: this.age,
      inoculations: this.inoculations,
      diseases: this.diseases,
      parasites: this.parasites
    }
    this.newPetData.emit(addPetRequestBody);
  }
}
