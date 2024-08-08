import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserFormData, UserItemList } from "../../../types";
import { updateUser } from "../../../api/UserAPI";
import NewUserForm from "../NewUserForm";

type EditUserProps = {
  user: UserItemList;
};

export default function EditUser({ user }: EditUserProps) {
  const navigate = useNavigate();
  const params = useParams();
  const initialValues: UserFormData = {
    userName: user.userName,
    userLastName: user.userLastName,
    rol: user.rol,
    user: user.user,
    userPassword: "",
    passwordConfirmation: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateUser,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({
        queryKey: ["get-user-by-id", params.userId],
      });
      toast.success(data);
      reset();
      window.scrollTo(0, 0);
      navigate("/users");
    },
  });

  const handleForm = (formData: UserFormData) => {
    if (!params.userId) return;
    const data = {
      formData: {
        userName: formData.userName,
        userLastName: formData.userLastName,
        user: formData.user,
        rol: formData.rol,
      },
      userId: params.userId,
    };
    mutate(data);
  };

  return (
    <section className="w-full h-screen overflow-auto flex justify-center items-center relative bg-gradient-to-r from-senary to-quaternary md:p-6 py-4 overflow-y-auto px-4">
      <Link
        to="/users"
        className="hidden md:block absolute top-6 left-6 bg-white text-primary rounded-xl px-4 py-4 uppercase font-bold hover:bg-primary hover:text-white transition-all"
      >
        Volver
      </Link>

      <div className="intervention__form w-full flex flex-col pb-4 max-w-screen-lg md:mx-auto rounded-2xl shadow-lg md:px-6 bg-white md:pt-4 md:overflow-y-auto md:my-6 ">
        <div className=" w-full flex flex-col px-4 md:px-0 py-4 md:py-0 ">
          <p className=" text-font-color md:mb-4">
            Edita los campos que quieres modificar
          </p>
        </div>
        <form
          className="w-full  flex flex-col px-4 md:px-0"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <div className="content__section overflow-y-auto pl-1 pr-6 mb-4">
            <NewUserForm
              register={register}
              errors={errors}
              watch={watch}
              user={user}
            />
          </div>
          <div className="pr-6">
            <input
              type="submit"
              value="Editar Usuario"
              className="w-full bg-primary py-3 text-white rounded cursor-pointer md:text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
