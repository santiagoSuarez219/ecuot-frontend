import { Link } from "react-router-dom";

import { Intervention, InterventionDataSheetFormData } from "../../../types";
import { useForm } from "react-hook-form";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import FormInterventionDataSheet from "../../InterventionDataSheet/FormInterventionDataSheet";

type InterventionDataSheetAddProps = {
  data: Intervention;
};

export default function InterventionDataSheetAdd({
  data,
}: InterventionDataSheetAddProps) {
  // const navigate = useNavigate();
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
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  // const queryClient = useQueryClient();
  // const { mutate } = useMutation({
  //   mutationFn: createIntervention,
  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  //   onSuccess: (data) => {
  //     queryClient.invalidateQueries({ queryKey: ["interventions"] });
  //     toast.success(data);
  //     navigate("/interventions");
  //     reset();
  //   },
  // });

  const handleForm = (formData: InterventionDataSheetFormData) =>
    console.log(formData);

  return (
    <section className="w-full h-screen flex justify-center items-center relative bg-septenary">
      <Link
        to="/interventions"
        className="absolute top-6 left-6 bg-white text-primary rounded-xl px-4 py-4 uppercase font-bold hover:bg-primary hover:text-white transition-all"
      >
        Volver
      </Link>
      <div className=" flex flex-col pb-6 max-w-screen-lg mx-auto rounded-2xl shadow-lg px-6 bg-white pt-6">
        <div className="w-full flex flex-col px-4 md:px-0 py-4 md:py-0 ">
          <p className=" text-font-color md:mb-2 ">
            {`Llena el formulario para agregar una ficha tecnica a la actuacion urbanistica ${data.interventionName}`}
          </p>
        </div>
        <form
          className="w-full  flex flex-col px-4 md:px-0"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <div className="content__section w- overflow-y-auto pl-1 pr-6 mb-4">
            <FormInterventionDataSheet
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
      </div>
    </section>
  );
}
