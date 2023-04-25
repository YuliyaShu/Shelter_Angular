import { Component, EventEmitter, Output } from '@angular/core';
import { AddPetRequestBody } from 'src/app/features/common/pets/interfaces/AddPetRequestBody';
import { PetsService } from 'src/app/features/common/pets/pets.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private petsService: PetsService, private snackBar: MatSnackBar) {}

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
