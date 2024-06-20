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
  };

  const {
    register,
    handleSubmit,
    reset,
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
    <section className=" mx-20 flex">
      <div className="w-1/2">
        <h2 className="w-1/2 text-[4.5rem] capitalize text-primary font-semibold">
          Editar Actuacion Urbanistica
        </h2>
        <p className="text-lg text-font-color mb-8 ">
          Modifica los campos que quieres editar
        </p>
        <Link
          to="/interventions"
          className="bg-primary text-white p-4 rounded-lg text-lg cursor-pointer hover:bg-secondary transition-colors"
        >
          Volver
        </Link>
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit(handleForm)} noValidate>
          <FormIntervention register={register} errors={errors} />
          <input
            type="submit"
            value="Guardar Actuacion Urbanistica"
            className="w-full bg-primary mb-5 py-3 text-white rounded cursor-pointer text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
          />
        </form>
      </div>
    </section>
  );
}
