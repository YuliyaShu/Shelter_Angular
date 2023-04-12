import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetButtonComponent } from './add-pet-button.component';

describe('AddButtonComponent', () => {
  let component: AddPetButtonComponent;
  let fixture: ComponentFixture<AddPetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetButtonComponent ]
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
