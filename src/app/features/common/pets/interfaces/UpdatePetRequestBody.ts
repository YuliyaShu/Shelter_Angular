import { AddPetRequestBody } from "./AddPetRequestBody";

export interface UpdatePetRequestBody extends Partial<AddPetRequestBody> {
  id: string
}
