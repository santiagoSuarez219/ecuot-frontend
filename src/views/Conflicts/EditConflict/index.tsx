import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import ConflictEdit from "../../../components/Conflicts/ConflictEdit";
import { getConflictById } from "../../../api/ConflictAPI";
import Loader from "../../../components/Loader/Loader";

export default function EditConflict() {
  const params = useParams();

  const {
    data: conflict,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["get-conflict", params.conflictId],
    queryFn: () => getConflictById(params.conflictId ? params.conflictId : ""),
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error</p>;
  if (conflict) return <ConflictEdit conflict={conflict} />;
}
