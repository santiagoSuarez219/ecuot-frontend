import { data } from "../../utils/UrbanPlanningInterventionsData";
import UrbanInterventionCard from "./UrbanInterventionCard";

export default function UrbanPlanningInterventions() {
  return (
    <section className="layout__urban-interventions shadow-xl py-16 mt-8 mx-12 rounded-[60px] relative  px-28">
      <h1 className="urban-interventions__title text-center text-[4.5rem] text-secondary font-semibold mb-8">
        Actuaciones Urbanisticas
      </h1>
      <div className="urban-interventions__list mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <UrbanInterventionCard
            key={item.title}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
