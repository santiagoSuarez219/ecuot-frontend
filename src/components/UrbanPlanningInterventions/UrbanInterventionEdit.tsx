import { useNavigate } from "react-router-dom";
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
    <section className="w-full  flex flex-col pb-6 max-w-screen-lg mx-auto shadow-lg px-6">
      <div className="w-full flex flex-col px-4 md:px-0 py-4 md:py-0 ">
        <p className=" text-font-color md:mb-2 ">
          Llena el formulario para editar una actuacion urbanistica
        </p>
      </div>
      <form
        className="w-full  flex flex-col px-4 md:px-0"
        onSubmit={handleSubmit(handleForm)}
        noValidate
      >
        <div className="content__section w- overflow-y-auto pl-1 pr-6 mb-4">
          <FormIntervention
            register={register}
            errors={errors}
            setValue={setValue}
          />
        </div>
        <div className="pr-6">
          <input
            type="submit"
            value="Agregar Actuacion Urbanistica"
            className="w-full bg-primary py-3 text-white rounded cursor-pointer text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
          />
        </div>
      </form>
    </section>
  );
}
