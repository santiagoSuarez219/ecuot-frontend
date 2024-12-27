import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getInterventionDataSheetById } from "../../../api/InterventionAPI";

export default function Features() {
  const params = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-intervention-datasheet", params.datasheetId],
    queryFn: () =>
      getInterventionDataSheetById(
        params.datasheetId ? params.datasheetId : ""
      ),
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error</p>;
  if (data)
    return (
      <>
        <article className="lg:datasheet__content lg:w-[50%] p-4 lg:p-12 lg:overflow-auto bg-white">
          <h1 className="text-5xl font-semibold capitalize text-primary mb-6">
            Caracteristicas
          </h1>
          <p className="text-lg text-justify text-font-color whitespace-pre-line">
            {data?.features}
          </p>
        </article>
        <figure className="lg:w-[50%] relative bg-white pb-[76px] lg:pb-0">
          {data !== null && (
            <img
              src={data.image_features ? data.image_features : "/logo.avif"}
              alt={`image`}
              className="w-full h-full object-contain"
            />
          )}
        </figure>
      </>
    );
}
