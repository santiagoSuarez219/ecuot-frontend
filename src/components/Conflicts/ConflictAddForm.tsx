import { useState } from "react";

import { FieldErrors, UseFormRegister } from "react-hook-form";

import { ConflictFormData, ConflictResponse } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { getInterventions } from "../../api/InterventionAPI";
import ImageUpload from "../ImageUpload";

type ConflictAddFormProps = {
  register: UseFormRegister<ConflictFormData>;
  errors: FieldErrors<ConflictFormData>;
  conflict?: ConflictResponse;
};

export default function ConflictAddForm({
  errors,
  register,
}: ConflictAddFormProps) {
  const [image, setImage] = useState<string>("");

  const {
    data: interventions,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["interventions"],
    queryFn: getInterventions,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Ha ocurrido un error</p>;
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
          <label htmlFor="conflictName" className="font-medium">
            Nombre del conflicto
          </label>
          <input
            id="conflictName"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.conflictName
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="text"
            placeholder={
              errors.conflictName
                ? errors.conflictName.message
                : "Nombre del conflicto"
            }
            {...register("conflictName", {
              required: "El nombre del conflicto es obligatorio",
            })}
          />
        </div>
        <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
          <label htmlFor="timeStressOccurrence" className="font-medium">
            Momento en el que se presenta
          </label>
          <select
            id="timeStressOccurrence"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.timeStressOccurrence
                ? "border-red-500 focus:ring-red-500 "
                : ""
            }`}
            {...register("timeStressOccurrence", {
              required: "Este campo es obligatorio",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Proyectado">Proyectado</option>
            <option value="Ejecución">Ejecución</option>
            <option value="Apropiación">Apropiación</option>
            <option value="Proyectado/Ejecución">Proyectado/Ejecución</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
      </div>

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
              : "Descripción de la actuacion urbanistica"
          }
          {...register("description", {
            required: "La descripcion es obligatoria",
          })}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm md:text-base">
        <div className="mb-2 space-y-2 flex-grow">
          <label htmlFor="actorsInvolved" className="font-medium">
            Actores demandantes
          </label>
          <input
            id="actorsInvolved"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.actorsInvolved
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="text"
            placeholder={
              errors.actorsInvolved
                ? errors.actorsInvolved.message
                : "Actores demandantes"
            }
            {...register("actorsInvolved", {
              required: "Este campo es obligatorio",
            })}
          />
        </div>
        <div className="mb-2 space-y-2 flex-grow">
          <label htmlFor="intervention" className="font-medium">
            Actuación urbanistica relacionada
          </label>
          <select
            id="intervention"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.intervention ? "border-red-500 focus:ring-red-500 " : ""
            }`}
            {...register("intervention", {
              required: "Este campo es obligatorio",
            })}
          >
            <option value=""> Seleccione una opcion </option>
            {interventions?.map((intervention) => (
              <option key={intervention._id} value={intervention._id}>
                {intervention.interventionName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-2 space-y-2 flex-grow gap-2 md:gap-4 text-sm md:text-base">
        <div className="flex justify-between">
          <label htmlFor="image" className="font-medium">
            Imagen
          </label>
          <a
            href="https://imgto.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary border-b border-primary"
          >
            Optimizador de imagenes
          </a>
        </div>
        <input
          id="image"
          className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors`}
          type="text"
          placeholder={"URL de la imagen"}
          {...register("image")}
        />
      </div>
      <div className="mb-2 space-y-2">
        <p className="w-full mt-2 p-3 border border-neutral-300 rounded-lg bg-gray-50  text-sm md:text-base">
          {image ? image : "Carga una imagen"}
        </p>
      </div>
      <ImageUpload image={image} setImage={setImage} />
    </>
  );
}
