import { useNavigate } from "react-router-dom";
import { ConflictResponse } from "../../types";

export default function CardConflict({
  data,
  isEditing,
  isDeleting,
  setConflict,
}: {
  data: ConflictResponse;
  isEditing: boolean;
  isDeleting: boolean;
  setConflict: (conflict: ConflictResponse) => void;
}) {
  const navigate = useNavigate();
  return (
    <div className="urban-planning-interventions__item w-full flex rounded-xl overflow-hidden flex-col text-font-color border border-secondary cursor-pointer">
      <div className="flex gap-2 md:gap-4 h-full flex-col md:flex-row">
        <figure className="w-full md:w-[40%] relative aspect-square">
          <img
            src={data.image}
            alt={data.conflictName}
            className={`w-full h-full object-cover ${
              isEditing || isDeleting ? "opacity-40" : "opacity-100"
            } `}
          />
          <div
            className={`${
              isDeleting ? "flex" : "hidden"
            } w-full h-full justify-center items-center absolute top-0 cursor-pointer`}
            onClick={() => {
              setConflict(data);
              navigate("/conflicts/?deleteConflict=true");
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
              navigate(`/conflicts/${data._id}/edit`);
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
        <div className="w-full md:w-[60%] px-2 py-2">
          <h3 className="text-2xl md:text-4xl font-semibold text-primary mb-2">
            {data.conflictName}
          </h3>
          <p className="text-base md:text-lg">{data.description}</p>
          <p className="mt-4 text-primary font-medium text-lg">
            Actuacion urbanistica asociada
          </p>
          <p className="text-lg">{data.intervention.interventionName}</p>
          <p className="mt-4 text-primary font-medium text-lg">
            Momento en el que se presenta la tension
          </p>
          <p className="text-lg">{data.timeStressOccurrence}</p>
          <p className="mt-4 text-primary font-medium text-lg">
            Actores demandantes
          </p>
          <p className="text-lg">{data.actorsInvolved}</p>
        </div>
      </div>
      <input
        type="button"
        value="Ir a la actuacion urbanistica asociada"
        className="bg-primary text-white text-xl md:text-3xl font-semibold w-full py-2 cursor-pointer hover:bg-secondary transition-all self-end"
        onClick={() =>
          navigate(`/interventions/${data.intervention._id}/datasheet`)
        }
      />
    </div>
  );
}
