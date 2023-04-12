import { AddPetRequestBody } from "./AddPetRequestBody";

export interface Pet extends AddPetRequestBody {
  _id: { type: string };
}
