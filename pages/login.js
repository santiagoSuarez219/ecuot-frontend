import Link from "next/link";
import Layout from "../layout/Layout";

export default function Login() {
  return (
    <Layout title={"Login"} description={"Inicia sesión en ECUOT"}>
      <main className="w-full h-[calc(100vh-96px)] flex flex-col justify-center items-center md:mt-0 p-4">
        <div className="space-y-2 text-center max-w-sm">
          <h1 className="text-3xl font-bold">Inicia sesión</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Introduzca su dirección de correo electrónico para acceder a su
            cuenta
          </p>
        </div>
        <form className="my-4 w-full max-w-sm space-y-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              type="email"
              placeholder="m@example.com"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="password">Password</label>
              <p className="underline underline-offset-1 text-sm cursor-pointer">
                Olvidaste tu contraseña
              </p>
            </div>
            <input
              id="password"
              className="w-full mt-2 p-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              type="password"
              placeholder="Password de registro"
            />
          </div>
          <input
            type="submit"
            value={"Iniciar Sesion"}
            className="w-full bg-black mb-5 py-3 text-white rounded cursor-pointer hover:bg-black/90 transition-colors"
          />
        </form>

        {/* <div className="mt-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <label htmlFor="password">Password</label>
              <Link className="ml-auto inline-block text-sm underline" href="#">
                Forgot your password?
              </Link>
            </div>
            <input id="password" required type="password" />
          </div>
          <button className="w-full" type="submit">
            Login
          </button>
          <button className="w-full" variant="outline">
            Login with Google
          </button>
        </div> */}
        {/* <form className="md:my-10 my-4 w-11/12 md:w-4/5 lg:w-2/5 bg-white shadow rounded-lg md:p-10 p-4">

          <input
            type="submit"
            value={"Iniciar Sesion"}
            className="w-full bg-orange-500 mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-600 transition-colors"
          />
        </form> */}
        {/* <nav className="lg:w-2/5 md:w-4/5 md:flex justify-between text-sm">
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
        </nav> */}
      </main>
    </Layout>
  );
}
