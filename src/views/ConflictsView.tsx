import LayoutConflictList from "../components/Conflicts/LayoutConflictList";
import Footer from "../components/Footer";

export default function ConflictsView() {
  return (
    <>
      <section className="layout__urban-planning-interventions md:mx-20 mx-4 mt-6 md:mt-0">
        <h2
          className="urban-planning-interventions__title text-3xl md:text-[4.5rem] capitalize text-septenary font-semibold md:mb-6"
          id="urban-planning-interventions__title-id"
        >
          Conflictos
        </h2>
        <p className="urban-planning-interventions__description text-base md:text-lg text-font-color">
          Listado de todos los conflictos asociados a una actuacion urbanistica
        </p>
        <LayoutConflictList />
      </section>
      <Footer />
    </>
  );
}
