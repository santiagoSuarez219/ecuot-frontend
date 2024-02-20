import Link from "next/link";
import Layout from "../layout/Layout";

export default function OlvideContraseña() {
  return (
    <Layout
      title={"Login"}
      description={
        "Pagina para ingresar credenciales y habilitar otras opciones"
      }
    >
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-orange-500 font-black lg:text-6xl lg:w-2/5 text-5xl px-4 capitalize">
          Recupera tu contraseña
        </h1>
        <form className="lg:w-2/5 w-11/12 md:w-4/5 lg:my-10 my-12 bg-white shadow rounded-lg lg:p-10 p-4">
          <div className="my-5">
            <label
              htmlFor="email"
              className="uppercase text-gray-600 block text-xl font-bold "
            >
              Email
            </label>
            <input
              id="email"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="email"
              placeholder="Email de registro"
            />
          </div>

          <input
            type="submit"
            value={"Enviar instrucciones"}
            className="w-full bg-orange-500 mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-600 transition-colors"
          />
        </form>
        <Link
          href="/"
          className="block text-center my-5 text-slate-500 uppercase"
        >
          Volver al inicio
        </Link>
      </main>
    </Layout>
  );
}
