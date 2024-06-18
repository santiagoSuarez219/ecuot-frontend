import { z } from "zod";

/**Interventions */
export const InterventionSchema = z.object({
  _id: z.string(),
  interventionName: z.string(),
  description: z.string(),
  hierarchy: z.string(),
  strategicProject: z.string(),
  internalSystem: z.string(),
});
export type Intervention = z.infer<typeof InterventionSchema>;
export type InterventionFormData = Pick<
  Intervention,
  | "interventionName"
  | "description"
  | "hierarchy"
  | "strategicProject"
  | "internalSystem"
>;

/**Conflicts */
export const ConflictSchema = z.object({
  _id: z.string(),
  conflictName: z.string(),
  description: z.string(),
  associatedIntervention: z.string(),
  timeStressOccurrence: z.string(),
  actorsInvolved: z.string(),
});
export type Conflict = z.infer<typeof ConflictSchema>;
export type ConflictFormData = Pick<
  Conflict,
  | "conflictName"
  | "description"
  | "associatedIntervention"
  | "timeStressOccurrence"
  | "actorsInvolved"
>;

/**News */
export const NewsSchema = z.object({
  _id: z.string(),
  newsName: z.string(),
  description: z.string(),
  associatedIntervention: z.string(),
  newsDate: z.date(),
});
export type News = z.infer<typeof NewsSchema>;
export type NewsFormData = Pick<
  News,
  "newsName" | "description" | "associatedIntervention" | "newsDate"
>;
