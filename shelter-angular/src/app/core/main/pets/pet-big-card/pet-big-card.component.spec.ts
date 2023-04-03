import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetBigCardComponent } from './pet-big-card.component';

describe('PetBigCardComponent', () => {
  let component: PetBigCardComponent;
  let fixture: ComponentFixture<PetBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetBigCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
