import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { AddPetRequestBody } from 'src/app/features/common/pets/interfaces/AddPetRequestBody';

@Component({
  selector: 'app-add-pet-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-pet-dialog.component.html',
  styleUrls: ['./add-pet-dialog.component.scss']
})
export class AddPetDialogComponent {
  @Output() newPetData = new EventEmitter<AddPetRequestBody>();
  newPet: AddPetRequestBody = {
    name: '',
    animalType: '',
    breed: '',
    description: '',
    age: '',
    inoculations: '',
    diseases: '',
    parasites: '',
  }


  addPet() {
    const addPetRequestBody: AddPetRequestBody = {
      name: this.newPet.name,
      animalType: this.newPet.animalType,
      breed: this.newPet.breed,
      description: this.newPet.description,
      age: this.newPet.age,
      inoculations: this.newPet.inoculations,
      diseases: this.newPet.diseases,
      parasites: this.newPet.parasites
    }
    this.newPetData.emit(addPetRequestBody);
  }
}
