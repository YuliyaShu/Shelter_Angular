import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/shared/constants';
import { Pet } from './interfaces/Pet';
import { Observable, tap } from 'rxjs';
import { AddPetRequestBody } from './interfaces/AddPetRequestBody';
import { UpdatePetRequestBody } from './interfaces/UpdatePetRequestBody';
import { DeletePetResponse } from './interfaces/DeletePetResponse';
import { UpdatePetResponse } from './interfaces/UpdatePetResponse';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  pets$ = this.getAllPets();
  rootUrl = CONSTANTS.API_URL;

  constructor(private http: HttpClient) { }


  getAllPets(): Observable<Pet[]> {
    const allPets = this.http.get<Pet[]>(this.rootUrl)
    .pipe(
      tap((res: Pet[]) => console.log('🚀 ~ getAllPets ~ res:', res))
    );
    return allPets;
  }

  getPetById(id: string): Observable<Pet> {
    return this.http.get<Pet>(this.rootUrl, { params: {_id: id} })
    .pipe(
      tap((res: Pet) => console.log('🚀 ~ getPetById ~ res:', res))
    );
  }

  addPet(body: AddPetRequestBody): Observable<Pet> {
    return this.http.post<Pet>(this.rootUrl, body)
    .pipe(
      tap((res: Pet) => console.log('🚀 ~ addPet ~ res:', res))
    );
  }

  updatePet(id: string, body: UpdatePetRequestBody): Observable<UpdatePetResponse> {
    console.log('im in update')
    return this.http.patch<UpdatePetResponse>(this.rootUrl, body, { params: { _id: id }})
    .pipe(
      tap((res: UpdatePetResponse) => console.log('🚀 ~ updatePet ~ res:', res))
    );

  }

  deletePet(id: string): Observable<DeletePetResponse> {
    return this.http.delete<DeletePetResponse>(this.rootUrl, { params: { _id: id } })
    .pipe(
      tap((res: DeletePetResponse) => console.log('🚀 ~ deletePet ~ res:', res))
    );
  }
}
