import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PetBigCardComponent } from '../pet-big-card/pet-big-card.component';
import { Pet } from '../interfaces/Pet';
import { PetWithStringId } from '../interfaces/PetWithStringId';
import { createApi } from 'unsplash-js';

@Component({
  selector: 'app-pet-small-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pet-small-card.component.html',
  styleUrls: ['./pet-small-card.component.scss']
})
export class PetSmallCardComponent implements OnInit {
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

  unsplash = createApi(
    {
      accessKey: '9ci4sK9TMqPpRCJb5ZeGYnhgn4Kp7uIkBEaB18dU_AE'
    }
  );
  photoUrl = '';

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getPhoto(this.pet.breed)
      .then((url) => {
        this.photoUrl = url;
        this.cdr.detectChanges();
      })
      .catch((error) => {
        console.error('Error retrieving photo:', error);
      });
  }

  async getPhoto(breed: string): Promise<string> {
    try {
      const response = await this.unsplash.search.getPhotos({
        query: breed,
        page: 1,
        perPage: 1,
        orientation: 'portrait'
      });
      if (response.errors) {
        return '../../../../../assets/images/about-pets.png';
      } else {
        return response.response.results[0].urls.regular;
      }
    } catch (error) {
      return '../../../../../assets/images/about-pets.png';
    }
  }

  openDialog(): void {
    const dialogRef: MatDialogRef<PetBigCardComponent> = this.dialog.open(
      PetBigCardComponent,
      {
        data: { ...this.pet, url: this.photoUrl }
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
