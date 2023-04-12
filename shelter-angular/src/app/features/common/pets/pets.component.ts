import { Component, OnInit } from '@angular/core';
import { PetsService } from './pets.service';
import { Pet } from './interfaces/Pet';
import { CONSTANTS } from 'src/app/shared/constants';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit{
  pets: Pet[] = [];
  defaultName = CONSTANTS.PET_DEFAULT_NAME;
  defaultType = CONSTANTS.PET_DEFAULT_TYPE;
  defaultBreed = CONSTANTS.PET_DEFAULT_BREED;
  defaultDescription = CONSTANTS.PET_DEFAULT_DESCRIPTION;
  defaultAge = CONSTANTS.PET_DEFAULT_AGE;
  defaultDiseases = CONSTANTS.PET_DEFAULT_DISEASES;
  defaultInoculations = CONSTANTS.PET_DEFAULT_INOCULATIONS;
  defaultParasites = CONSTANTS.PET_DEFAULT_PARASITES;

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    console.log(this.petsService.getAllPets().subscribe())
    this.petsService.getAllPets().subscribe((allPetsValue) => {
      this.pets = allPetsValue;
      return allPetsValue;
    })
  }


}
