import { z } from "zod";

/**Interventions */
export const InterventionSchema = z.object({
  _id: z.string(),
  interventionName: z.string(),
  description: z.string(),
  hierarchy: z.string(),
  strategicProject: z.string(),
  internalSystem: z.string(),
  image: z.string(),
  datasheet: z.string().nullable(),
  conflicts: z.array(z.string()),
  news: z.array(z.string()),
});
export const dashboardInterventionSchema = z.array(
  InterventionSchema.pick({
    _id: true,
    interventionName: true,
    description: true,
    hierarchy: true,
    strategicProject: true,
    internalSystem: true,
    image: true,
    datasheet: true,
    conflicts: true,
    news: true,
  })
);
export type Intervention = z.infer<typeof InterventionSchema>;
export type InterventionFormData = Pick<
  Intervention,
  | "interventionName"
  | "description"
  | "hierarchy"
  | "strategicProject"
  | "internalSystem"
  | "image"
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

/**Users */
export const UserSchema = z.object({
  _id: z.string(),
  userName: z.string(),
  userLastName: z.string(),
  rol: z.string(),
  user: z.string(),
  userPassword: z.string(),
  passwordConfirmation: z.string(),
});
export type User = z.infer<typeof UserSchema>;
export type UserFormData = Pick<
  User,
  | "userName"
  | "userLastName"
  | "rol"
  | "user"
  | "userPassword"
  | "passwordConfirmation"
>;
export type LoginFormData = Pick<User, "user" | "userPassword">;
export const UserSchemaResponse = UserSchema.pick({
  _id: true,
  userName: true,
  userLastName: true,
  rol: true,
  user: true,
});
export type UserResponse = z.infer<typeof UserSchemaResponse>;

/*Information */
export const InformationSchema = z.object({
  _id: z.string(),
  aboutUs: z.string(),
});
export type Information = z.infer<typeof InformationSchema>;

/* Intervention Datasheet */
export const InterventionDataSheetSchema = z.object({
  _id: z.string(),
  description: z.string(),
  image_description: z.string(),
  features: z.string(),
  image_features: z.string(),
  conflictivity: z.string(),
  image_conflictivity: z.string(),
  spatialization: z.string(),
  intervention: z.string(),
});

export type InterventionDataSheet = z.infer<typeof InterventionDataSheetSchema>;
export type InterventionDataSheetFormData = Pick<
  InterventionDataSheet,
  | "description"
  | "image_description"
  | "features"
  | "image_features"
  | "conflictivity"
  | "image_conflictivity"
  | "spatialization"
>;
