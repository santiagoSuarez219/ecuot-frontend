import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import FormInterventionDataSheet from "../../InterventionDataSheet/FormInterventionDataSheet";
import { Intervention, InterventionDataSheetFormData } from "../../../types";
import { createInterventionDataSheet } from "../../../api/InterventionAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type InterventionDataSheetAddProps = {
  data: Intervention;
};

export default function InterventionDataSheetAdd({
  data,
}: InterventionDataSheetAddProps) {
  const params = useParams();
  const navigate = useNavigate();
  const interventionId = params.interventionId!;
  const initialValues: InterventionDataSheetFormData = {
    description: "",
    image_description: "",
    features: "",
    image_features: "",
    conflictivity: "",
    image_conflictivity: "",
    spatialization: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createInterventionDataSheet,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-intervention"] });
      toast.success(data);
      navigate("/interventions");
      reset();
    },
  });

  const handleForm = (formData: InterventionDataSheetFormData) => {
    const data = {
      formData,
      interventionId,
    };
    mutate(data);
  };

  return (
    <section className="w-full flex justify-center items-center relative bg-septenary">
      <div
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white text-primary rounded-xl px-4 py-4 uppercase font-bold hover:bg-primary hover:text-white transition-all"
      >
        Volver
      </div>
      <div className="intervention__form w-full flex flex-col pb-4 max-w-screen-lg md:mx-auto rounded-2xl shadow-lg md:px-6 bg-white md:pt-4 md:overflow-y-auto md:my-6 ">
        <div className=" w-full flex flex-col px-4 md:px-0 py-4 md:py-0 ">
          <p className=" text-font-color md:mb-4">
            {`Llena el formulario para agregar una ficha tecnica a la actuacion urbanistica ${data.interventionName}`}
          </p>
        </div>
        <form
          className="w-full  flex flex-col px-4 md:px-0"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <div className="content__section w- overflow-y-auto pl-1 pr-6 mb-4">
            <FormInterventionDataSheet register={register} errors={errors} />
          </div>
          <div className="pr-6">
            <input
              type="submit"
              value="Agregar ficha tecnica"
              className="w-full bg-primary py-3 text-white rounded cursor-pointer md:text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
