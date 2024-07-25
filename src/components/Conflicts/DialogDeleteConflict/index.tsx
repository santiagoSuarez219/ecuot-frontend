import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { deleteConflict } from "../../../api/ConflictAPI";
import { ConflictResponse } from "../../../types";
import ModalForm from "../../ModalForm";

type DialogDeleteConflictProps = {
  conflict?: ConflictResponse;
};

export default function DialogDeleteConflict({
  conflict,
}: DialogDeleteConflictProps) {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteConflict,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["conflicts"] });
      toast.success(data);
      navigate("/conflicts");
    },
  });

  const handleDelete = () => {
    if (!conflict) return;
    const data = {
      interventionId: conflict.intervention._id,
      conflictId: conflict._id,
    };
    mutate(data);
  };

  return (
    <ModalForm
      title="Eliminar Conflicto"
      description={`¿Estas seguro de eliminar el conflicto ${conflict?.conflictName} ?`}
      showModalParam="deleteConflict"
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
          onClick={() => navigate("/conflicts")}
        >
          Cancelar
        </button>
      </div>
    </ModalForm>
  );
}
