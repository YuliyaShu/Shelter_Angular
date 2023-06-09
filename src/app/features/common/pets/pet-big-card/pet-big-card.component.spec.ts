import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetBigCardComponent } from './pet-big-card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PetBigCardComponent', () => {
  let component: PetBigCardComponent;
  let fixture: ComponentFixture<PetBigCardComponent>;
  let dialogRef: MatDialogRef<PetBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetBigCardComponent ],
      imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogRef }
      ]
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
