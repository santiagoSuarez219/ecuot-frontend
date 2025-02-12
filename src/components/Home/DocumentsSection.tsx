import DocumentItem from "./DocumentItem";

export default function DocumentsSection() {
  const documents = [
    {
      title: "Proyecto de investigación",
      link: "../../../public/pdf/Proyecto Investigación.pdf",
    },
    {
      title: "Ecuot",
      link: "../../../public/pdf/Ecuot.pdf",
    },
    {
      title: "Caracterización de acciones urbanísticas",
      link: "../../../public/pdf/Caracterizacion Acciones urbanisticas.pdf",
    },
    {
      title: "Tendencias de la conflictividad",
      link: "../../../public/pdf/Tendencias Conflictividad.pdf",
    },
  ];

  return (
    <section className="poster mt-12 px-4 lg:px-16" id="documents-section">
      <div className="w-full h-full relative rounded-2xl md:rounded-3xl lg:rounded-[80px] overflow-hidden p-4 lg:p-0">
        <figure className="hidden md:block absolute inset-0">
          <img
            src="main-poster.avif"
            alt="main-poster"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="absolute inset-0 bg-quinary opacity-90"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white font-semibold">
          <h1 className="text-6xl ">Documentos</h1>
          <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10 mt-8 lg:mt-14 lg:px-8 xl:px-0">
            {documents.map((document, index) => (
              <DocumentItem
                key={index}
                title={document.title}
                link={document.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
