import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { InterventionFormData } from "../../../types";
import ImageUpload from "../../ImageUpload";
import { useState } from "react";

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

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mb-2 space-y-2 flex-grow">
          <label htmlFor="interventionName" className="font-medium">
            Nombre de la actuacion urbanistica
          </label>
          <input
            id="interventionName"
            className="w-full  mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            type="text"
            placeholder="Nombre de la actuacion urbanistica"
            {...register("interventionName", {
              required: "El nombre de la actuacion urbanistica es obligatorio",
            })}
          />
          {errors.interventionName && (
            <span className="text-red-500 text-sm">
              {errors.interventionName.message}
            </span>
          )}
        </div>
        <div className="mb-2 space-y-2 flex-grow">
          <label htmlFor="hierarchy" className="font-medium">
            Jerarquia
          </label>
          <select
            id="hierarchy"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
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
          {errors.hierarchy && (
            <span className="text-red-500 text-sm">
              {errors.hierarchy.message}
            </span>
          )}
        </div>
      </div>

      <div className="mb-2 space-y-2">
        <label htmlFor="description" className="font-medium">
          Descripción
        </label>
        <textarea
          id="description"
          className="w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          placeholder="Descripción de la actuacion urbanistica"
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

      <div className="flex flex-col md:flex-row gap-6">
        <div className="mb-2 space-y-2 flex-grow">
          <label htmlFor="strategicProject" className="font-medium">
            Proyecto estrategico
          </label>
          <input
            id="strategicProject"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            type="text"
            placeholder="Nombre del proyecto estrategico"
            {...register("strategicProject", {
              required: "El proyecto estrategico es obligatorio",
            })}
          />
          {errors.strategicProject && (
            <span className="text-red-500 text-sm">
              {errors.strategicProject.message}
            </span>
          )}
        </div>
        <div className="mb-2 space-y-2 flex-grow">
          <label htmlFor="internalSystem" className="font-medium">
            Sistema interno al que pertenece
          </label>
          <select
            id="internalSystem"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            {...register("internalSystem", {
              required: "El sistema interno es obligatorio",
            })}
          >
            <option value="">Seleccione un sistema interno</option>
            <option value="Sistema de Espacio Público, Parques, Plazas, Plazoletas y Zonas Verdes">
              Sistema de Espacio Público, Parques, Plazas, Plazoletas y Zonas
              Verdes
            </option>
            <option value="Sistema Movilidad">Sistema Movilidad</option>
            <option value="Sistema Vial y de Transporte">
              {" "}
              Sistema Vial y de Transporte
            </option>
            <option value="Sistema de Equipamientos">
              Sistema de Equipamientos
            </option>
            <option value="Sistema de Servicios Publicos">
              Sistema de Servicios Publicos
            </option>
            <option value="Sistema Habitacional">Sistema Habitacional</option>
            <option value="Asentamientos Humanos y Sistema Habitacional">
              Asentamientos Humanos y Sistema Habitacional
            </option>
            <option value="Sistema de Centralidades">
              Sistema de Centralidades
            </option>
            <option value="Sistema de Centralidades">
              Sistema de Patrimonio
            </option>
            <option value="No Aplica">No Aplica</option>
          </select>
          {errors.internalSystem && (
            <span className="text-red-500 text-sm">
              {errors.internalSystem.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-2 space-y-2 flex-grow">
        <label htmlFor="image" className="font-medium">
          Imagen
        </label>
        <input
          id="image"
          className="w-full  mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          type="text"
          placeholder="URL de la imagen"
          {...register("image", {
            required: "La URL de la imagen es obligatoria",
          })}
        />
        {errors.image && (
          <span className="text-red-500 text-sm">{errors.image.message}</span>
        )}
      </div>

      <div className="mb-2 space-y-2">
        <p className="w-full mt-2 p-3 border border-neutral-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors">
          {"Carga una imagen"}
        </p>
      </div>
      <ImageUpload image={image} setImage={setImage} />
      {errors.image && (
        <span className="text-red-500 text-sm">{errors.image.message}</span>
      )}
    </>
  );
}
