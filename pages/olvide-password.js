import Link from "next/link";
import Layout from "../layout/Layout";

export default function OlvideContraseña() {
  return (
    <Layout
      title={"Recuperar contraseña"}
      description={"Recupera tu contraseña para acceder a tu cuenta de ECUOT"}
    >
      <main className="w-full h-[calc(100vh-96px)] overflow-y-auto justify-center items-center p-4">
        <div className="w-full max-w-sm mx-auto">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Recupera tu contraseña</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Ingresa tu dirección de correo electrónico para recuperar tu
              contraseña
            </p>
          </div>
          <form className="">
            <div>
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                id="email"
                className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
                type="text"
                placeholder="johnd@example.com"
              />
            </div>
            <input
              type="submit"
              value={"Recuperar contraseña"}
              className="w-full bg-black mt-4 py-3 text-white rounded cursor-pointer hover:bg-black/90 transition-colors md:col-span-2"
            />
          </form>
          <p className="text-center mt-4 text-sm">
            Recuerdas tu contraseña?{" "}
            <span className="underline underline-offset-1">
              <Link href={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </main>
    </Layout>
  );
}
