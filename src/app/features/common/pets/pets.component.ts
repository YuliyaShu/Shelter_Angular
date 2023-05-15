import { Component, OnInit } from '@angular/core';
import { PetsService } from './pets.service';
import { CONSTANTS } from 'src/app/shared/constants';
import { Observable, catchError, of, tap } from 'rxjs';
import { Pet } from './interfaces/Pet';
import { DeletePetResponse } from './interfaces/DeletePetResponse';
import { SnackBarService } from 'src/app/shared/snack-bar/snack-bar.service';
import { PetWithStringId } from './interfaces/PetWithStringId';
import { UpdatePetResponse } from './interfaces/UpdatePetResponse';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit{
  pets$ = new Observable<Pet[]>();
  deletedPet$ = new Observable<DeletePetResponse>();
  updatedPet$ = new Observable<UpdatePetResponse>();
  defaultPet = CONSTANTS.PET_DEFAULT;

  constructor(private petsService: PetsService, private snackBarService: SnackBarService) {}

  ngOnInit(): void {
    this.loadPets();
  }

  loadPets(): void {
    this.pets$ = this.petsService.getAllPets()
      .pipe(
        catchError((err) => {
        throw new Error(`There is an error: ${err}`)
      })
    )
  }

  deletePet(id: string): Observable<DeletePetResponse> {
    this.deletedPet$ = this.petsService.deletePet(id)
      .pipe(
        tap((res: DeletePetResponse) => {
          if (res) this.snackBarService.callSnackBar('Deleted successfully!');
        }),
        catchError(() => {
          this.snackBarService.callSnackBar('Something went wrong! Please try later!');
          return of() as Observable<DeletePetResponse>;
        })
      )
    return this.deletedPet$;
  }

  updatePet(newPetData: PetWithStringId): Observable<UpdatePetResponse> {
    this.updatedPet$ = this.petsService.updatePet(newPetData.id, newPetData)
    .pipe(
      tap((res) => {
        if (res) this.snackBarService.callSnackBar('Updated successfully!');
      }),
      catchError(() => {
        this.snackBarService.callSnackBar('Something went wrong! Please try later!');
        return of() as Observable<UpdatePetResponse>;
      })
    )
    return this.updatedPet$;
  }
}
