import LayoutNewsList from "../components/News/LayoutNewsList";
import NewsModal from "../components/News/NewsModal/NewsModal";
import Footer from "../components/Footer";

export default function NewsView() {
  return (
    <>
      <section className="font-semibold">
        <h2 className="text-4xl lg:text-5xl capitalize text-white bg-quinary px-4 lg:px-16 py-8 lg:py-12">
          Noticias
        </h2>
        <p className="text-base md:text-lg text-septenary px-4 lg:px-24 pt-6 lg:pt-12">
          Resumen de los informes noticiosos que documentan los acontecimientos
          conflictivos en el ámbito público relacionados con cada actuación
          urbanística durante un periodo determinado. Se retoma como fuente de
          información el periódico El Colombiano
        </p>
        <LayoutNewsList />
      </section>
      <Footer />
      <NewsModal />
    </>
  );
}
