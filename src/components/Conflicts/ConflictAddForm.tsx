import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { ConflictFormData } from "../../types";
import ModalForm from "../ModalForm";

export default function ConflictAddForm() {
  const initialValues: ConflictFormData = {
    conflictName: "",
    description: "",
    associatedIntervention: "",
    timeStressOccurrence: "",
    actorsInvolved: "",
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleForm = async (data: ConflictFormData) => {
    await console.log(data);
    toast.success("Conflicto creado con exito");
    reset();
    navigate(location.pathname, { replace: true });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  return (
    <ModalForm
      title="Nuevo Conflicto"
      description="Llena el formulario y crea un conflicto"
      showModalParam="newConflict"
    >
      <form onSubmit={handleSubmit(handleForm)} noValidate>
        <div className="mb-5 space-y-3">
          <label htmlFor="conflictName" className="font-medium">
            Nombre del conflicto
          </label>
          <input
            id="conflictName"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            type="text"
            placeholder="Nombre del conflicto"
            {...register("conflictName", {
              required: "El nombre del conflicto es obligatorio",
            })}
          />
          {errors.conflictName && (
            <span className="text-red-500 text-sm">
              {errors.conflictName.message}
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
            placeholder="Descripción del conflicto"
            {...register("description", {
              required: "La descripción del conflicto es obligatoria",
            })}
          />
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>
        <div className="mb-5 space-y-3">
          <label htmlFor="associated-intervention" className="font-medium">
            Actuacion urbanistica asociada
          </label>
          <select
            name=""
            id="associated-intervention"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          >
            <option value="">Actuacion Urbanistica 1</option>
            <option value="">Actuacion Urbanistica 2</option>
            <option value="">Actuacion Urbanistica 3</option>
          </select>
        </div>
        <div className="mb-5 space-y-3">
          <label htmlFor="time-stress-occurrence" className="font-medium">
            Momento en el que se presenta la tension
          </label>
          <select
            name=""
            id="time-stress-occurrence"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          >
            <option value="">Momento 1</option>
            <option value="">Momento 2</option>
            <option value="">Momento 3</option>
          </select>
        </div>
        <div className="mb-5 space-y-3">
          <label htmlFor="actors-involved-conflict" className="font-medium">
            Actores demandantes
          </label>
          <textarea
            id="actors-involved-conflict"
            className="w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            placeholder="Actores demandantes del conflicto"
            {...register("actorsInvolved", {
              required:
                "Los actores demandantes del conflicto son obligatorios",
            })}
          />
          {errors.actorsInvolved && (
            <span className="text-red-500 text-sm">
              {errors.actorsInvolved.message}
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
          value="Guardar conflicto"
          className="w-full bg-primary mb-5 py-3 text-white rounded cursor-pointer text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
        />
      </form>
    </ModalForm>
  );
}
