import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { PetsModule } from '../common/pets/pets.module';
import { MainRoutingModule } from './main-routing.module';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        IntroComponent,
        AboutComponent
      ],
      imports: [
        CommonModule,
        PetsModule,
        MainRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
