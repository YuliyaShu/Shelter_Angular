import { AddPetRequestBody } from "./AddPetRequestBody";

export interface PetWithStringId extends AddPetRequestBody {
  id: string ;
}
