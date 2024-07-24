import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import {
  getInterventionDataSheetById,
  getInterventionsById,
} from "../../api/InterventionAPI";
import InterventionDataSheetEdit from "../../components/InterventionDataSheet/InterventionDataSheetEdit";

export default function EditInterventionDataSheet() {
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
      <InterventionDataSheetEdit intervention={intervention} datasheet={data} />
    );
}
