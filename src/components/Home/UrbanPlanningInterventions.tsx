// import { dataInterventions } from "../../utils/UrbanPlanningInterventionsData";
import UrbanInterventionCard from "./UrbanInterventionCard";
import { Intervention } from "../../types";

type UrbanPlanningInterventionsProps = {
  interventions: Intervention[] | undefined;
};

export default function UrbanPlanningInterventions({
  interventions,
}: UrbanPlanningInterventionsProps) {
  return (
    <section className="layout__urban-interventions md:shadow-xl md:py-16 mt-6 md:mt-8 mx-4 md:mx-12 md:rounded-[60px] relative md:px-28">
      <h1 className="urban-interventions__title text-center text-4xl md:text-[4.5rem] text-secondary font-semibold md:mb-16 mb-6">
        Actuaciones Urbanisticas
      </h1>
      {interventions?.length ? (
        <div className="urban-interventions__list mx-auto flex flex-wrap justify-center md:gap-8 gap-6">
          {interventions.map((intervention) => (
            <UrbanInterventionCard
              key={intervention._id}
              title={intervention.interventionName}
              image={intervention.image}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-96 border-2 border-primary rounded-lg flex flex-col justify-center items-center text-septenary">
          <p className="text-2xl md:text-[3rem] font-medium mb-4 md:mb-6">{`No hay Intervenciones`}</p>
          <p>{`Inicie sesion para empezar a añadir `}</p>
        </div>
      )}
    </section>
  );
}
