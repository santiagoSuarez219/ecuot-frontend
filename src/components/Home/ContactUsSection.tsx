import contact_us from "../../assets/img/contactus.jpg";

export default function ContactUsSection() {
  return (
    <section className="layout__team-work mt-8 mb-8 mx-12 py-16 px-28 rounded-[60px] shadow-xl relative overflow-hidden flex gap-8 items-center">
      <figure className="w-1/2">
        <img
          src={contact_us}
          alt="contact_us"
          className="w-full h-full aspect-square object-cover"
        />
      </figure>
      <div className="w-1/2">
        <h2 className="teamwork__title text-[4.5rem] text-secondary font-semibold mb-8 bg-transparent z-10 relative">
          Contactanos!
        </h2>
        <p className="lg:text-lg lg:mt-8 mt-4 text-font-color">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla enim
          quaerat eaque dolor impedit delectus doloribus iusto facilis eum est
          ad deserunt debitis omnis ipsam, nisi, quo quae similique aperiam?
        </p>
        <div className="flex px-2 lg:px-6 mt-4 lg:mt-8 py-2 lg:py-4 shadow-md justify-between items-center rounded-md">
          <div className="flex gap-2 lg:gap-4 lg:w-4/5 items-center">
            <input
              type="text"
              placeholder="Correo Electronico"
              className="lg:text-lg w-full bg-transparent focus:outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="bg-primary px-4 py-2 rounded-lg text-white font-semibold text-lg hover:bg-secondary transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}
