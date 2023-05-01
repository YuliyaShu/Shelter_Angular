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

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<PetBigCardComponent>) {}
  openDialog() {
    this.dialogRef = this.dialog.open(PetBigCardComponent, {
      data: {
        name: this.pet.name,
        animalType: this.pet.animalType,
        breed: this.pet.breed,
        description: this.pet.description,
        age: this.pet.age,
        inoculations: this.pet.inoculations,
        diseases: this.pet.diseases,
        parasites: this.pet.parasites,
        id: this.pet._id,
      }
    });
    const dialogSubscriptionDeleteAction = this.dialogRef.componentInstance.deletedPetId.subscribe(result => {
      this.deletedPetId.emit(result);
      dialogSubscriptionDeleteAction.unsubscribe();
    })
    const dialogSubscriptionUpdateAction = this.dialogRef.componentInstance.updatedPetData.subscribe(result => {
      this.updatedPetData.emit(result);
      dialogSubscriptionUpdateAction.unsubscribe();
    })
  }
}
