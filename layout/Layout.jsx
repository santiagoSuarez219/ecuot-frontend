import Head from "next/head";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`Ecuot - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="w-full min-h-screen flex flex-col md:block bg-gray-100 lg:p-6 p-4">
        {children}
      </div>
    </>
  );
}
