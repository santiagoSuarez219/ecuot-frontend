import { Link } from "react-router-dom";

import LayoutUsersList from "../components/Users/LayoutUsersList";
import CrudButton from "../components/CrudButton";
import { useEcuot } from "../ecuot";

export default function UserView() {
  const user = useEcuot((state) => state.user);

  if (!user || user.rol !== "researcher") {
    return (
      <div className="h-[calc(100vh-136px)] flex justify-center items-center">
        <div className="w-1/3 h-96 text-center flex flex-col gap-8 items-center justify-center rounded-xl border-2 border-red-700">
          <h2 className="text-3xl uppercase text-red-700">
            Acceso no autorizado
          </h2>
          <Link
            to={"/"}
            className="bg-primary px-4 py-2 rounded-lg text-white text-xl font-semibold hover:bg-secondary transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="h-screen p-4 lg:px-32 flex flex-col lg:flex-row lg:gap-12 lg:pt-24 bg-gradient-to-r from-quaternary to-senary relative">
        <Link
          to="/"
          className="md:w-1/2 bg-white text-primary rounded-xl px-4 py-4 uppercase font-bold hover:bg-primary hover:text-white transition-al lg:absolute lg:w-auto"
        >
          Volver
        </Link>
        <div className="">
          <h2 className="lg:mt-12 text-[4.5rem] capitalize text-white font-semibold">
            Usuarios
          </h2>
          <p className="text-lg text-white">
            Listado de todos los usuarios registrados en el sistema
          </p>
          <div className="my-6">
            <CrudButton
              icon="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              text="Agregar"
              route="/users/new"
            />
          </div>
        </div>
        <LayoutUsersList />
      </section>
    </>
  );
}
