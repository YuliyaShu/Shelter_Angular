import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-big-card',
  templateUrl: './pet-big-card.component.html',
  styleUrls: ['./pet-big-card.component.scss']
})
export class PetBigCardComponent implements OnInit {
  isAdminRoute = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    name: string;
    animalType: string;
    breed: string;
    description: string;
    age: string;
    inoculations: string;
    diseases: string;
    parasites: string;
  },
  private router: Router) { }

  ngOnInit(): void {
    this.isAdminRoute = (this.router.url === '/admin');
  }

  editPet() {
    return "Edit pet method result is here";
  }

  deletePet() {
    return "Delete pet method result is here";
  }
}
