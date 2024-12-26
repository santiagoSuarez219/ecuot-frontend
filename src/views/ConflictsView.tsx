import LayoutConflictList from "../components/Conflicts/LayoutConflictList";
import Footer from "../components/Footer";

export default function ConflictsView() {
  return (
    <>
      <section className="font-semibold">
        <h2 className="text-5xl capitalize text-white bg-septenary  px-16 py-12">
          Conflictos
        </h2>
        <p className="text-base md:text-lg text-septenary px-24 pt-12">
          Presenta la expresión de malestar o inconformidad colectiva en el
          ámbito público frente a una actuación urbanística, que revela la
          tensión entre los diversos agentes implicados en dicha acción.
        </p>
        <LayoutConflictList />
      </section>
      <Footer />
    </>
  );
}
