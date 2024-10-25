import { useQuery } from "@tanstack/react-query";
import { getInterventions } from "../../api/InterventionAPI";

type FilterFormProps = {
  setSearchKeyWords: (value: string) => void;
  setSearchByIntervention: (value: string) => void;
};

export default function FilterForm({
  setSearchKeyWords,
  setSearchByIntervention,
}: FilterFormProps) {
  const {
    data: interventions,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["interventions"],
    queryFn: getInterventions,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Ha ocurrido un error</p>;
  if (interventions)
    return (
      <form className="urban-planning-interventions__form w-full mt-6 grid grid-cols-2 rounded-lg border shadow-sm items-center p-6 gap-6 justify-between">
        <div className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="search"
              className="text-2xl font-semibold text-quaternary"
            >
              Buscar
            </label>
            <p className="text-md text-font-color leading-tight">
              Filtrar por un nombre o una descripcion
            </p>
          </div>
          <input
            className="w-full rounded-md border px-3 py-2 text-md text-font-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-quinary"
            placeholder="Buscar por nombre o descripcion..."
            type="search"
            id="search"
            onChange={(event) => setSearchKeyWords(event.target.value)}
          />
        </div>
        <div className="space-y-4 ">
          <div className="space-y-1">
            <label
              htmlFor="intervention"
              className="text-2xl font-semibold text-quaternary"
            >
              Actuación urbanistica asociada
            </label>
            <p className="text-md text-font-color leading-tight">
              Filtrar por la actuación urbanistica asociada
            </p>
          </div>
          <select
            name="intervention"
            id="intervention"
            className="w-full rounded-md border px-3 py-2 text-md text-font-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-quinary"
            onChange={(event) => setSearchByIntervention(event.target.value)}
          >
            <option value=""> -- Seleccione -- </option>
            {interventions?.map((intervention) => (
              <option key={intervention._id} value={intervention._id}>
                {intervention.interventionName}
              </option>
            ))}
          </select>
        </div>
      </form>
    );
}
