import Link from "next/link";
import Layout from "../layout/Layout";

export default function Login() {
  return (
    <Layout
      title={"Login"}
      description={
        "Pagina para ingresar credenciales y habilitar otras opciones"
      }
    >
      <main className="mt-5 md:mt-20 w-full md:w-2/3 lg:w-2/5 mx-5">
        <div className="">
          <h1 className="text-orange-500 font-black text-6xl capitalize">
            Inicia sesión
          </h1>
          <form className="my-10 bg-white shadow rounded-lg p-10">
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
            <div className="my-5">
              <label
                htmlFor="password"
                className="uppercase text-gray-600 block text-xl font-bold "
              >
                Password
              </label>
              <input
                id="password"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                type="password"
                placeholder="Password de registro"
              />
            </div>
            <input
              type="submit"
              value={"Iniciar Sesion"}
              className="w-full bg-orange-500 mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-600 transition-colors"
            />
          </form>
          <nav className="lg:flex lg:justify-between">
            <Link
              href="/"
              className="block text-center my-5 text-slate-500 uppercase"
            >
              Volver al inicio
            </Link>
            <Link
              href="/"
              className="block text-center my-5 text-slate-500 uppercase text-sm"
            >
              Olvide mi contraseña
            </Link>
          </nav>
        </div>
      </main>
    </Layout>
  );
}
