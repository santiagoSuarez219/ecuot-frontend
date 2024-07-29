import LayoutNewsList from "../components/News/LayoutNewsList";
import Footer from "../components/Footer";

export default function NewsView() {
  return (
    <>
      <section className="layout__urban-planning-interventions md:mx-20 mx-4 mt-6 md:mt-0">
        <h2
          className="urban-planning-interventions__title text-3xl md:text-[4.5rem] capitalize text-primary font-semibold md:mb-6"
          id="urban-planning-interventions__title-id"
        >
          Acontecimientos noticiosos
        </h2>
        <p className="urban-planning-interventions__description text-base md:text-lg text-font-color">
          Listado de todos los acontecimientos noticiosos asociados a una
          actuacion urbanistica
        </p>
        <LayoutNewsList />
      </section>
      <Footer />
    </>
  );
}
