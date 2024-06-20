import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InterventionFormData } from "../../types";

type InterventionFormProps = {
  register: UseFormRegister<InterventionFormData>;
  errors: FieldErrors<InterventionFormData>;
};

export default function FormIntervention({
  errors,
  register,
}: InterventionFormProps) {
  return (
    <>
      <div className="mb-5 space-y-3">
        <label htmlFor="interventionName" className="font-medium">
          Nombre de la actuacion urbanistica
        </label>
        <input
          id="interventionName"
          className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
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
      <div className="mb-5 space-y-3">
        <label htmlFor="description" className="font-medium">
          Descripción
        </label>
        <textarea
          id="description"
          className="w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          placeholder="Descripción de la actuacion urbanistica"
          {...register("description", {
            required:
              "La descripcion de la actuacion urbanistica es obligatoria",
          })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="mb-5 space-y-3">
        <label htmlFor="hierarchy" className="font-medium">
          Jerarquia
        </label>
        <select
          id="hierarchy"
          className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          {...register("hierarchy")}
        >
          <option value="Ciudad">Ciudad</option>
          <option value="Barrial Suburbano">Barrial Suburbano</option>
          <option value="Zona y Corregimental">Zona y Corregimental</option>
          <option value="Metropolitano y regional">
            Metropolitano y regional
          </option>
        </select>
      </div>
      <div className="mb-5 space-y-3">
        <label htmlFor="strategicProject" className="font-medium">
          Proyecto estrategico
        </label>
        <input
          id="strategicProject"
          className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          type="text"
          placeholder="Nombre del proyecto estrategico"
          {...register("strategicProject", {
            required:
              "El proyecto estrategico de la actuacion urbanistica es obligatorio",
          })}
        />
        {errors.strategicProject && (
          <span className="text-red-500 text-sm">
            {errors.strategicProject.message}
          </span>
        )}
      </div>
      <div className="mb-5 space-y-3">
        <label htmlFor="internalSystem" className="font-medium">
          Sistema interno al que pertenece
        </label>
        <input
          id="internalSystem"
          className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          type="text"
          placeholder="Nombre del sistema interno al que pertenece"
          {...register("internalSystem", {
            required:
              "El sistema interno de la actuacion urbanistica es obligatorio",
          })}
        />
        {errors.internalSystem && (
          <span className="text-red-500 text-sm">
            {errors.internalSystem.message}
          </span>
        )}
      </div>
      {/* <div className="mb-5 space-y-3">
    <label htmlFor="image" className="font-medium">
      Imagen
    </label>
    <input
      type="file"
      id="image"
      className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
    />
  </div> */}
    </>
  );
}
