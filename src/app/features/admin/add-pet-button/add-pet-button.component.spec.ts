import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetButtonComponent } from './add-pet-button.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

describe('AddButtonComponent', () => {
  let component: AddPetButtonComponent;
  let fixture: ComponentFixture<AddPetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetButtonComponent ],
      providers: [{
        provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}
    }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
