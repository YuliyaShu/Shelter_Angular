import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output } from '@angular/core';
import { PetWithStringId } from '../interfaces/PetWithStringId';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-pet-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './update-pet-dialog.component.html',
  styleUrls: ['./update-pet-dialog.component.scss']
})
export class UpdatePetDialogComponent {
  @Output() updatedPetData = new EventEmitter<PetWithStringId>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: PetWithStringId) {}
  updatedPet: PetWithStringId = { ...this.data }

  updatePet(): void {
    const updatedPetRequestBody: PetWithStringId = { ...this.updatedPet }
    this.updatedPetData.emit(updatedPetRequestBody);
  }
}
