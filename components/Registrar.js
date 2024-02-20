import Layout from "../layout/Layout";
import Alerta from "../components/Alerta";
import Link from "next/link";

export default function Registrar({
  msg,
  alerta,
  handleSubmit,
  nombre,
  setNombre,
  email,
  setEmail,
  password,
  setPassword,
  repetirPassword,
  setRepetirPassword,
  rol,
  setRol,
}) {
  return (
    <Layout
      title={"Registrar"}
      description={
        "Si eres investigador puedes registrar usuarios en el sistema ECUOT"
      }
    >
      <main className="w-full lg:h-screen flex flex-col lg:flex-row items-center md:px-6 md:gap-6">
        <div className="lg:w-1/2 w-11/12">
          <h1 className="py-4 md:p-6 md:text-center lg:text-left">
            Crea usuarios para administrar{" "}
            <span className="text-slate-700">Ecuot</span>
          </h1>
          <div className="hidden lg:block">
            {msg && <Alerta alerta={alerta} />}
          </div>
        </div>
        <div className="lg:w-1/2 w-11/12">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg w-full md:px-10 px-4 py-5"
          >
            <div className="">
              <label
                htmlFor="nombre"
                className="uppercase text-gray-600 block text-xl font-bold "
              >
                Nombre
              </label>
              <input
                id="nombre"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                type="text"
                placeholder="Nombre del usuario"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="my-4">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-4">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="repetir-contraseña"
                className="uppercase text-gray-600 block text-xl font-bold "
              >
                Repetir contraseña
              </label>
              <input
                id="repetir-contraseña"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                type="password"
                placeholder="Repetir la contraseña"
                value={repetirPassword}
                onChange={(e) => setRepetirPassword(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="rol"
                className="uppercase text-gray-600 block text-xl font-bold "
              >
                Selecciona un rol
              </label>
              <select
                id="rol"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50 text-gray-400"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <option value="usuario">Usuario</option>
                <option value="investigador">Investigador</option>
                <option value="estudiante">Estudiante</option>
              </select>
            </div>
            <input
              type="submit"
              value={"Crear cuenta"}
              className="w-full bg-orange-500 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-600 transition-colors"
            />
          </form>
          <div className="lg:hidden">{msg && <Alerta alerta={alerta} />}</div>
          <Link
            href="/"
            className="block text-center text-slate-500 uppercase my-5"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    </Layout>
  );
}
