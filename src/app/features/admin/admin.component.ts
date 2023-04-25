import { Component } from '@angular/core';
import { AddPetRequestBody } from '../common/pets/interfaces/AddPetRequestBody';
import { PetsService } from '../common/pets/pets.service';
import { Observable, catchError, tap } from 'rxjs';
import { SnackBarService } from 'src/app/shared/snack-bar/snack-bar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  pet$ = new Observable();
  constructor(private petsService: PetsService, private snackBarService: SnackBarService) {}

  addPet(petRequestBody: AddPetRequestBody) {

    this.pet$ = this.petsService.addPet(petRequestBody)
    .pipe(
      tap(res => {
        if (res) this.snackBarService.callSnackBar('Added successfully!');
        return res;
      }),
      catchError((err) => {
        this.snackBarService.callSnackBar('Something went wrong! Please try later!');
        return err;
      })
    )
    return this.pet$;
  }



}
