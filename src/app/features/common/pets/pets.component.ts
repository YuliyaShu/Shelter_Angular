import { Component, OnDestroy, OnInit } from '@angular/core';
import { PetsService } from './pets.service';
import { CONSTANTS } from 'src/app/shared/constants';
import { BehaviorSubject, Observable, Subscription, catchError, of, tap } from 'rxjs';
import { Pet } from './interfaces/Pet';
import { DeletePetResponse } from './interfaces/DeletePetResponse';
import { SnackBarService } from 'src/app/shared/snack-bar/snack-bar.service';
import { PetWithStringId } from './interfaces/PetWithStringId';
import { UpdatePetResponse } from './interfaces/UpdatePetResponse';
import { Router } from '@angular/router';
import { AddPetRequestBody } from './interfaces/AddPetRequestBody';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, OnDestroy {
  pets$ = new BehaviorSubject<Pet[]>([]);
  subscriptions: Subscription[] = [];
  deletedPet$ = new Observable<DeletePetResponse>();
  updatedPet$ = new Observable<UpdatePetResponse>();
  newPet$ = new Observable<Pet>();
  defaultPet = CONSTANTS.PET_DEFAULT;
  isAdminRoute = false;

  constructor(
    private petsService: PetsService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPets();
    this.isAdminRoute = (this.router.url === '/admin');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  loadPets(): void {
    const subscription = this.petsService.getAllPets()
      .pipe(
        tap((res) => this.pets$.next(res)),
        catchError((err) => {
        throw new Error(`There is an error: ${err}`)
        })
      )
      .subscribe();
    this.subscriptions.push(subscription);
  }

  addPet(petRequestBody: AddPetRequestBody): Observable<Pet | null> {
    this.newPet$ = this.petsService.addPet(petRequestBody)
      .pipe(
        tap((res: Pet) => {
          if (res) {
            this.snackBarService.callSnackBar('Added successfully!');
            this.loadPets();
          }
        }),
        catchError(() => {
          this.snackBarService.callSnackBar('Something went wrong! Please try later!');
          return of();
        })
      )
    return this.newPet$;
  }

  deletePet(id: string): Observable<DeletePetResponse> {
    this.deletedPet$ = this.petsService.deletePet(id)
      .pipe(
        tap((res: DeletePetResponse) => {
          if (res) {
            this.snackBarService.callSnackBar('Deleted successfully!');
            this.loadPets();
          }
        }),
        catchError(() => {
          this.snackBarService.callSnackBar('Something went wrong! Please try later!');
          return of() as Observable<DeletePetResponse>;
        })
      )
    return this.deletedPet$;
  }

  updatePet(newPetData: PetWithStringId): Observable<UpdatePetResponse> {
    this.updatedPet$ = this.petsService.updatePet(newPetData._id, newPetData)
      .pipe(
        tap((res) => {
          if (res) {
            this.snackBarService.callSnackBar('Updated successfully!');
            this.loadPets();
          }
        }),
        catchError(() => {
          this.snackBarService.callSnackBar('Something went wrong! Please try later!');
          return of() as Observable<UpdatePetResponse>;
        })
      )
    return this.updatedPet$;
  }
}
