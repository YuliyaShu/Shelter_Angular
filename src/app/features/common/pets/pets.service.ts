import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/shared/constants';
import { Pet } from './interfaces/Pet';
import { tap } from 'rxjs';
import { AddPetRequestBody } from './interfaces/AddPetRequestBody';
import { UpdatePetRequestBody } from './interfaces/UpdatePetRequestBody';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  rootUrl = CONSTANTS.API_URL;

  constructor(private http: HttpClient) { }

  getAllPets() {
    return this.http.get<Pet[]>(this.rootUrl)
    .pipe(
      tap((res) => console.log('🚀 ~ getAllPets ~ res:', res))
    );
  }

  getPetById(id: string) {
    return this.http.get<Pet>(this.rootUrl, { params: {id: id} })
    .pipe(
      tap((res) => console.log('🚀 ~ getPetById ~ res:', res))
    );
  }

  addPet(body: AddPetRequestBody) {
    return this.http.post(this.rootUrl, body)
    .pipe(
      tap((res) => console.log('🚀 ~ addPet ~ res:', res))
    );
  }

  updatePet(id: string, body: UpdatePetRequestBody) {
    return this.http.patch(this.rootUrl, body, { params: { id: id }})
    .pipe(
      tap((res) => console.log('🚀 ~ updatePet ~ res:', res))
    );
  }

  deletePet(id: string) {
    this.http.delete(this.rootUrl, { params: { id: id } })
    .pipe(
      tap((res) => console.log('🚀 ~ deletePet ~ res:', res))
    );
  }

}
