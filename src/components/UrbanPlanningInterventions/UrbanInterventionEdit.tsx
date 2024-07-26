import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Intervention, InterventionFormData } from "../../types";
import FormIntervention from "./FormIntervention";
import { updateIntervention } from "../../api/InterventionAPI";

type UrbanInterventionEditProps = {
  data: InterventionFormData;
  interventionId: Intervention["_id"];
};

export default function UrbanInterventionEdit({
  data,
  interventionId,
}: UrbanInterventionEditProps) {
  const navigate = useNavigate();
  const initialValues: InterventionFormData = {
    interventionName: data.interventionName,
    description: data.description,
    hierarchy: data.hierarchy,
    strategicProject: data.strategicProject,
    internalSystem: data.internalSystem,
    image: data.image,
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateIntervention,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["interventions"] });
      queryClient.invalidateQueries({
        queryKey: ["editIntervention", interventionId],
      });
      toast.success(data);
      reset();
      window.scrollTo(0, 0);
      navigate("/interventions");
    },
  });

  const handleForm = (formData: InterventionFormData) => {
    const data = {
      formData,
      interventionId,
    };
    mutate(data);
  };

  return (
    <section className="w-full md:h-screen flex justify-center items-center relative bg-gradient-to-r from-senary to-quaternary md:p-6 py-4 overflow-y-auto px-4">
      <Link
        to="/interventions"
        className="hidden md:block absolute top-6 left-6 bg-white text-primary rounded-xl px-4 py-4 uppercase font-bold hover:bg-primary hover:text-white transition-all"
      >
        Volver
      </Link>
      <div className="intervention__form w-full flex flex-col pb-4 max-w-screen-lg md:mx-auto rounded-2xl shadow-lg md:px-6 bg-white md:pt-4 md:overflow-y-auto md:my-6 ">
        <div className=" w-full flex flex-col px-4 md:px-0 py-4 md:py-0 ">
          <p className=" text-font-color md:mb-4">
            Modifica los campos que desees de la actuacion urbanistica
          </p>
        </div>
        <form
          className="w-full  flex flex-col px-4 md:px-0"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <div className="content__section overflow-y-auto pl-1 pr-6 mb-4">
            <FormIntervention
              register={register}
              errors={errors}
              setValue={setValue}
            />
          </div>
          <div className="pr-6">
            <input
              type="submit"
              value="Editar Actuacion Urbanistica"
              className="w-full bg-primary py-3 text-white rounded cursor-pointer md:text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
