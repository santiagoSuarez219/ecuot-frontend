import Link from "next/link";
import Layout from "../../layout/Layout";

export default function RecuperarContraseña() {
  return (
    <Layout
      title={">Registrar"}
      description={
        "Si eres investigador puedes registrar usuario en el sistema ECUOT"
      }
    >
      <main className="mt-5 md:mt-20 w-full md:w-2/3 lg:w-2/5 mx-5">
        <h1 className="text-orange-500 font-black text-6xl capitalize">
          Reestablece tu contraseña
        </h1>
        <form className="my-10 bg-white shadow rounded-lg p-10">
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
              placeholder="Nueva contraseña"
            />
          </div>
          <input
            type="submit"
            value={"Reestablecer contraseña"}
            className="w-full bg-orange-500 mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-600 transition-colors"
          />
        </form>
      </main>
    </Layout>
  );
}
