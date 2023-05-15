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

  openDialog(): void {
    this.dialogRef = this.dialog.open(UpdatePetDialogComponent, {
      data: { ...this.data }
    });
    const dialogSubmitSubscription = this.dialogRef.componentInstance.updatedPetData.subscribe((result: PetWithStringId) => {
      this.updatedPetData.emit(result);
      dialogSubmitSubscription.unsubscribe();
    })
  }

  deletePet(id: string): void {
    this.deletedPetId.emit(id);
  }
}
