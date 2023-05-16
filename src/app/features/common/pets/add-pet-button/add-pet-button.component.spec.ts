import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPetButtonComponent } from './add-pet-button.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from 'src/app/features/admin/admin-routing.module';
import { PetsModule } from '../pets.module';

describe('AddPetButtonComponent', () => {
  let component: AddPetButtonComponent;
  let fixture: ComponentFixture<AddPetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetButtonComponent ],
      imports: [
        CommonModule,
        PetsModule,
        AdminRoutingModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        SharedModule,
        BrowserAnimationsModule
      ],
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
