import { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import Layout from "../../layout/Layout";

export default function OlvidePassword({ token }) {
  const [password, setPassword] = useState("");
  const [tokenValido, setTokenValido] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/usuarios/olvide-password/${token}`
      );
      toast.success(data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await axios(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/usuarios/olvide-password/${token}`
        );
        setTokenValido(true);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    };
    comprobarToken();
  }, []);

  return (
    <Layout
      title={"Confirmar cuenta"}
      description={"Confirma tu cuenta de ECUOT"}
    >
      <main className="w-full h-[calc(100vh-96px)] overflow-y-auto justify-center items-center p-4">
        <div className="w-full max-w-sm mx-auto">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Reestablece tu contraseña</h1>
            <p
              className={`text-gray-500 ${
                !tokenValido ? "bg-red-500 rounded-lg text-white p-2 " : ""
              } `}
            >
              {tokenValido ? "Ingresa tu nueva contraseña" : "Token invalido"}
            </p>
          </div>
          {tokenValido && (
            <form onSubmit={handleSubmit} className="mt-4">
              <div>
                <label htmlFor="password" className="font-medium">
                  Contraseña
                </label>
                <input
                  id="password"
                  className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value={"Reestablecer contraseña"}
                className="w-full bg-black mt-4 py-3 text-white rounded cursor-pointer hover:bg-black/90 transition-colors md:col-span-2"
              />
            </form>
          )}
          <p className="text-center mt-4 text-sm">
            Ya reestableciste tu contraseña?{" "}
            <span className="underline underline-offset-1">
              <Link href={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query: { token } }) {
  return {
    props: {
      token,
    },
  };
}
