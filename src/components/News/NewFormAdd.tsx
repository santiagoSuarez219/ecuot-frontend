import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

import { getInterventions } from "../../api/InterventionAPI";
import { NewsFormData } from "../../types";
import Loader from "../Loader/Loader";

type NewFormAddProps = {
  register: UseFormRegister<NewsFormData>;
  errors: FieldErrors<NewsFormData>;
};

export default function NewFormAdd({ errors, register }: NewFormAddProps) {
  const {
    data: interventions,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["interventions"],
    queryFn: getInterventions,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Ha ocurrido un error</p>;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
          <label htmlFor="newsName" className="font-medium">
            Titular de la noticia
          </label>
          <input
            id="newsName"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.newsName
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="text"
            placeholder={
              errors.newsName
                ? errors.newsName.message
                : "Titular de la noticia"
            }
            {...register("newsName", {
              required: "Este campo es obligatorio",
            })}
          />
        </div>
        <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
          <label htmlFor="newsDate" className="font-medium">
            Fecha de la noticia
          </label>
          <input
            id="newsDate"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.newsDate
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="date"
            {...register("newsDate", {
              required: "Este campo es obligatorio",
            })}
          />
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
              : "Descripción de la noticia"
          }
          {...register("description", {
            required: "La descripcion es obligatoria",
          })}
        />
      </div>
      <div className="mb-2 space-y-2 flex-grow">
        <label htmlFor="intervention" className="font-medium">
          Actuación urbanística relacionada
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
          <option value="">Seleccione una opción</option>
          {interventions?.map((intervention) => (
            <option key={intervention._id} value={intervention._id}>
              {intervention.interventionName}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
