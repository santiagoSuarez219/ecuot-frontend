import { Link, useNavigate, useParams } from "react-router-dom";
import { NewsFormData, NewsResponse } from "../../../types";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNews } from "../../../api/NewsAPI";
import { toast } from "react-toastify";
import NewFormAdd from "../NewFormAdd";

type NewsEditProps = {
  news: NewsResponse;
};

export default function NewsEdit({ news }: NewsEditProps) {
  const navigate = useNavigate();
  const params = useParams();
  const initialValues: NewsFormData = {
    newsName: news.newsName,
    description: news.description,
    newsDate: new Date(news.newsDate).toISOString().split("T")[0],
    intervention: news.intervention._id,
    image: news.image,
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateNews,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      queryClient.invalidateQueries({
        queryKey: ["get-news-by-id", params.newsId],
      });
      toast.success(data);
      reset();
      window.scrollTo(0, 0);
      navigate("/news");
    },
  });

  const handleForm = (formData: NewsFormData) => {
    if (!params.newsId) return;

    const dataForm = {
      formData,
      newsId: params.newsId,
      interventionId: formData.intervention,
    };

    mutate(dataForm);
  };

  return (
    <section className="w-full h-screen overflow-auto flex relative bg-gradient-to-r from-senary to-quaternary py-4 overflow-y-auto px-4">
      <Link
        to="/news"
        className="hidden md:block absolute top-6 left-6 bg-white text-primary rounded-xl px-4 py-4 uppercase font-bold hover:bg-primary hover:text-white transition-all"
      >
        Volver
      </Link>
      <div className="intervention__form w-full flex flex-col pb-4 max-w-screen-lg md:mx-auto rounded-2xl shadow-lg md:px-6 bg-white md:pt-4 md:overflow-y-auto md:my-6 ">
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
            <NewFormAdd
              register={register}
              errors={errors}
              setValue={setValue}
              getValues={getValues}
              interventionId={initialValues.intervention}
            />
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
