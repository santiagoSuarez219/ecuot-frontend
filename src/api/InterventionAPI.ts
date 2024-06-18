import { InterventionFormData } from "../types";

export async function createIntervention(formData: InterventionFormData) {
  try {
    console.log(formData);
  } catch (error) {
    console.error(error);
  }
}
