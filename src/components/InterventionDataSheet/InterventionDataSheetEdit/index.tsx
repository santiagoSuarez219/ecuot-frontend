import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { updateInterventionDataSheet } from "../../../api/InterventionDataSheetAPI";
import FormInterventionDataSheet from "../FormInterventionDataSheet";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Intervention,
  InterventionDataSheet,
  InterventionDataSheetFormData,
} from "../../../types";

type InterventionDataSheetEditProps = {
  intervention: Intervention;
  datasheet: InterventionDataSheet;
};

export default function InterventionDataSheetEdti({
  intervention,
  datasheet,
}: InterventionDataSheetEditProps) {
  const params = useParams();
  const navigate = useNavigate();

  const interventionDataSheetId = params.datasheetId!;
  const interventionId = params.interventionId!;

  const initialValues: InterventionDataSheetFormData = {
    description: datasheet.description,
    image_description: datasheet.image_description,
    features: datasheet.features,
    image_features: datasheet.image_features,
    conflictivity: datasheet.conflictivity,
    image_conflictivity: datasheet.image_conflictivity,
    spatialization: datasheet.spatialization,
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateInterventionDataSheet,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-intervention"] });
      queryClient.invalidateQueries({
        queryKey: ["get-intervention-datasheet"],
      });

      toast.success(data);
      navigate(`/interventions/${interventionId}/datasheet`);
      reset();
    },
  });

  const handleForm = (formData: InterventionDataSheetFormData) => {
    const data = {
      formData,
      interventionDataSheetId,
    };
    mutate(data);
  };

  return (
    <section className="w-full flex justify-center items-center relative bg-septenary">
      <Link
        to={`/interventions/${interventionId}/datasheet`}
        className="absolute top-6 left-6 bg-white text-primary rounded-xl px-4 py-4 uppercase font-bold hover:bg-primary hover:text-white transition-all"
      >
        Volver
      </Link>
      <div className="intervention__form w-full flex flex-col pb-4 max-w-screen-lg md:mx-auto rounded-2xl shadow-lg md:px-6 bg-white md:pt-4 md:overflow-y-auto md:my-6 ">
        <div className=" w-full flex flex-col px-4 md:px-0 py-4 md:py-0 ">
          <p className=" text-font-color md:mb-4">
            {`Modifica los campos que quieres editar de la ficha técnica de ${intervention.interventionName}`}
          </p>
        </div>
        <form
          className="w-full  flex flex-col px-4 md:px-0"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <div className="overflow-y-auto pl-1 pr-6 mb-4">
            <FormInterventionDataSheet register={register} errors={errors} />
          </div>
          <div className="pr-6">
            <input
              type="submit"
              value="Editar ficha tecnica"
              className="w-full bg-primary py-3 text-white rounded cursor-pointer md:text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
