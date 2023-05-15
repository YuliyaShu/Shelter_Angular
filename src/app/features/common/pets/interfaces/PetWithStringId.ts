import { AddPetRequestBody } from "./AddPetRequestBody";

export interface PetWithStringId extends AddPetRequestBody {
  _id: string ;
}
