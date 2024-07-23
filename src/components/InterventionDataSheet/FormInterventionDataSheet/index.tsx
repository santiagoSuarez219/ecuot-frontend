import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { InterventionDataSheetFormData } from "../../../types";
import ImageUpload from "../../ImageUpload";
import { useState } from "react";

type FormInterventionDataSheetProps = {
  register: UseFormRegister<InterventionDataSheetFormData>;
  errors: FieldErrors<InterventionDataSheetFormData>;
  setValue: UseFormSetValue<InterventionDataSheetFormData>;
  interventionDataSheet?: InterventionDataSheetFormData;
};

export default function FormInterventionDataSheet({
  errors,
  register,
}: FormInterventionDataSheetProps) {
  const [imageDescription, setImageDescription] = useState<string>("");
  const [imageFeatures, setImageFeatures] = useState<string>("");
  const [imageConflictivity, setImageConflictivity] = useState<string>("");

  return (
    <>
      <div className="mb-2 space-y-2">
        <label htmlFor="description" className="font-medium">
          Descripción
        </label>
        <textarea
          id="description"
          className="w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          placeholder="Descripción de la ficha tecnica"
          {...register("description", {
            required: "La descripcion es obligatoria",
          })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="mb-2 space-y-2 hidden">
        <input
          id="image_description"
          className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          type="text"
          {...register("image_description", {
            required: "La imagen de la descripcion es obligatoria",
          })}
          value={imageDescription}
        />
      </div>
      <ImageUpload image={imageDescription} setImage={setImageDescription} />
      {errors.image_description && (
        <span className="text-red-500 text-sm">
          {errors.image_description.message}
        </span>
      )}
      <div className="mb-2 space-y-2">
        <label htmlFor="features" className="font-medium">
          Caracteristicas
        </label>
        <textarea
          id="features"
          className="w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          placeholder="Caracteristicas de la ficha tecnica"
          {...register("features", {
            required:
              "Las caracteristicas de la ficha tecnica son obligatorias",
          })}
        />
        {errors.features && (
          <span className="text-red-500 text-sm">
            {errors.features.message}
          </span>
        )}
      </div>
      <div className="mb-2 space-y-2 hidden">
        <input
          id="image_features"
          className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          type="text"
          {...register("image_features", {
            required: "La imagen de las caracteristicas es obligatoria",
          })}
          value={imageFeatures}
        />
      </div>
      <ImageUpload image={imageFeatures} setImage={setImageFeatures} />
      {errors.image_features && (
        <span className="text-red-500 text-sm">
          {errors.image_features.message}
        </span>
      )}
      <div className="mb-2 space-y-2">
        <label htmlFor="conflictivity" className="font-medium">
          Conflictividad
        </label>
        <textarea
          id="conflictivity"
          className="w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          placeholder="Conflictividad de la ficha tecnica"
          {...register("conflictivity", {
            required: "La conflictividad de la ficha tecnica es obligatoria",
          })}
        />
        {errors.conflictivity && (
          <span className="text-red-500 text-sm">
            {errors.conflictivity.message}
          </span>
        )}
      </div>
      <div className="mb-2 space-y-2 hidden">
        <input
          id="image_conflictivity"
          className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          type="text"
          {...register("image_conflictivity", {
            required: "La imagen de la conflictividad es obligatoria",
          })}
          value={imageConflictivity}
        />
      </div>
      <ImageUpload
        image={imageConflictivity}
        setImage={setImageConflictivity}
      />
      {errors.image_conflictivity && (
        <span className="text-red-500 text-sm">
          {errors.image_conflictivity.message}
        </span>
      )}
      <div className="mb-2 space-y-2">
        <label htmlFor="spatialization" className="font-medium">
          Espacilizacion
        </label>
        <textarea
          id="spatialization"
          className="w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          placeholder="Conflictividad de la ficha tecnica"
          {...register("spatialization", {
            required: "La espacializacion es obligatoria",
          })}
        />
        {errors.spatialization && (
          <span className="text-red-500 text-sm">
            {errors.spatialization.message}
          </span>
        )}
      </div>
    </>
  );
}
