import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import DialogDeleteConflict from "../DialogDeleteConflict";
import { getConflicts } from "../../../api/ConflictAPI";
import { ConflictResponse } from "../../../types";
import CrudButtons from "../../CrudButtons";
import NoDataFound from "../../NoDataFound";
import CardConflict from "../CardConflict";
import { useEcuot } from "../../../ecuot";
import FilterForm from "../FilterForm";

export default function LayoutConflictList() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [conflict, setConflict] = useState<ConflictResponse>();

  const [searchKeyWords, setSearchKeyWords] = useState("");
  const [searchByIntervention, setSearchByIntervention] = useState("");
  const [searchByTimeStressOccurrence, setSearchByTimeStressOccurrence] =
    useState("");

  const [filteredData, setFilteredData] = useState<ConflictResponse[]>([]);

  const user = useEcuot((state) => state.user);

  const {
    data: conflicts,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["conflicts"],
    queryFn: getConflicts,
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setIsDeleting(false);
  };

  const handleDelete = () => {
    setIsDeleting(!isDeleting);
    setIsEditing(false);
  };

  const filterData = (data: ConflictResponse[], type: string) => {
    let filtered = data;
    if (type.includes("BY_KEYWORDS")) {
      filtered = filtered.filter(
        (conflict) =>
          conflict.conflictName
            .toLocaleLowerCase()
            .includes(searchKeyWords.toLocaleLowerCase()) ||
          conflict.description
            .toLocaleLowerCase()
            .includes(searchKeyWords.toLocaleLowerCase())
      );
    }
    if (type.includes("BY_INTERVENTION")) {
      filtered = filtered.filter(
        (conflict) =>
          conflict.intervention._id.toLocaleLowerCase() ===
          searchByIntervention.toLocaleLowerCase()
      );
    }
    if (type.includes("BY_TIME_STRESS_OCCURRENCE")) {
      filtered = filtered.filter(
        (conflict) =>
          conflict.timeStressOccurrence.toLocaleLowerCase() ===
          searchByTimeStressOccurrence.toLocaleLowerCase()
      );
    }
    return filtered;
  };

  useEffect(() => {
    if (conflicts) {
      let filterType = "";
      if (searchKeyWords) filterType += "BY_KEYWORDS";
      if (searchByIntervention) filterType += "BY_INTERVENTION";
      if (searchByTimeStressOccurrence)
        filterType += "BY_TIME_STRESS_OCCURRENCE";
      setFilteredData(filterData(conflicts, filterType));
    }
  }, [
    searchKeyWords,
    searchByIntervention,
    searchByTimeStressOccurrence,
    conflicts,
  ]);

  if (isLoading) {
    return (
      <div className="mx-20 animate-pulse shadow overflow-hidden mb-20 flex flex-col gap-6">
        <div className="w-full h-[136px] bg-slate-300 rounded-lg"></div>
        <div className="w-full h-[64px] bg-slate-300 rounded-lg"></div>
        <div className="w-full h-[139px] bg-slate-300 rounded-lg"></div>
        <div className="w-full h-[534px] bg-slate-300 rounded-lg"></div>
      </div>
    );
  }
  if (isError) return <p>Error al cargar los conflictos</p>;
  return (
    <>
      <CrudButtons
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        routeToNew={"/conflicts/new"}
        hasItems={conflicts?.length !== 0}
        user={user}
      />
      {conflicts?.length !== 0 && (
        <FilterForm
          setSearchKeyWords={setSearchKeyWords}
          setSearchByIntervention={setSearchByIntervention}
          setSearchByTimeStressOccurrence={setSearchByTimeStressOccurrence}
        />
      )}
      <div className="w-full mt-6 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredData?.length ? (
          filteredData.map((conflict) => (
            <CardConflict
              key={conflict._id}
              data={conflict}
              isEditing={isEditing}
              isDeleting={isDeleting}
              setConflict={setConflict}
            />
          ))
        ) : (
          <NoDataFound title="conflictos" />
        )}
      </div>
      <DialogDeleteConflict conflict={conflict} />
    </>
  );
}
