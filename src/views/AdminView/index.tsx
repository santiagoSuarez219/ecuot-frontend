import { Link } from "react-router-dom";

export default function AdminView() {
  return (
    <section className="w-full h-screen bg-gradient-to-r from-quaternary relative p-4 md:p-6 lg:py-12 lg:px-24">
      <h3 className="text-3xl md:text-5xl font-bold text-white text-left">
        Panel de administrador
      </h3>
      <p className="text-font-color mt-2 text-lg">
        Eliga una de las opciones del menu para continuar
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4 md:mt-4">
        <Link
          to="/"
          className="w-full px-4 md:px-6 aspect-square rounded-lg text-white bg-primary flex justify-center items-center text-xl text-center md:text-2xl font-bold hover:bg-secondary transition-all duration-300 ease-in-out cursor-pointer"
        >
          Ir al Inicio
        </Link>
        <Link
          to="/interventions"
          className="w-full px-4 md:px-6 aspect-square rounded-lg text-white bg-primary flex justify-center items-center text-xl text-center md:text-2xl font-bold hover:bg-secondary transition-all duration-300 ease-in-out cursor-pointer "
        >
          Actuaciones Urbanisticas
        </Link>
        <Link
          to="/news"
          className="w-full px-4 md:px-6 aspect-square rounded-lg text-white bg-primary flex justify-center items-center text-xl text-center md:text-2xl font-bold hover:bg-secondary transition-all duration-300 ease-in-out cursor-pointer "
        >
          Acontecimientos noticiosos
        </Link>
        <Link
          to="/conflicts"
          className="w-full px-4 md:px-6 aspect-square rounded-lg text-white bg-primary flex justify-center items-center text-xl text-center md:text-2xl font-bold hover:bg-secondary transition-all duration-300 ease-in-out cursor-pointer "
        >
          Conflictos
        </Link>
        <Link
          to="/users"
          className="w-full px-4 md:px-6 aspect-square rounded-lg text-white bg-primary flex justify-center items-center text-xl text-center md:text-2xl font-bold hover:bg-secondary transition-all duration-300 ease-in-out cursor-pointer "
        >
          Usuarios
        </Link>
      </div>
    </section>
  );
}
