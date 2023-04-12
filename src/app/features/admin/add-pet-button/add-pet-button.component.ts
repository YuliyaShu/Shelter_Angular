import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPetDialogComponent } from './add-pet-dialog/add-pet-dialog.component';

@Component({
  selector: 'app-add-pet-button',
  templateUrl: './add-pet-button.component.html',
  styleUrls: ['./add-pet-button.component.scss']
})
export class AddPetButtonComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(AddPetDialogComponent);
  }
}
