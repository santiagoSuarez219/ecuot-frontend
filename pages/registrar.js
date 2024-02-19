import { useState } from "react";
import Link from "next/link";
import Layout from "../layout/Layout";
import Alerta from "../components/Alerta";

export default function registrar() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [rol, setRol] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword, rol].includes("")) {
      setAlerta({
        error: true,
        msg: "Todos los campos son obligatorios",
      });
      return;
    }
  };

  const { msg } = alerta;

  return (
    <Layout
      title={">Registrar"}
      description={
        "Si eres investigador puedes registrar usuario en el sistema ECUOT"
      }
    >
      <main className="w-full h-screen flex items-center px-6 gap-6">
        <div className="w-1/2">
          <h1 className="text-orange-500 font-black text-6xl capitalize">
            Crea usuarios para administrar{" "}
            <span className="text-slate-700">Ecuot</span>
          </h1>
          <div className="lg:w-full">{msg && <Alerta alerta={alerta} />}</div>
        </div>
        <div className="w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg w-full px-10 py-5"
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
                type="email"
                placeholder="Nombre del usuario"
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
                onChange={(e) => setRol(e.target.value)}
              >
                <option value="investigador">Investigador</option>
                <option value="estudiante">Estudiante</option>
              </select>
            </div>
            <input
              type="submit"
              value={"Crear cuenta"}
              className="w-full bg-orange-500 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-600 transition-colors"
            />
            {/* 
            
            
             */}
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
