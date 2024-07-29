import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import FormIntervention from "./FormIntervention";

import { createIntervention } from "../../api/InterventionAPI";
import { InterventionFormData } from "../../types";
import ModalForm from "../ModalForm";

export default function UrbanInterventionAddForm() {
  const initialValues: InterventionFormData = {
    interventionName: "",
    description: "",
    hierarchy: "",
    strategicProject: "",
    internalSystem: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const navigate = useNavigate();
  const location = useLocation();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createIntervention,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["interventions"] });
      toast.success(data);
      reset();
      navigate(location.pathname, { replace: true });
    },
  });

  const handleForm = (formData: InterventionFormData) => mutate(formData);

  return (
    <ModalForm
      title="Nueva Actuacion Urbanistica"
      description="Llena el formulario y crea una actuacion urbanistica"
      showModalParam="newUrbanIntervention"
    >
      <form onSubmit={handleSubmit(handleForm)} noValidate>
        <FormIntervention register={register} errors={errors} />
        <input
          type="submit"
          value="Guardar Actuacion Urbanistica"
          className="w-full bg-primary mb-5 py-3 text-white rounded cursor-pointer text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
        />
      </form>
    </ModalForm>
  );
}
