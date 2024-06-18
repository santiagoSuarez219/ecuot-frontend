import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { NewsFormData } from "../../types";
import ModalForm from "../ModalForm";

export default function NewFormAdd() {
  const initialValues: NewsFormData = {
    newsName: "",
    description: "",
    associatedIntervention: "",
    newsDate: new Date(),
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const navigate = useNavigate();
  const location = useLocation();

  const handleForm = async (data: NewsFormData) => {
    console.log(data);
    toast.success("Acontecimiento noticioso creado con exito");
    reset();
    navigate(location.pathname, { replace: true });
  };

  return (
    <ModalForm
      title="Nuevo Acontecimiento Noticioso"
      description="Llena el formulario y crea un acontecimiento noticioso"
      showModalParam="newNews"
    >
      <form onSubmit={handleSubmit(handleForm)} noValidate>
        <div className="mb-5 space-y-3">
          <label htmlFor="newsName" className="font-medium">
            Nombre del acontecimiento noticioso
          </label>
          <input
            id="newsName"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            type="text"
            placeholder="Nombre del acontecimiento noticioso"
            {...register("newsName", {
              required: "El nombre del acontecimiento noticioso es obligatorio",
            })}
          />
          {errors.newsName && (
            <span className="text-red-500 text-sm">
              {errors.newsName.message}
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
            placeholder="Descripción del acontecimiento noticioso"
            {...register("description", {
              required:
                "La descripción del acontecimiento noticioso es obligatoria",
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
            id="associated-intervention"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            {...register("associatedIntervention")}
          >
            <option value="">Actuacion Urbanistica 1</option>
            <option value="">Actuacion Urbanistica 2</option>
            <option value="">Actuacion Urbanistica 3</option>
          </select>
        </div>
        <div className="mb-5 space-y-3">
          <label htmlFor="" className="font-medium">
            Fecha
          </label>
          <input
            id=""
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            type="date"
            {...register("newsDate")}
          />
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
