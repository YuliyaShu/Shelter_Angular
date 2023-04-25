import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetDialogComponent } from './add-pet-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

describe('AddPetDialogComponent', () => {
  let component: AddPetDialogComponent;
  let fixture: ComponentFixture<AddPetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetDialogComponent ],
      providers: [{
        provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}
    }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
