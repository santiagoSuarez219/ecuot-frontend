import Head from "next/head";
import Navbar from "../components/Navbar";
import useEcuot from "../hooks/useEcuot";

export default function Layout({ children, title = "", description = "" }) {
  const { modal } = useEcuot();

  return (
    <>
      <Head>
        <title>{`Ecuot - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="w-full min-h-screen flex flex-col md:block bg-white">
        <Navbar />
        {children}
      </div>
    </>
  );
}
