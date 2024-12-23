import ShortCutItem from "./ShortCutItem";

export default function ShortCuts() {
  return (
    <section className="mt-4 md:mt-12">
      <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 md:mb-12 ">
        Ejes de consulta
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 px-4 lg:px-24">
        <ShortCutItem
          name="Actuaciones Urbanísticas"
          url_image="public-works"
          alt_image="public-works-image"
          color="bg-primary"
          route="/interventions"
        />
        <ShortCutItem
          name="Acontecimientos Noticiosos"
          url_image="news"
          alt_image="news-image"
          color="bg-quinary"
          route="/news"
        />
        <ShortCutItem
          name="Conflictos"
          url_image="conflict"
          alt_image="conflict-image"
          color="bg-septenary"
          route="/conflicts"
        />
      </div>
    </section>
  );
}
