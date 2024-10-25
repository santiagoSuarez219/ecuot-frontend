import { useLocation, useNavigate } from "react-router-dom";
import { UserItemList } from "../../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserById } from "../../../api/UserAPI";
import { toast } from "react-toastify";
import ModalForm from "../../ModalForm";

type DialogUserDeleteProps = {
  user?: UserItemList;
};

export default function DialogUserDelete({ user }: DialogUserDeleteProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteUserById,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success(data);
      navigate(location.pathname, {
        replace: true,
      });
    },
  });

  const handleDelete = () => {
    if (user) {
      mutate(user._id);
    }
  };

  return (
    <ModalForm
      title="Eliminar Usuario"
      description={`¿Estas seguro de eliminar el usuario ${user?.user}?`}
      showModalParam="deleteUser"
      route="/users"
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
          onClick={() => navigate("/users")}
        >
          Cancelar
        </button>
      </div>
    </ModalForm>
  );
}
