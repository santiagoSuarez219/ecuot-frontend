import { Link, useNavigate } from "react-router-dom";
import { NewsFormData } from "../../../types";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNews } from "../../../api/NewsAPI";
import { toast } from "react-toastify";
import NewFormAdd from "../../../components/News/NewFormAdd";

export default function AddNews() {
  const navigate = useNavigate();
  const initialValues: NewsFormData = {
    newsName: "",
    description: "",
    newsDate: "",
    intervention: "",
    image: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createNews,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["conflicts"] });
      toast.success(data);
      navigate("/news");
      reset();
    },
  });

  const handleForm = (formData: NewsFormData) => {
    const data = {
      formData,
      idIntervention: formData.intervention,
    };
    mutate(data);
  };

  return (
    <section className="w-full h-screen overflow-auto flex relative bg-gradient-to-r from-senary to-quaternary py-4 overflow-y-auto px-4">
      <Link
        to="/news"
        className="hidden md:block absolute top-6 left-6 bg-white text-primary rounded-xl px-4 py-4 uppercase font-bold hover:bg-primary hover:text-white transition-all"
      >
        Volver
      </Link>
      <div className=" w-full h-max pb-4 max-w-screen-lg md:mx-auto rounded-2xl shadow-lg md:px-6 bg-white md:pt-4 md:overflow-y-auto md:my-6 ">
        <div className=" w-full flex flex-col px-4 md:px-0 py-4 md:py-0 ">
          <p className=" text-font-color md:mb-4">
            Llena el formulario para agregar un acontecimiento noticioso
          </p>
        </div>
        <form
          className="w-full  flex flex-col px-4 md:px-0"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <div className="content__section overflow-y-auto pl-1 pr-6 mb-4">
            <NewFormAdd register={register} errors={errors} />
          </div>
          <div className="pr-6">
            <input
              type="submit"
              value="Agregar Acontecimiento Noticioso"
              className="w-full bg-primary py-3 text-white rounded cursor-pointer md:text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
