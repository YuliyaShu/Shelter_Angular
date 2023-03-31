import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSmallCardComponent } from './pet-small-card.component';

describe('PetSmallCardComponent', () => {
  let component: PetSmallCardComponent;
  let fixture: ComponentFixture<PetSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetSmallCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
