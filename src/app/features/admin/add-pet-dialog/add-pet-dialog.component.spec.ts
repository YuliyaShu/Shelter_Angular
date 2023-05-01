import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetDialogComponent } from './add-pet-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddPetDialogComponent', () => {
  let component: AddPetDialogComponent;
  let fixture: ComponentFixture<AddPetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetDialogComponent ],
      imports: [
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

    fixture = TestBed.createComponent(AddPetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
