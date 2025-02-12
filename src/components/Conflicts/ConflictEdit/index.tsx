import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ConflictFormData, ConflictResponse } from "../../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateConflict } from "../../../api/ConflictAPI";
import { toast } from "react-toastify";
import ConflictAddForm from "../ConflictAddForm";

type ConflictEditProps = {
  conflict: ConflictResponse;
};

export default function ConflictEdit({ conflict }: ConflictEditProps) {
  const navigate = useNavigate();
  const params = useParams();
  const initialValues: ConflictFormData = {
    conflictName: conflict.conflictName,
    description: conflict.description,
    timeStressOccurrence: conflict.timeStressOccurrence,
    actorsInvolved: conflict.actorsInvolved,
    intervention: conflict.intervention._id,
    image: conflict.image,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateConflict,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["conflicts"] });
      queryClient.invalidateQueries({
        queryKey: ["get-conflict", params.conflictId],
      });
      toast.success(data);
      reset();
      window.scrollTo(0, 0);
      navigate("/conflicts");
    },
  });

  const handleForm = (formData: ConflictFormData) => {
    if (!params.conflictId) return;

    const dataForm = {
      formData,
      conflictId: params.conflictId,
      interventionId: formData.intervention,
    };

    mutate(dataForm);
  };

  return (
    <section className="w-full h-screen overflow-auto flex relative bg-gradient-to-r from-senary to-quaternary py-4 overflow-y-auto px-4">
      <Link
        to="/conflicts"
        className="hidden md:block absolute top-6 left-6 bg-white text-primary rounded-xl px-4 py-4 uppercase font-bold hover:bg-primary hover:text-white transition-all"
      >
        Volver
      </Link>
      <div className="w-full h-max pb-4 max-w-screen-lg md:mx-auto rounded-2xl shadow-lg md:px-6 bg-white md:pt-4 md:overflow-y-auto md:my-6 ">
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
            <ConflictAddForm register={register} errors={errors} />
          </div>
          <div className="pr-6">
            <input
              type="submit"
              value="Editar Conflicto"
              className="w-full bg-primary py-3 text-white rounded cursor-pointer md:text-xl font-semibold hover:bg-secondary transition-colors md:col-span-2"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
