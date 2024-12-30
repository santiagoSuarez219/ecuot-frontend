import { useNavigate } from "react-router-dom";
import { NewsResponse } from "../../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNews } from "../../../api/NewsAPI";
import { toast } from "react-toastify";
import ModalForm from "../../ModalForm";

type DialogDeleteNewsProps = {
  news?: NewsResponse;
};

export default function DialogDeleteNews({ news }: DialogDeleteNewsProps) {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteNews,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      toast.success(data);
      navigate("/news");
    },
  });

  const handleDelete = () => {
    if (!news) return;
    const data = {
      interventionId: news.intervention._id,
      newsId: news._id,
    };
    mutate(data);
  };

  return (
    <ModalForm
      title="Eliminar Acontecimiento Noticioso"
      description={`¿Estas seguro de eliminar el acontecimiento noticioso ${news?.newsName} ?`}
      showModalParam="deleteNews"
      route="/news"
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
          onClick={() => navigate("/news")}
        >
          Cancelar
        </button>
      </div>
    </ModalForm>
  );
}
