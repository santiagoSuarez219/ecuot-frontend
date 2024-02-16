import Link from "next/link";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <Layout title={"Inicio"} description={"ECUOT Repositorio Institucional"}>
      <main>Hola mundo</main>
      <Link href="/login">Login</Link>
      <Link href="/registrar">Registrar</Link>
      <Link href="/olvide-password">Olvide contraseña</Link>
    </Layout>
  );
}
