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
  timeStressOccurrence: z.string(),
  actorsInvolved: z.string(),
  intervention: z.string(),
  image: z.string(),
});
export type Conflict = z.infer<typeof ConflictSchema>;
export type ConflictFormData = Pick<
  Conflict,
  | "conflictName"
  | "description"
  | "timeStressOccurrence"
  | "actorsInvolved"
  | "intervention"
  | "image"
>;

export const dashboardConflictSchema = z.array(
  ConflictSchema.pick({
    _id: true,
    conflictName: true,
    description: true,
    timeStressOccurrence: true,
    actorsInvolved: true,
    intervention: true,
    image: true,
  })
);

export const ConflictSchemaResponse = z.object({
  _id: z.string(),
  conflictName: z.string(),
  description: z.string(),
  timeStressOccurrence: z.string(),
  actorsInvolved: z.string(),
  intervention: z.object({
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
  }),
  image: z.string(),
});

export type ConflictResponse = z.infer<typeof ConflictSchemaResponse>;
export const dashboardConflictSchemaResponde = z.array(
  ConflictSchemaResponse.pick({
    _id: true,
    conflictName: true,
    description: true,
    timeStressOccurrence: true,
    actorsInvolved: true,
    intervention: true,
    image: true,
  })
);

/**News */
export const NewsSchema = z.object({
  _id: z.string(),
  newsName: z.string().min(1, "El nombre de la noticia es requerido"),
  description: z.string().min(1, "La descripción de la noticia es requerido"),
  newsDate: z.string().min(1, "La fecha de la noticia es requerida"),
  intervention: z.string().min(1, "La intervención es requerida"),
  image: z.string().min(1, "La imagen de la noticia es requerida"),
});
export type News = z.infer<typeof NewsSchema>;
export type NewsFormData = Pick<
  News,
  "newsName" | "description" | "newsDate" | "intervention" | "image"
>;

export const NewsSchemaForm = NewsSchema.omit({ _id: true });

export const NewsShemaResponse = z.object({
  _id: z.string(),
  newsName: z.string(),
  description: z.string(),
  newsDate: z.string(),
  intervention: z.object({
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
  }),
  image: z.string(),
});

export type NewsResponse = z.infer<typeof NewsShemaResponse>;
export const dashboardNewsShemaResponse = z.array(
  NewsShemaResponse.pick({
    _id: true,
    newsName: true,
    description: true,
    newsDate: true,
    intervention: true,
    image: true,
  })
);

/**Users */
export const UserSchema = z.object({
  _id: z.string(),
  userName: z.string().min(1, "El nombre es requerido"),
  userLastName: z.string().min(1, "El apellido es requerido"),
  rol: z.string().min(1, "El rol es requerido"),
  user: z.string().min(1, "El usuario es requerido"),
  userPassword: z.string().min(1, "La contraseña es requerida"),
  passwordConfirmation: z
    .string()
    .min(1, "La confirmación de la contraseña es requerida"),
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
export type UserItemList = Pick<
  User,
  "_id" | "userName" | "userLastName" | "rol" | "user"
>;
export const LoginSchema = UserSchema.pick({ user: true, userPassword: true });
export type LoginType = z.infer<typeof LoginSchema>;
export const UserSchemaForm = UserSchema.omit({ _id: true });
export const UserEditSchemaForm = UserSchema.pick({
  userName: true,
  userLastName: true,
  rol: true,
  user: true,
});
export type UserEditType = z.infer<typeof UserEditSchemaForm>;
export const dashboardUserSchema = z.array(
  UserSchema.pick({
    _id: true,
    userName: true,
    userLastName: true,
    rol: true,
    user: true,
  })
);
export const UserSchemaResponse = UserSchema.pick({
  _id: true,
  userName: true,
  userLastName: true,
  rol: true,
  user: true,
});
export const ChangePasswordSchema = UserSchema.pick({
  userPassword: true,
  passwordConfirmation: true,
});
export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>;

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

export const ConctactFormSchema = z.object({
  user_name: z.string().min(1, "El nombre es requerido"),
  user_email: z.string().email("El correo no es valido"),
  message: z.string().min(1, "El mensaje es requerido"),
});
export type ContactFormType = z.infer<typeof ConctactFormSchema>;
