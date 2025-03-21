import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import DialogDeleteIntervention from "../DialogDeleteIntervention";
import { getInterventions } from "../../../api/InterventionAPI";
import CardIntervention from "../CardIntervention";
import { InterventionResponse } from "../../../types";
import CrudButtons from "../../CrudButtons";
import NoDataFound from "../../NoDataFound";
import { useEcuot } from "../../../ecuot";
import FilterForm from "../FilterForm";
import Loader from "../../Loader/Loader";

export default function LayoutInterventionList() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [interventionId, setInterventionId] = useState("");

  const [searchKeyWords, setSearchKeyWords] = useState("");
  const [searchByHierarchy, setSearchByHierarchy] = useState("");
  const [searchBySystem, setSearchBySystem] = useState("");

  const [filteredData, setFilteredData] = useState<InterventionResponse[]>([]);

  const user = useEcuot((state) => state.user);

  const {
    data: interventions,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["interventions"],
    queryFn: getInterventions,
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setIsDeleting(false);
  };

  const handleDelete = () => {
    setIsDeleting(!isDeleting);
    setIsEditing(false);
  };

  const filterData = (data: InterventionResponse[], type: string) => {
    let filtered = data;
    if (type.includes("BY_KEYWORDS")) {
      filtered = filtered.filter(
        (intervention) =>
          intervention.interventionName
            .toLocaleLowerCase()
            .includes(searchKeyWords.toLocaleLowerCase()) ||
          intervention.description
            .toLocaleLowerCase()
            .includes(searchKeyWords.toLocaleLowerCase())
      );
    }
    if (type.includes("BY_HIERARCHY")) {
      filtered = filtered.filter(
        (intervention) =>
          intervention.hierarchy.toLocaleLowerCase() ===
          searchByHierarchy.toLocaleLowerCase()
      );
    }
    if (type.includes("BY_SYSTEM")) {
      filtered = filtered.filter(
        (intervention) =>
          intervention.internalSystem.systemName.toLocaleLowerCase() ===
          searchBySystem.toLocaleLowerCase()
      );
    }
    return filtered;
  };

  useEffect(() => {
    if (interventions) {
      let filterType = "";
      if (searchKeyWords) filterType += "BY_KEYWORDS";
      if (searchByHierarchy) filterType += "_BY_HIERARCHY";
      if (searchBySystem) filterType += "_BY_SYSTEM";
      setFilteredData(filterData(interventions, filterType));
    }
  }, [searchKeyWords, searchByHierarchy, searchBySystem, interventions]);

  if (isLoading) return <Loader />;
  if (isError) return <p>Error al cargar las actuaciones urbanisticas</p>;
  return (
    <div className="px-4 xl:px-16">
      <CrudButtons
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        routeToNew={"/interventions/new"}
        hasItems={interventions?.length !== 0}
        user={user}
      />
      {interventions?.length !== 0 && (
        <FilterForm
          setSearchKeyWords={setSearchKeyWords}
          setSearchByHierarchy={setSearchByHierarchy}
          setSearchBySystem={setSearchBySystem}
        />
      )}

      {filteredData?.length ? (
        <div className="urban-planning-interventions__list w-full mt-6 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((intervention, index) => (
            <CardIntervention
              key={index}
              data={intervention}
              isEditing={isEditing}
              isDeleting={isDeleting}
              setInterventionId={setInterventionId}
            />
          ))}
        </div>
      ) : (
        <NoDataFound title="actuaciones urbanisticas" />
      )}

      <DialogDeleteIntervention interventionId={interventionId} />
    </div>
  );
}
