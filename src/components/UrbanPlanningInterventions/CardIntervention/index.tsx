import { useNavigate } from "react-router-dom";
import { Intervention } from "../../../types";

export default function CardIntervention({
  data,
  isEditing,
  isDeleting,
  setInterventionId,
}: {
  data: Intervention;
  isEditing: boolean;
  isDeleting: boolean;
  setInterventionId: (id: string) => void;
}) {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-font-color-light rounded-lg p-6 flex flex-col gap-6">
      <figure className="w-full bg-white rounded-md aspect-square relative">
        <p
          className={`p-2 bg-primary text-white rounded-md absolute top-4 left-4 ${
            isEditing || isDeleting ? "opacity-40" : "opacity-100"
          }`}
        >
          {data.hierarchy}
        </p>
        <img
          src={data.image ? data.image : "logo.avif"}
          alt={data.interventionName}
          className={`w-full h-full object-cover ${
            isEditing || isDeleting ? "opacity-40" : "opacity-100"
          } `}
        />
        <div
          className={`${
            isDeleting ? "flex" : "hidden"
          } w-full h-full justify-center items-center absolute top-0 cursor-pointer`}
          onClick={() => {
            setInterventionId(data._id);
            navigate("/interventions/?deleteUrbanIntervention=true");
            window.scrollTo(0, 0);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-20 text-red-700 hover:scale-105 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
        <div
          className={`${
            isEditing ? "flex" : "hidden"
          } w-full h-full justify-center items-center absolute top-0 cursor-pointer`}
          onClick={() => {
            navigate(`/interventions/${data._id}/edit`);
            window.scrollTo(0, 0);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 text-font-color hover:scale-105 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </div>
      </figure>
      <div className="flex-grow flex flex-col gap-2">
        <h2 className="font-bold text-2xl text-primary">
          {data.interventionName}
        </h2>
        <p>{data.description}</p>
        <div>
          <p className="text-primary font-medium text-lg">
            Proyecto estrategico
          </p>
          <p>{data.strategicProject}</p>
        </div>
        <div>
          <p className="text-primary font-medium text-lg">Sistema interno</p>
          <p>{data.internalSystem}</p>
        </div>
      </div>
      <input
        type="button"
        value="Ir a la ficha tecnica"
        className="bg-primary text-white rounded-md text-lg font-semibold w-full py-2 cursor-pointer hover:bg-secondary transition-all"
        onClick={() => navigate(`/interventions/${data._id}/datasheet`)}
      />
    </div>
  );
}
