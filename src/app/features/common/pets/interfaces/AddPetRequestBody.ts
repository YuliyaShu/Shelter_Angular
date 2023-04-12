export interface AddPetRequestBody {
  name: string;
  animalType: string;
  breed: string;
  description: string;
  age: string;
  inoculations?: string;
  diseases?: string;
  parasites?: string;
}
