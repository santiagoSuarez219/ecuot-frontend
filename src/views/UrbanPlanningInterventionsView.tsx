import LayoutInterventionList from "../components/UrbanPlanningInterventions/LayoutInterventionList";
import Footer from "../components/Footer";

export default function UrbanPlanningInterventions() {
  return (
    <>
      <section className="font-semibold">
        <h2 className="text-5xl capitalize text-white bg-primary  px-16 py-12">
          Actuaciones Urbanísticas
        </h2>
        <p className="text-base md:text-lg text-septenary px-24 pt-12">
          Expone las intervenciones físico-espaciales de la ciudad de Medellín
          diseñadas para transformar, producir o modificar el suelo urbano y
          rural que han generado conflictividad. Por ejemplo: Construcción del
          Metro de la 80, Construcción del Metroplús, etc.
        </p>
        <LayoutInterventionList />
      </section>
      <Footer />
    </>
  );
}
