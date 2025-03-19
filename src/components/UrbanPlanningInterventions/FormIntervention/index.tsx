import { useState } from "react";

import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { InterventionFormData } from "../../../types";
import ImageUpload from "../../ImageUpload";
import { getSystems } from "../../../api/SystemAPI";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader/Loader";

type FormInterventionProps = {
  register: UseFormRegister<InterventionFormData>;
  errors: FieldErrors<InterventionFormData>;
  setValue: UseFormSetValue<InterventionFormData>;
  intervention?: InterventionFormData;
};

export default function FormIntervention({
  errors,
  register,
}: FormInterventionProps) {
  const [image, setImage] = useState<string>("");

  const {
    data: systems,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["systems"],
    queryFn: getSystems,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Ha ocurrido un error</p>;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="mb-2 space-y-1 flex-grow text-sm md:text-base">
          <label htmlFor="interventionName" className="font-medium">
            Nombre de la actuacion urbanistica
          </label>
          <input
            id="interventionName"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.interventionName
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="text"
            placeholder={
              errors.interventionName
                ? errors.interventionName.message
                : "Nombre de la actuacion urbanistica"
            }
            {...register("interventionName", {
              required: "El nombre de la actuacion urbanistica es obligatorio",
            })}
          />
        </div>
        <div className="mb-2 space-y-1 flex-grow text-sm md:text-base">
          <label htmlFor="hierarchy" className="font-medium">
            Jerarquia
          </label>
          <select
            id="hierarchy"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.hierarchy ? "border-red-500 focus:ring-red-500 " : ""
            }`}
            {...register("hierarchy", {
              required: "La jerarquia es obligatoria",
            })}
          >
            <option value="">Seleccione una jerarquia</option>
            <option value="Ciudad">Ciudad</option>
            <option value="Barrial y Suburbano">Barrial y Suburbano</option>
            <option value="Metropolitano y Regional">
              Metropolitano y Regional
            </option>
            <option value="Zonal y Corregimental">Zonal y Corregimental</option>
          </select>
        </div>
      </div>

      <div className="mb-2 space-y-1 text-sm md:text-base">
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
        <div className="mb-2 space-y-1 flex-grow">
          <label htmlFor="strategicProject" className="font-medium">
            Proyecto estrategico
          </label>
          <input
            id="strategicProject"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.strategicProject
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="text"
            placeholder={
              errors.strategicProject
                ? errors.strategicProject.message
                : "Nombre del proyecto estrategico"
            }
            {...register("strategicProject", {
              required: "El proyecto estrategico es obligatorio",
            })}
          />
        </div>
        <div className="mb-2 space-y-1 flex-grow">
          <label htmlFor="internalSystem" className="font-medium">
            Sistema interno al que pertenece
          </label>
          <select
            id="internalSystem"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.internalSystem ? "border-red-500 focus:ring-red-500 " : ""
            }`}
            {...register("internalSystem", {
              required: "El sistema interno es obligatorio",
            })}
          >
            <option value="">Seleccione una opción</option>
            {systems?.map((system) => (
              <option key={system._id} value={system._id}>
                {system.systemName}
              </option>
            ))}
            {/* <option value="">Seleccione un sistema interno</option>
            <option
              value="Sistema de Espacio Público de esparcimiento y
encuentro"
            >
              Sistema de Espacio Público de esparcimiento y encuentro
            </option>
            <option
              value="Sistema de Movilidad (vías, caminos, ciclorutas,
transporte)"
            >
              Sistema de Movilidad (vías, caminos, ciclorutas, transporte)
            </option>
            <option value="Sistema de Equipamientos">
              Sistema de Equipamientos
            </option>
            <option
              value="Sistema de Servicios Públicos (domiciliarios y no
domiciliarios)"
            >
              Sistema de Servicios Públicos (domiciliarios y no domiciliarios)
            </option>
            <option value="Sistema Habitacional">Sistema Habitacional</option>
            <option value="Sistema de Centralidades">
              Sistema de Centralidades
            </option>
            <option value="Sistema de Patrimonio Cultural Inmueble">
              Sistema de Patrimonio Cultural Inmueble
            </option> */}
          </select>
        </div>
      </div>
      <div className="mb-2 space-y-1 flex-grow gap-2 md:gap-4 text-sm md:text-base">
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
          className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
            errors.image
              ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
              : ""
          }`}
          type="text"
          placeholder={errors.image ? errors.image.message : "URL de la imagen"}
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
