import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import Layout from "../../layout/Layout";

export default function Confirmar({ token }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/usuarios/confirmar/${token}`
      );
      toast.success(data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  return (
    <Layout
      title={"Confirmar cuenta"}
      description={"Confirma tu cuenta de ECUOT"}
    >
      <main className="w-full h-[calc(100vh-96px)] overflow-y-auto justify-center items-center p-4">
        <div className="w-full max-w-sm mx-auto">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Confirmar cuenta</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Presiona el botón para confirmar tu cuenta
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="submit"
              value={"Confirmar cuenta"}
              className="w-full bg-black mt-4 py-3 text-white rounded cursor-pointer hover:bg-black/90 transition-colors md:col-span-2"
            />
          </form>
          <p className="text-center mt-4 text-sm">
            Ya confirmaste tu cuenta?{" "}
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
