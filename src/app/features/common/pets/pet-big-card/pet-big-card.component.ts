import { ChangeDetectionStrategy, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PetWithStringId } from '../interfaces/PetWithStringId';
import { UpdatePetDialogComponent } from '../update-pet-dialog/update-pet-dialog.component';

@Component({
  selector: 'app-pet-big-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pet-big-card.component.html',
  styleUrls: ['./pet-big-card.component.scss']
})
export class PetBigCardComponent implements OnInit {
  @Output() deletedPetId = new EventEmitter<string>();
  @Output() updatedPetData = new EventEmitter<PetWithStringId>();

  isAdminRoute = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PetWithStringId,
    private router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdatePetDialogComponent>) { }

  ngOnInit(): void {
    this.isAdminRoute = (this.router.url === '/admin');
  }

  openDialog() {
    this.dialogRef = this.dialog.open(UpdatePetDialogComponent, {
      data: {
        name: this.data.name,
        animalType: this.data.animalType,
        breed: this.data.breed,
        description: this.data.description,
        age: this.data.age,
        inoculations: this.data.inoculations,
        diseases: this.data.diseases,
        parasites: this.data.parasites,
        id: this.data.id,
      }
    });
    const dialogSubmitSubscription = this.dialogRef.componentInstance.updatedPetData.subscribe(result => {
      this.updatedPetData.emit(result);
      dialogSubmitSubscription.unsubscribe();
    })
  }

  deletePet(id: string) {
    this.deletedPetId.emit(id);
  }
}
