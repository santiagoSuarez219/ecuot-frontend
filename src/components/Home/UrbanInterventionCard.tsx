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
      className="w-full h-[400px] lg:h-[460px] lg:rounded-3xl rounded-xl relative overflow-x-hidden cursor-pointer hover:scale-105 transition-all"
      onClick={handleClick}
    >
      <figure className="absolute inset-0">
        <img
          src={intervention.image ? intervention.image : "logo.avif"}
          alt={intervention.interventionName}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className={`absolute inset-0 bg-quinary opacity-60`}></div>
      <div className="relative z-10 pt-56 h-full text-white max-w-[380px] md:max-w-[280px] font-semibold flex items-end pb-12 lg:pb-16 px-4 lg:px-8">
        <h1 className="text-[1.79rem] leading-9">
          {intervention.interventionName}
        </h1>
      </div>
    </div>
  );
}
