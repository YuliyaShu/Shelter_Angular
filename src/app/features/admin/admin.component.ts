import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CONSTANTS } from 'src/app/shared/constants';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { AddPetRequestBody } from '../common/pets/interfaces/AddPetRequestBody';
import { PetsService } from '../common/pets/pets.service';
import { Observable, catchError, tap } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  pet$ = new Observable();
  constructor(private petsService: PetsService, private snackBar: MatSnackBar) {}

  async addPet(petRequestBody: AddPetRequestBody) {

    this.pet$ = this.petsService.addPet(petRequestBody)
    .pipe(
      tap(res => {
        if (res) this.callSnackBar('Added successfully!');
        return res;
      }),
      catchError((err) => {
        this.callSnackBar('Something went wrong! Please try later!');
        return err;
      })
    )
    return this.pet$;
  }

  callSnackBar(text: string) {
    const snackBarRef = this.snackBar.openFromComponent(SnackBarComponent, {
      data: text,
      duration: CONSTANTS.DURATION_IN_SECONDS * 500,
    });
    snackBarRef.afterDismissed().subscribe(() => window.location.reload())
  }

}
