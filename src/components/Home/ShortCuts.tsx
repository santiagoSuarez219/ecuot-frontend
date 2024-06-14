import intervention_logo from "../../assets/img/intervention_logo_2.jpg";
import news_logo from "../../assets/img/news_logo_2.jpg";
import conflicts_logo from "../../assets/img/conflict-icon.jpg";
import ShortCutItem from "./ShortCutItem";

export default function ShortCuts() {
  return (
    <section className="layout__shorcuts mt-8 mb-8 mx-12 py-16 px-28 ">
      <div className="shorcuts__list mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        <ShortCutItem title="Intervenciones urbanas" icon={intervention_logo} />
        <ShortCutItem title="Acontecimientos noticiososos" icon={news_logo} />
        <ShortCutItem title="Conflictos" icon={conflicts_logo} />
      </div>
    </section>
  );
}
