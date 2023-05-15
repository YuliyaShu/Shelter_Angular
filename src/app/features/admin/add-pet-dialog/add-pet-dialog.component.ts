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


  addPet(): void {
    const addPetRequestBody: AddPetRequestBody = { ...this.newPet }
    this.newPetData.emit(addPetRequestBody);
  }
}
