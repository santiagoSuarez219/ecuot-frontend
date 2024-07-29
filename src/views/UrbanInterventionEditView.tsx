import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import UrbanInterventionEdit from "../components/UrbanPlanningInterventions/UrbanInterventionEdit";
import { getInterventionsById } from "../api/InterventionAPI";

export default function UrbanInterventionEditView() {
  const params = useParams();
  const interventionId = params.interventionId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editIntervention", interventionId],
    queryFn: () => getInterventionsById(interventionId),
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error</p>;
  if (data)
    return (
      <UrbanInterventionEdit data={data} interventionId={interventionId} />
    );
}
