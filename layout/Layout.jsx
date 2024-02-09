import Head from "next/head";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`Ecuot - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="">{children}</div>
    </>
  );
}
