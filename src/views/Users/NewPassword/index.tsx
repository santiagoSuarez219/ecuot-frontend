import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import ChangePasswordForm from "../../../components/Users/ChangePasswordForm";
import {
  changePasswordRequest,
  getUserByIdRequest,
} from "../../../api/UserAPI";
import { ChangePasswordType } from "../../../types";
import Loader from "../../../components/Loader/Loader";

export default function NewPassword() {
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;

  const initialValues: ChangePasswordType = {
    userPassword: "",
    passwordConfirmation: "",
  };

  const {
    data: user,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["get-user-by-id", userId],
    queryFn: () => getUserByIdRequest(userId ? userId : ""),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: changePasswordRequest,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      navigate("/users");
      reset();
    },
  });

  const handleForm = (formData: ChangePasswordType) => {
    if (!userId) return;
    const data = {
      formData,
      userId: userId,
    };
    mutate(data);
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>Error...</p>;
  if (user)
    return (
      <div className="flex h-screen justify-center p-4 text-center bg-gradient-to-r from-senary to-quaternary">
        <Link
          to="/users"
          className="hidden md:block absolute top-6 left-6 bg-white text-primary rounded-xl px-4 py-4 uppercase font-bold hover:bg-primary hover:text-white transition-all"
        >
          Volver
        </Link>
        <div className="w-full h-max max-w-2xl overflow-hidden rounded-2xl align-middle shadow-xl p-6 bg-white mt-24">
          <h3 className="text-[3.5rem] font-bold  mt-5 mb-2 text-primary text-left">
            Cambiar contraseña
          </h3>
          <p className="text-font-color mb-5 text-left text-lg">
            {`Introduzca la nueva contraseña para el usuario ${user?.user}`}
          </p>
          <form
            className="my-4 w-full space-y-4 flex flex-col mx-auto text-start text-lg"
            onSubmit={handleSubmit(handleForm)}
          >
            <ChangePasswordForm
              register={register}
              errors={errors}
              watch={watch}
            />
            <input
              type="submit"
              value={"Cambiar contraseña"}
              className="w-full bg-primary mb-5 py-3 text-white text-xl rounded cursor-pointer hover:bg-secondary transition-colors"
            />
          </form>
        </div>
      </div>
    );
}
