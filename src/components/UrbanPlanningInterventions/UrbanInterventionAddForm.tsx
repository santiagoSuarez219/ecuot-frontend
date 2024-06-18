import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { createIntervention } from "../../api/InterventionAPI";
import { InterventionFormData } from "../../types";
import ModalForm from "../ModalForm";

export default function UrbanInterventionAddForm() {
  const initialValues: InterventionFormData = {
    interventionName: "",
    description: "",
    hierarchy: "",
    strategicProject: "",
    internalSystem: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const navigate = useNavigate();
  const location = useLocation();

  const handleForm = async (data: InterventionFormData) => {
    await createIntervention(data);
    toast.success("Actuacion urbanistica creada con exito");
    reset();
    navigate(location.pathname, { replace: true });
  };

  return (
    <ModalForm
      title="Nueva Actuacion Urbanistica"
      description="Llena el formulario y crea una actuacion urbanistica"
      showModalParam="newUrbanIntervention"
    >
      <form onSubmit={handleSubmit(handleForm)} noValidate>
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
            <option value="">Jerarquia 1</option>
            <option value="">Jerarquia 2</option>
            <option value="">Jerarquia 3</option>
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
        <input
          type="submit"
          value="Guardar Actuacion Urbanistica"
          className="w-full bg-primary mb-5 py-3 text-white rounded cursor-pointer text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
        />
      </form>
    </ModalForm>
  );
}
