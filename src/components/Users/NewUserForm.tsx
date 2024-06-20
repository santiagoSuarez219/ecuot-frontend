import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { UserFormData } from "../../types";
import ModalForm from "../ModalForm";

export default function NewUserForm() {
  const initialValues: UserFormData = {
    userName: "",
    userLastName: "",
    userEmail: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const navigate = useNavigate();
  const location = useLocation();

  const handleForm = async (data: UserFormData) => {
    console.log(data);
    toast.success("Usuario creado con exito");
    reset();
    navigate(location.pathname, { replace: true });
  };

  return (
    <ModalForm
      title="Nuevo Usuario"
      description="Llena el formulario y crea un nuevo usuario"
      showModalParam="newUser"
    >
      <form onSubmit={handleSubmit(handleForm)} noValidate>
        <div className="mb-5 space-y-3">
          <label htmlFor="userName" className="font-medium">
            Nombre
          </label>
          <input
            id="userName"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            type="text"
            placeholder="John"
            {...register("userName", {
              required: "El nombre del usuario es obligatorio",
            })}
          />
          {errors.userName && (
            <span className="text-red-500 text-sm">
              {errors.userName.message}
            </span>
          )}
        </div>
        <div className="mb-5 space-y-3">
          <label htmlFor="userLastName" className="font-medium">
            Apellido
          </label>
          <input
            id="userLastName"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            type="text"
            placeholder="Doe"
            {...register("userLastName", {
              required: "El apellido del usuario es obligatorio",
            })}
          />
          {errors.userLastName && (
            <span className="text-red-500 text-sm">
              {errors.userLastName.message}
            </span>
          )}
        </div>
        <div className="mb-5 space-y-3">
          <label htmlFor="userLastName" className="font-medium">
            Correo electronico
          </label>
          <input
            id="userEmail"
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            type="email"
            placeholder="johndoe@correo.com"
            {...register("userEmail", {
              required: "El correo electronico del usuario es obligatorio",
            })}
          />
          {errors.userEmail && (
            <span className="text-red-500 text-sm">
              {errors.userEmail.message}
            </span>
          )}
        </div>
        <div className="mb-5 space-y-3">
          <label htmlFor="" className="font-medium">
            Rol
          </label>
          <select
            id=""
            className="w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
          >
            <option value="">Auxiliar</option>
            <option value="">Investigador</option>
          </select>
        </div>
        <input
          type="submit"
          value="Registrar Usuario"
          className="w-full bg-primary mb-5 py-3 text-white rounded cursor-pointer text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
        />
      </form>
    </ModalForm>
  );
}
