import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ModalForm from "../ModalForm";
import { deleteIntervention } from "../../api/InterventionAPI";

export default function DialogDeleteIntervention({
  interventionId,
}: {
  interventionId: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteIntervention,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["interventions"] });
      toast.success(data);
      navigate(location.pathname, {
        replace: true,
      });
    },
  });

  const handleDelete = () => mutate(interventionId);

  return (
    <ModalForm
      title="Eliminar Actuacion Urbanistica"
      description="¿Estas seguro de eliminar esta actuacion urbanistica?"
      showModalParam="deleteUrbanIntervention"
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
          onClick={() => navigate("/interventions")}
        >
          Cancelar
        </button>
      </div>
    </ModalForm>
  );
}
