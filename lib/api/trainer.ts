import { TrainerApplication } from "../db/types";
import { trainerApplicationSchema } from "../utils/validation";

export async function submitTrainerApplication(
  data: Omit<TrainerApplication, 'id' | 'status'>
) {
  const validated = trainerApplicationSchema.parse(data);
  
  // Placeholder implementation
  console.log('Submitting trainer application:', validated);
  
  return {
    ...validated,
    id: Date.now().toString(),
    status: 'pending' as const
  };
}