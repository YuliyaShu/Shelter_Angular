export interface AddPetRequestBody {
  name: string;
  animalType: string;
  breed: string;
  description: string;
  age: string;
  inoculations: string | null;
  diseases: string | null
  parasites: string | null;
}
