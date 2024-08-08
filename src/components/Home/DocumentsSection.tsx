import DocumentItem from "./DocumentItem";

// TODO: Incluir los documentos
export default function DocumentsSection() {
  return (
    <section
      className="layout__documents bg-senary mt-8 mb-8 mx-4 md:mx-12 md:py-16  md:px-28 md:rounded-[60px] rounded-2xl shadow-xl relative overflow-hidden md:mt-24"
      id="documents-section"
    >
      <h1 className="urban-interventions__title text-center text-4xl mt-6 md:text-[4.5rem] text-primary font-semibold mb-12">
        Documentos
      </h1>
      <div className="documents__list max-w-screen-lg mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
      </div>
    </section>
  );
}
