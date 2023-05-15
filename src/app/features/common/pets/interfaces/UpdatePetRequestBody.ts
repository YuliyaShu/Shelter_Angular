import { AddPetRequestBody } from "./AddPetRequestBody";

export interface UpdatePetRequestBody extends Partial<AddPetRequestBody> {
  _id: string
}
