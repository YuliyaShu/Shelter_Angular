export interface UpdatePetResponse {
  acknowledged: boolean,
  matchedCount: number,
  modifiedCount: number,
  upsertedCount: number,
  upsertedId: string | null
}
