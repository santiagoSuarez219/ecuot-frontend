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
    <div className="mt-8 md:mt-12 text-tertiary-color font-semibold [&>p]:px-4 lg:[&>p]:px-64 [&>p]:text-septenary">
      <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 lg:mb-12 px-4 lg:px-0">
        Actuaciones Urbanísticas
      </h2>
      <p className="text-base md:text-lg lg:text-xl">
        Algunas intervenciones físico-espaciales de la ciudad de Medellín
        diseñadas para transformar, producir o modificar el suelo urbano y rural
        que han generado conflictividad. Por ejemplo: Construcción del Metro de
        la 80, Construcción del Metroplús, etc.
      </p>
      <p className="text-xl md:text-2xl my-4 lg:my-8">
        Visita algunas de las actuaciones urbanísticas principales.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 px-4 lg:px-56">
        {interventions?.map((intervention) => (
          <UrbanInterventionCard
            key={intervention._id}
            intervention={intervention}
          />
        ))}
      </div>
    </div>

    //   {interventions?.length ? (
    //     <div className="urban-interventions__list mx-auto flex flex-wrap justify-center md:gap-8 gap-6">
    //       {interventions.map((intervention) => (
    //         <UrbanInterventionCard
    //           key={intervention._id}
    //           intervention={intervention}
    //         />
    //       ))}
    //     </div>
    //   ) : (
    //     <div className="w-full h-96 border-2 border-primary rounded-lg flex flex-col justify-center items-center text-septenary">
    //       <p className="text-2xl md:text-[3rem] font-medium mb-4 md:mb-6">{`No hay Intervenciones`}</p>
    //       <p>{`Inicie sesion para empezar a añadir `}</p>
    //     </div>
    //   )}
    // </section>
  );
}
