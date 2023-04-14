import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PetsService } from '../pets.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { CONSTANTS } from 'src/app/shared/constants';

@Component({
  selector: 'app-pet-big-card',
  templateUrl: './pet-big-card.component.html',
  styleUrls: ['./pet-big-card.component.scss']
})
export class PetBigCardComponent implements OnInit {
  isAdminRoute = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    name: string;
    animalType: string;
    breed: string;
    description: string;
    age: string;
    inoculations: string;
    diseases: string;
    parasites: string;
    id: string;
  },
  private router: Router, private petsService: PetsService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isAdminRoute = (this.router.url === '/admin');
  }

  editPet() {
    return "Edit pet method result is here";
  }

  deletePet(id: string) {
    return this.petsService.deletePet(id).subscribe((res) => {
    if (res) {
      const snackBarRef = this.snackBar.openFromComponent(SnackBarComponent, {
          data: 'Deleted successfully!',
          duration: CONSTANTS.DURATION_IN_SECONDS * 500,
        });
        snackBarRef.afterDismissed().subscribe(() => window.location.reload())
    }});
  }
}
