import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LoginFormData } from "../../../types";

type LoginFormProps = {
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
};

export default function LoginForm({ errors, register }: LoginFormProps) {
  return (
    <>
      <div>
        <label htmlFor="user">Usuario</label>
        <input
          id="user"
          className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:outline-none focus:border focus:border-primary transition-colors"
          type="text"
          placeholder="johnDoe23"
          {...register("user", {
            required: "El usuario es obligatorio",
          })}
        />
        {errors.user && (
          <span className="text-red-500 text-sm">{errors.user.message}</span>
        )}
      </div>
      <div>
        <div className="flex justify-between items-center">
          <label htmlFor="userPassword">Contraseña</label>
        </div>
        <input
          id="userPassword"
          className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:outline-none focus:border focus:border-primary transition-colors"
          type="password"
          placeholder="********"
          {...register("userPassword", {
            required: "La contraseña es obligatoria",
          })}
        />
        {errors.userPassword && (
          <span className="text-red-500 text-sm">
            {errors.userPassword.message}
          </span>
        )}
      </div>
    </>
  );
}
