import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getInterventionDataSheetById } from "../../../api/InterventionAPI";

export default function Spatialization() {
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
      <div className="w-full">
        <iframe
          src={data?.spatialization}
          width="100%"
          allow="geolocation"
          className="content_page w-full h-screen overflow-auto"
        ></iframe>
      </div>
    );
}
