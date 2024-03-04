import Image from "next/image";
import Layout from "../layout/Layout";
import Footer from "@/components/Footer";
import SobreNosotros from "@/components/SobreNosotros";
import EquipoTrabajo from "@/components/EquipoTrabajo";

export default function Home() {
  return (
    <Layout title={"Inicio"} description={"ECUOT Repositorio Institucional"}>
      <div className="p-2 w-full text-center space-y-2 mb-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Introduccion
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 text-xl">
          ECOUT surge como resultado del proyecto de investigación “Conflictos
          urbanos asociados a las intervenciones y decisiones referidas al
          ordenamiento territorial de la ciudad de Medellín- Colombia” realizado
          por el Grupo de Investigación en Estudios sobre Desarrollo Local y
          Gestión Territorial de la Facultad de Ciencias Sociales y Educación de
          la IUCMA
        </p>
      </div>
      <figure className="hidden md:block w-full rounded-t-lg mb-6 p-6">
        <Image
          src="/img/2.png"
          alt="Imagen de fondo"
          width={2000}
          height={1000}
          className="main-image rounded-t-lg "
        />
      </figure>
      <SobreNosotros />
      <EquipoTrabajo />
    </Layout>
  );
}
