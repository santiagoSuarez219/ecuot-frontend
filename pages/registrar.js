import Link from "next/link";
import Layout from "../layout/Layout";

export default function registrar() {
  return (
    <Layout
      title={">Registrar"}
      description={
        "Si eres investigador puedes registrar usuario en el sistema ECUOT"
      }
    >
      <main className="w-full md:w-2/3 lg:w-11/12 mx-5 lg:flex items-center">
        <h1 className="text-orange-500 font-black text-6xl capitalize lg:w-1/2">
          Crea usuarios para administrar{" "}
          <span className="text-slate-700">Ecuot</span>
        </h1>
        <div className="lg:w-1/2">
          <form className="bg-white shadow rounded-lg px-10 py-5">
            <div className="my-5">
              <label
                htmlFor="nombre"
                className="uppercase text-gray-600 block text-xl font-bold "
              >
                Nombre
              </label>
              <input
                id="nombre"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                type="email"
                placeholder="Nombre del usuario"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="email"
                className="uppercase text-gray-600 block text-xl font-bold "
              >
                Correo
              </label>
              <input
                id="email"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                type="email"
                placeholder="Email de registro"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="password"
                className="uppercase text-gray-600 block text-xl font-bold "
              >
                Contraseña
              </label>
              <input
                id="password"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                type="password"
                placeholder="Contraseña de registro"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="repetir-contraseña"
                className="uppercase text-gray-600 block text-xl font-bold "
              >
                Reperir contraseña
              </label>
              <input
                id="repetir-contraseña"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                type="password"
                placeholder="Repetir la contraseña"
              />
            </div>
            <input
              type="submit"
              value={"Crear cuenta"}
              className="w-full bg-orange-500 mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-600 transition-colors"
            />
          </form>
          <Link
            href="/"
            className="block text-center text-slate-500 uppercase mt-5"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    </Layout>
  );
}
