import DocumentItem from "./DocumentItem";

// TODO: Incluir los documentos
export default function DocumentsSection() {
  return (
    <section
      className="poster mt-8 lg:mt-12 px-4 lg:px-16"
      id="documents-section"
    >
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
          <h1 className="text-3xl md:text-4xl lg:text-6xl ">Documentos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 mt-4 lg:mt-14">
            <DocumentItem />
            <DocumentItem />
            <DocumentItem />
            <DocumentItem />
            <DocumentItem />
            <DocumentItem />
          </div>
        </div>
      </div>
    </section>
  );
}
