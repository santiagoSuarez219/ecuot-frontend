import { Link } from "react-router-dom";

export default function ShortCuts() {
  return (
    <section className="layout__shorcuts mb-8 mx-4 md:mx-12 mt-8 md:px-28 md:mt-28">
      <div className="shorcuts__list mx-auto flex flex-wrap gap-6 md:gap-12 justify-center">
        <Link
          to={"/interventions"}
          className="shorcuts__item bg-primary relative w-full md:w-[30rem] h-56 rounded-xl shadow-xl cursor-pointer flex justify-center items-center hover:bg-secondary transition-colors px-4"
        >
          <h2 className="text-white font-semibold capitalize text-4xl text-center">
            Actuaciones Urbanisticas
          </h2>
        </Link>
        <Link
          to={"/news"}
          className="shorcuts__item bg-primary relative w-full md:w-[30rem] h-56 rounded-xl shadow-xl cursor-pointer flex justify-center items-center hover:bg-secondary transition-colors px-4"
        >
          <h2 className="text-white font-semibold capitalize text-4xl text-center">
            Acontecimientos noticiososos
          </h2>
        </Link>
        <Link
          to={"/conflicts"}
          className="shorcuts__item bg-primary relative w-full md:w-[30rem] h-56 rounded-xl shadow-xl cursor-pointer flex justify-center items-center hover:bg-secondary transition-colors px-4"
        >
          <h2 className="text-white font-semibold capitalize text-4xl text-center">
            Conflictos
          </h2>
        </Link>
      </div>
    </section>
  );
}
