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
        <article className="datasheet__content w-[50%] p-12 overflow-auto bg-white">
          <h1 className="text-5xl font-semibold capitalize text-primary mb-6">
            Caracteristicas
          </h1>
          <p className="text-lg text-justify text-font-color">
            {data?.features}
          </p>
        </article>
        <figure className="w-[50%] relative bg-white">
          {data !== null && (
            <img
              src={data.image_features ? data.image_features : "/logo.avif"}
              alt={`image`}
              className="w-full h-full object-cover aspect-square"
            />
          )}
        </figure>
      </>
    );
}
