import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { UserFormData, UserItemList } from "../../types";

type NewUserFormProps = {
  register: UseFormRegister<UserFormData>;
  errors: FieldErrors<UserFormData>;
  watch: UseFormWatch<UserFormData>;
  user?: UserItemList;
};

export default function NewUserForm({
  errors,
  register,
  watch,
  user,
}: NewUserFormProps) {
  const password = watch("userPassword");
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
          <label htmlFor="userName" className="font-medium">
            Nombre
          </label>
          <input
            id="userName"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.userName
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="text"
            placeholder={errors.userName ? errors.userName.message : "John"}
            {...register("userName", {
              required: "Este campo es obligatorio",
            })}
          />
        </div>
        <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
          <label htmlFor="userLastName" className="font-medium">
            Apellido
          </label>
          <input
            id="userLastName"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.userLastName
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="text"
            placeholder={
              errors.userLastName ? errors.userLastName.message : "Doe"
            }
            {...register("userLastName", {
              required: "Este campo es obligatorio",
            })}
          />
        </div>
        <div className="mb-2 space-y-2 flex-grow">
          <label htmlFor="rol" className="font-medium">
            Rol
          </label>
          <select
            id="rol"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.rol ? "border-red-500 focus:ring-red-500 " : ""
            }`}
            {...register("rol", {
              required: "Este campo es obligatorio",
            })}
          >
            <option value="">Selecciona un rol</option>
            <option value="researcher">Investigador</option>
            <option value="assistant">Asistente</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
          <label htmlFor="user" className="font-medium">
            Usuario
          </label>
          <input
            id="user"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.user
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="text"
            placeholder={errors.user ? errors.user.message : "johnDoe2"}
            {...register("user", {
              required: "Este campo es obligatorio",
            })}
          />
        </div>
      </div>
      {!user && (
        <>
          <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
            <label htmlFor="userPassword" className="font-medium">
              Contraseña
            </label>
            <input
              id="userPassword"
              className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
                errors.userPassword
                  ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                  : ""
              }`}
              type="password"
              placeholder={
                errors.userPassword ? errors.userPassword.message : "********"
              }
              {...register("userPassword", {
                required: "Este campo es obligatorio",
              })}
            />
          </div>
          <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
            <label htmlFor="passwordConfirmation" className="font-medium">
              Confirmar contraseña
            </label>
            <input
              id="passwordConfirmation"
              className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
                errors.passwordConfirmation
                  ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                  : ""
              }`}
              type="password"
              placeholder={
                errors.passwordConfirmation
                  ? errors.passwordConfirmation.message
                  : "********"
              }
              {...register("passwordConfirmation", {
                required: "Este campo es obligatorio",
                validate: (value) =>
                  value === password || "Las contraseñas no coinciden",
              })}
            />
            {errors.passwordConfirmation && (
              <span className="text-red-500 text-sm">
                {errors.passwordConfirmation.message}
              </span>
            )}
          </div>
        </>
      )}
    </>
  );
}
