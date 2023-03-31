import { Component, OnInit } from '@angular/core';
import { PetsService } from './pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit{
  constructor(private petService: PetsService) {}

  ngOnInit(): void {
    console.log(this.petService.getAllPets().subscribe())
  }
}
