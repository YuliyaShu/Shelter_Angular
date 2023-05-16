import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PetBigCardComponent } from '../pet-big-card/pet-big-card.component';
import { Pet } from '../interfaces/Pet';
import { PetWithStringId } from '../interfaces/PetWithStringId';

@Component({
  selector: 'app-pet-small-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pet-small-card.component.html',
  styleUrls: ['./pet-small-card.component.scss']
})
export class PetSmallCardComponent {
  @Input() pet: Pet = {
    name: '',
    animalType: '',
    breed: '',
    description: '',
    age: '',
    inoculations: '',
    diseases: '',
    parasites: '',
    _id: {type: ''}
  }
  @Output() deletedPetId = new EventEmitter<string>;
  @Output() updatedPetData = new EventEmitter<PetWithStringId>;

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef: MatDialogRef<PetBigCardComponent> = this.dialog.open(
      PetBigCardComponent,
      {
        data: { ...this.pet }
      }
    );
    const dialogSubscriptionDeleteAction = dialogRef.componentInstance.deletedPetId.subscribe(result => {
      this.deletedPetId.emit(result);
      dialogSubscriptionDeleteAction.unsubscribe();
      dialogRef.close();
    })
    const dialogSubscriptionUpdateAction = dialogRef.componentInstance.updatedPetData.subscribe(result => {
      this.updatedPetData.emit(result);
      dialogSubscriptionUpdateAction.unsubscribe();
      dialogRef.close();
    })
  }
}
