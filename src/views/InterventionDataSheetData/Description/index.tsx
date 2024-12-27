import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import {
  getInterventionDataSheetById,
  getInterventionsById,
} from "../../../api/InterventionAPI";

export default function Description() {
  const params = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-intervention-datasheet", params.datasheetId],
    queryFn: () =>
      getInterventionDataSheetById(
        params.datasheetId ? params.datasheetId : ""
      ),
  });

  const {
    data: intervention,
    isError: isErrorIntervention,
    isLoading: isLoadingIntervention,
  } = useQuery({
    queryKey: ["get-intervention", params.interventionId],
    queryFn: () =>
      getInterventionsById(params.interventionId ? params.interventionId : ""),
  });

  if (isLoading || isLoadingIntervention) return <p>Cargando...</p>;
  if (isError || isErrorIntervention) return <p>Error</p>;
  if (data)
    return (
      <>
        <article className="lg:datasheet__content lg:w-[50%] p-4 lg:p-12 lg:overflow-auto bg-white">
          <h1 className="text-5xl font-semibold capitalize text-primary mb-6">
            {intervention?.interventionName}
          </h1>
          <p className="text-lg text-justify text-font-color whitespace-pre-line">
            {data.description}
          </p>
        </article>
        <figure className="lg:w-[50%] relative bg-white pb-[76px] lg:pb-0">
          <img
            src={data.image_description ? data.image_description : "/logo.avif"}
            alt={`image`}
            className="w-full h-full object-contain"
          />
        </figure>
      </>
    );
}
