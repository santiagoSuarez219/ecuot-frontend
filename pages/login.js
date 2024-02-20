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
      <main className="w-full h-screen flex flex-col justify-center items-center mt-4 md:mt-0">
        <h1>Inicia sesión</h1>
        <form className="md:my-10 my-4 w-11/12 md:w-4/5 lg:w-2/5 bg-white shadow rounded-lg md:p-10 p-4">
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
        <nav className="lg:w-2/5 md:w-4/5 md:flex justify-between text-sm">
          <Link
            href="/"
            className="block text-center my-5 text-slate-500 uppercase"
          >
            Volver al inicio
          </Link>
          <Link
            href="/olvide-password"
            className="block text-center my-5 text-slate-500 uppercase"
          >
            Olvide mi contraseña
          </Link>
        </nav>
      </main>
    </Layout>
  );
}
