import { Component } from '@angular/core';
import { AddPetRequestBody } from '../common/pets/interfaces/AddPetRequestBody';
import { PetsService } from '../common/pets/pets.service';
import { Observable, catchError, of, tap } from 'rxjs';
import { SnackBarService } from 'src/app/shared/snack-bar/snack-bar.service';
import { Pet } from '../common/pets/interfaces/Pet';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  pet$:Observable<Pet | null>;
  constructor(private petsService: PetsService, private snackBarService: SnackBarService) {
    this.pet$ = of(null);
  }

  addPet(petRequestBody: AddPetRequestBody): Observable<Pet | null> {
    this.pet$ = this.petsService.addPet(petRequestBody)
    .pipe(
      tap((res: Pet) => {
        if (res) this.snackBarService.callSnackBar('Added successfully!');

      }),
      catchError(() => {
        this.snackBarService.callSnackBar('Something went wrong! Please try later!');
        return of();
      })
    )
    return this.pet$;
  }
}
