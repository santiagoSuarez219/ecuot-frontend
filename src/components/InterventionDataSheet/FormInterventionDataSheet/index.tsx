import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InterventionDataSheetFormData } from "../../../types";
import ImageUpload from "../../ImageUpload";
import { useState } from "react";

type FormInterventionDataSheetProps = {
  register: UseFormRegister<InterventionDataSheetFormData>;
  errors: FieldErrors<InterventionDataSheetFormData>;
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
      <div className="mb-2 space-y-2 text-sm md:text-base">
        <label htmlFor="description" className="font-medium">
          Descripción
        </label>
        <textarea
          id="description"
          className={`w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
            errors.description
              ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
              : ""
          }`}
          placeholder={
            errors.description
              ? errors.description.message
              : "Descripción de la ficha tecnica"
          }
          {...register("description", {
            required: "La descripcion es obligatoria",
          })}
        />
      </div>
      <div className="mb-2 space-y-2 flex-grow gap-2 md:gap-4 text-sm md:text-base">
        <label htmlFor="image" className="font-medium">
          Imagen de la descripcion
        </label>
        <input
          id="image_description"
          className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
            errors.image_description
              ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
              : ""
          }`}
          type="text"
          placeholder={
            errors.image_description
              ? errors.image_description.message
              : "URL de la imagen"
          }
          {...register("image_description", {
            required: "La URL de la imagen es obligatoria",
          })}
        />
      </div>
      <div className="mb-2 space-y-2">
        <p className="w-full mt-2 p-3 border border-neutral-300 rounded-lg bg-gray-50  text-sm md:text-base">
          {imageDescription ? imageDescription : "Carga una imagen"}
        </p>
      </div>
      <ImageUpload image={imageDescription} setImage={setImageDescription} />

      <div className="mb-2 space-y-2 text-sm md:text-base mt-6">
        <label htmlFor="features" className="font-medium">
          Caracteristicas
        </label>
        <textarea
          id="features"
          className={`w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
            errors.features
              ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
              : ""
          }`}
          placeholder={
            errors.features
              ? errors.features.message
              : "Caracteristicas de la actuacion urbanistica"
          }
          {...register("features", {
            required: "Las caracteristicas son obligatorias",
          })}
        />
      </div>
      <div className="mb-2 space-y-2 flex-grow gap-2 md:gap-4 text-sm md:text-base">
        <label htmlFor="image_features" className="font-medium">
          Imagen de las caracteristicas
        </label>
        <input
          id="image_features"
          className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
            errors.image_features
              ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
              : ""
          }`}
          type="text"
          placeholder={
            errors.image_features
              ? errors.image_features.message
              : "URL de la imagen"
          }
          {...register("image_features", {
            required: "La URL de la imagen es obligatoria",
          })}
        />
      </div>
      <div className="mb-2 space-y-2">
        <p className="w-full mt-2 p-3 border border-neutral-300 rounded-lg bg-gray-50  text-sm md:text-base">
          {imageFeatures ? imageFeatures : "Carga una imagen"}
        </p>
      </div>
      <ImageUpload image={imageFeatures} setImage={setImageFeatures} />

      <div className="mb-2 space-y-2 text-sm md:text-base mt-6">
        <label htmlFor="conflictivity" className="font-medium">
          Conflictividad
        </label>
        <textarea
          id="conflictivity"
          className={`w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
            errors.conflictivity
              ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
              : ""
          }`}
          placeholder={
            errors.conflictivity
              ? errors.conflictivity.message
              : "Descripcion de la conflictividad de la actuacion urbanistica"
          }
          {...register("conflictivity", {
            required: "Este campo es obligatorio",
          })}
        />
      </div>
      <div className="mb-2 space-y-2 flex-grow gap-2 md:gap-4 text-sm md:text-base">
        <label htmlFor="image_conflictivity" className="font-medium">
          Imagen de la conflictividad
        </label>
        <input
          id="image_conflictivity"
          className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
            errors.image_conflictivity
              ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
              : ""
          }`}
          type="text"
          placeholder={
            errors.image_conflictivity
              ? errors.image_conflictivity.message
              : "URL de la imagen"
          }
          {...register("image_conflictivity", {
            required: "La URL de la imagen es obligatoria",
          })}
        />
      </div>
      <div className="mb-2 space-y-2">
        <p className="w-full mt-2 p-3 border border-neutral-300 rounded-lg bg-gray-50  text-sm md:text-base">
          {imageConflictivity ? imageConflictivity : "Carga una imagen"}
        </p>
      </div>
      <ImageUpload
        image={imageConflictivity}
        setImage={setImageConflictivity}
      />
      <div className="mb-2 space-y-2 flex-grow text-sm md:text-base mt-6">
        <label htmlFor="spatialization" className="font-medium">
          Espacializacion
        </label>
        <input
          id="spatialization"
          className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
            errors.spatialization
              ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
              : ""
          }`}
          type="text"
          placeholder={
            errors.spatialization
              ? errors.spatialization.message
              : "URL de la espacializacion"
          }
          {...register("spatialization", {
            required: "La URL es obligatoria",
          })}
        />
      </div>
    </>
  );
}
