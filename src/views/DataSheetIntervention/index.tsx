import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import NoInterventionDataSheet from "../../components/UrbanPlanningInterventions/NoInterventionDataSheet";
import { getInterventionsById } from "../../api/InterventionAPI";

export default function DataSheetIntervention() {
  const params = useParams();
  const interventionId = params.interventionId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-intervention", interventionId],
    queryFn: () => getInterventionsById(interventionId),
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error</p>;
  if (data) {
    if (data.datasheet === null) {
      return (
        <div className="layout__intervention-sheet w-full h-[calc(100vh-88px)] md:h-[calc(100vh-136px)] px-4 md:px-20 py-4 md:py-0 md:pb-12 flex gap-6 justify-center items-center">
          <div className="layout__intervention-sheet__content w-full md:w-[90%] md:h-[100%] rounded-2xl flex overflow-hidden bg-primary">
            <NoInterventionDataSheet
              interventionId={data._id}
              interventionName={data.interventionName}
            />
          </div>
        </div>
      );
    } else {
      return <h2>Datasheet</h2>;
      // <InterventionDataSheet intervention={data} />;
    }
  }
}
