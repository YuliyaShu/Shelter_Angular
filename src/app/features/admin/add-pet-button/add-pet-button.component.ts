import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPetDialogComponent } from '../add-pet-dialog/add-pet-dialog.component';
import { AddPetRequestBody } from '../../common/pets/interfaces/AddPetRequestBody';

@Component({
  selector: 'app-add-pet-button',
  templateUrl: './add-pet-button.component.html',
  styleUrls: ['./add-pet-button.component.scss']
})
export class AddPetButtonComponent {
  @Output() newPetData = new EventEmitter<AddPetRequestBody>;

  constructor (public dialog: MatDialog, public dialogRef: MatDialogRef<AddPetDialogComponent>) {}
  openDialog() {
    this.dialogRef = this.dialog.open(AddPetDialogComponent);
    const dialogSubmitSubscription = this.dialogRef.componentInstance.newPetData.subscribe(result => {
      this.newPetData.emit(result);
      dialogSubmitSubscription.unsubscribe();
    })
  }
}
