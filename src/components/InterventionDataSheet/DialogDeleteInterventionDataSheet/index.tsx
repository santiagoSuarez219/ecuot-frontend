import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { deleteInterventionDataSheet } from "../../../api/InterventionDataSheetAPI";
import { Intervention } from "../../../types";
import ModalForm from "../../ModalForm";

type DialogDeleteInterventionDataSheetProps = {
  intervention: Intervention;
};

export default function DialogDeleteInterventionDataSheet({
  intervention,
}: DialogDeleteInterventionDataSheetProps) {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteInterventionDataSheet,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-intervention"] });
      queryClient.invalidateQueries({
        queryKey: ["get-intervention-datasheet"],
      });
      toast.success(data);
      navigate("/interventions");
    },
  });

  const handleDelete = () => {
    if (!intervention.datasheet) {
      return;
    }
    const data = {
      id: intervention.datasheet,
      interventionId: intervention._id,
    };
    mutate(data);
  };

  return (
    <ModalForm
      title={`Eliminar Ficha técnica de ${intervention.interventionName}`}
      description="¿Estas seguro de eliminar esta ficha tecnica?"
      showModalParam="deleteUrbanInterventionDataSheet"
    >
      <div className="flex justify-between gap-4 mt-8">
        <button
          className="w-full bg-red-700 py-3 text-white rounded cursor-pointer text-xl font-semibold hover:bg-red-500 transition-colors"
          onClick={handleDelete}
        >
          Eliminar
        </button>
        <button
          className="w-full border-2 border-primary py-3 text-font-color rounded cursor-pointer text-xl font-semibold hover:bg-primary hover:text-white transition-colors"
          onClick={() =>
            navigate(`/interventions/${intervention._id}/datasheet`)
          }
        >
          Cancelar
        </button>
      </div>
    </ModalForm>
  );
}
