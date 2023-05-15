import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPetDialogComponent } from '../add-pet-dialog/add-pet-dialog.component';
import { AddPetRequestBody } from '../../common/pets/interfaces/AddPetRequestBody';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-pet-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-pet-button.component.html',
  styleUrls: ['./add-pet-button.component.scss']
})
export class AddPetButtonComponent {
  @Output() newPetData = new EventEmitter<AddPetRequestBody>;

  constructor (public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef: MatDialogRef<AddPetDialogComponent> = this.dialog.open(AddPetDialogComponent);
    dialogRef.componentInstance.newPetData
    .pipe(take(1))
    .subscribe((result: AddPetRequestBody) => {
      this.newPetData.emit(result);
    })
  }
}
