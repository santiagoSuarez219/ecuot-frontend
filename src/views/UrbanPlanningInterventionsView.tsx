import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import CardUrbanPlanningIntervention from "../components/UrbanPlanningInterventions/CardUrbanPlanningIntervention";
import UrbanInterventionAddForm from "../components/UrbanPlanningInterventions/UrbanInterventionAddForm";
import DialogDeleteIntervention from "../components/UrbanPlanningInterventions/DialogDeleteIntervention";
import FilterForm from "../components/UrbanPlanningInterventions/FilterForm";
import CrudButton from "../components/CrudButton";
import Pagination from "../components/Pagination";

import { getInterventions } from "../api/InterventionAPI";
import { Intervention } from "../types";

export default function UrbanPlanningInterventions() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [interventionId, setInterventionId] = useState("");

  const [searchKeyWords, setSearchKeyWords] = useState("");
  const [searchByHierarchy, setSearchByHierarchy] = useState("");
  const [searchBySystem, setSearchBySystem] = useState("");

  const [filteredData, setFilteredData] = useState<Intervention[]>([]);

  const { data, isError, isLoading } = useQuery({
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

  const filterData = (data: Intervention[], type: string) => {
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
          intervention.internalSystem.toLocaleLowerCase() ===
          searchBySystem.toLocaleLowerCase()
      );
    }
    return filtered;
  };

  useEffect(() => {
    if (data) {
      let filterType = "";
      if (searchKeyWords) filterType += "BY_KEYWORDS";
      if (searchByHierarchy) filterType += "_BY_HIERARCHY";
      if (searchBySystem) filterType += "_BY_SYSTEM";
      setFilteredData(filterData(data, filterType));
    }
  }, [searchKeyWords, searchByHierarchy, searchBySystem, data]);

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

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <section className="layout__urban-planning-interventions mx-20">
      <h2
        className="urban-planning-interventions__title text-[4.5rem] capitalize text-primary font-semibold"
        id="urban-planning-interventions__title-id"
      >
        Actuaciones Urbanisticas
      </h2>
      <p className="urban-planning-interventions__description text-lg text-font-color">
        Listado de todas las actuaciones urbanisticas
      </p>
      <div className="my-6 grid grid-cols-3 gap-6">
        <CrudButton
          icon="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          text="Agregar"
          color="primary"
          route="newUrbanIntervention"
        />
        <div onClick={handleEdit}>
          <CrudButton
            icon="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            text="Editar"
            color="primary"
            route=""
          />
        </div>
        <div onClick={handleDelete}>
          <CrudButton
            icon="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            text="Eliminar"
            color="red"
            route=""
          />
        </div>
      </div>
      <FilterForm
        setSearchKeyWords={setSearchKeyWords}
        setSearchByHierarchy={setSearchByHierarchy}
        setSearchBySystem={setSearchBySystem}
      />
      <div className="urban-planning-interventions__list w-full mt-6 mb-12 grid grid-cols-1 gap-6">
        {filteredData.length ? (
          filteredData.map((intervention, index) => (
            <CardUrbanPlanningIntervention
              key={index}
              data={intervention}
              isEditing={isEditing}
              isDeleting={isDeleting}
              setInterventionId={setInterventionId}
            />
          ))
        ) : (
          <div className="w-full h-96 bg-red-200 rounded-lg flex flex-col justify-center items-center">
            <p className="text-xl font-medium">
              No hay actuaciones urbanisticas
            </p>
            <p>
              Pulse el boton agregar para empezar a añadir actuaciones
              urbanisticas
            </p>
          </div>
        )}
      </div>
      <Pagination />
      <UrbanInterventionAddForm />
      <DialogDeleteIntervention interventionId={interventionId} />
    </section>
  );
}
