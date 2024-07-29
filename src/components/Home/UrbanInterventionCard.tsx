import { useNavigate } from "react-router-dom";
import { Intervention } from "../../types";

type UrbanInterventionCardProps = {
  intervention: Intervention;
};

export default function UrbanInterventionCard({
  intervention,
}: UrbanInterventionCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/interventions/${intervention._id}/datasheet`);
  };

  return (
    <div
      className="urban-interventions__item w-full md:w-[20rem] h-[25rem] rounded-xl cursor-pointer hover:scale-105 transition-all bg-secondary border-2 border-primary"
      onClick={handleClick}
    >
      <figure className="item__image-container w-full h-[100%] rounded-xl relative bg-white">
        <img
          src={intervention.image ? intervention.image : "logo.avif"}
          alt={intervention.interventionName}
          className="item__image rounded-xl object-cover h-full w-full aspect-square"
        />
        <h2 className="item__title absolute left-6 right-6 bottom-6 px-4 py-2 rounded-xl text-xl lg:text-2xl bg-secondary font-semibold ">
          {intervention.interventionName}
        </h2>
      </figure>
    </div>
  );
}
