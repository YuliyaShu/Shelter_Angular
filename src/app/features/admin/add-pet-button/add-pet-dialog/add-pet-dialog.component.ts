import { Component } from '@angular/core';
import { AddPetRequestBody } from 'src/app/features/common/pets/interfaces/AddPetRequestBody';
import { PetsService } from 'src/app/features/common/pets/pets.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { CONSTANTS } from 'src/app/shared/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pet-dialog',
  templateUrl: './add-pet-dialog.component.html',
  styleUrls: ['./add-pet-dialog.component.scss']
})
export class AddPetDialogComponent {
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
    return this.petsService.addPet(addPetRequestBody).subscribe(res => {
      if (res) {
        const snackBarRef = this.snackBar.openFromComponent(SnackBarComponent, {
            data: 'Added successfully!',
            duration: CONSTANTS.DURATION_IN_SECONDS * 500,
          });
          snackBarRef.afterDismissed().subscribe(() => window.location.reload())
      }
    });
  }
}
