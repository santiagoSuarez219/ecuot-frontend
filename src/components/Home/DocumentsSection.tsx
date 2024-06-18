import DocumentItem from "./DocumentItem";
import document_img from "../../assets/img/document.jpg";
import document_img_2 from "../../assets/img/document_2.jpg";

export default function DocumentsSection() {
  return (
    <section className="layout__documents mt-8 mb-8 mx-12 py-16 px-28 rounded-[60px] shadow-xl relative overflow-hidden">
      <h1 className="urban-interventions__title text-center text-[4.5rem] text-secondary font-semibold mb-8">
        Documentos
      </h1>
      <div className="documents__list max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
      </div>
      <figure>
        <img
          src={document_img}
          alt="document-img"
          className="document__image w-[38rem] absolute -bottom-8 -left-32"
        />
      </figure>
      <figure>
        <img
          src={document_img_2}
          alt="document-img"
          className="document__image w-[40rem] absolute -bottom-16 right-0"
        />
      </figure>
    </section>
  );
}
