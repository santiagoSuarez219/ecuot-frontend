import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { getNewsById } from "../../../api/NewsAPI";

const CompleteNews = () => {
  const params = useParams();
  const navigate = useNavigate();

  const {
    data: news,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["get-news-by-id", params.newsId],
    queryFn: () => getNewsById(params.newsId ? params.newsId : ""),
  });

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const handleDate = (date: string) => {
    const dateFormated = new Date(date);

    return `${dateFormated.getDate()} de ${
      months[dateFormated.getMonth()]
    } de ${dateFormated.getFullYear()}`;
  };

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error</p>;
  return (
    <>
      <article className="w-full lg:px-28 [&>p]:text-lg lg:[&>p]:text-xl [&>p]:px-4 lg:[&>p]:px-0 pb-4 lg:pb-28">
        <figure className="w-full md:h-[450px]">
          <img
            src={news?.image}
            alt={news?.newsName}
            className="w-full h-full object-cover"
          />
        </figure>
        <h2 className="mt-4 lg:mt-9 font-bold text-2xl md:text-3xl px-4 lg:px-0">
          {news?.newsName}
        </h2>
        <p className="mt-7">{news?.description}</p>
        <h3 className="mt-7 text-lg lg:text-xl font-bold px-4 lg:px-0">
          Fecha de la noticia:{" "}
        </h3>
        <p>{news ? handleDate(news?.newsDate) : "No hay fecha"}</p>
        <h3 className="mt-7 text-lg lg:text-xl font-bold px-4 lg:px-0">
          Actuación Urbanistica Asociada:{" "}
        </h3>
        <p>{news?.intervention.interventionName}</p>
        <div className="max-w-[420px]  flex flex-col md:flex-row px-4 lg:px-0 gap-4 text-lg mt-4 lg:mt-8 [&>input]:bg-primary [&>input]:rounded-md text-white font-semibold [&>input]:py-2 [&>input]:px-4 [&>input]:cursor-pointer">
          <input
            type="button"
            value="Ir actuacion urbanistica"
            className="flex-1 hover:scale-105 transition-all"
            onClick={() =>
              navigate(`/interventions/${news?.intervention._id}/datasheet`)
            }
          />
          <input
            type="button"
            value="Volver"
            className="flex-1 hover:scale-105 transition-all"
            onClick={() => navigate(-1)}
          />
        </div>
      </article>
    </>
  );
};

export default CompleteNews;
