import Link from "next/link";
import Image from "next/image";
import Layout from "../layout/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SobreNosotros from "@/components/SobreNosotros";

export default function Home() {
  return (
    <Layout title={"Inicio"} description={"ECUOT Repositorio Institucional"}>
      <Navbar />
      <figure className="hidden md:block w-full ">
        <Image
          src="/img/2.png"
          alt="Imagen de fondo"
          width={2000}
          height={1000}
        />
      </figure>
      <SobreNosotros />
      <section className="w-full flex flex-col md:flex-row items-center md:px-6">
        <div className="w-full md:w-1/2 text-xl font-light space-y-6 order-last md:order-none p-4">
          <div>
            <h3 className="font-bold text-2xl">Investigador principal</h3>
            <p>Claudia Maria Gonzales Hernandez</p>
            <em className="text-base">
              Trabajadora Social.MG Ciencia Política.
            </em>
          </div>
          <div>
            <h3 className="font-bold text-2xl">
              Estudiantes en práctica profesional
            </h3>
            <p>Carlos Andrés Narváez Jiménez</p>
            <p>Danid Elías Tapias Restrepo</p>
            <p>Camila Beltrán Gaviria</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Estudiantes Asistentes</h3>
            <p>Daniela Arboleda Cano</p>
            <p>Gina Alejandra Giraldo Estrada</p>
            <p>Mateo Ossa Hernández</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Colaboradores</h3>
            <p>Yuly Andrea Sánchez Velásquez</p>
            <em className="text-base">
              Profesional en planeación y desarrollo social
            </em>
            <p>Julio Cesar Escobar Quiroga</p>
            <em className="text-base">
              Sociólogo: Especialista en sistema de información geográfica
            </em>
          </div>
        </div>
        <h1 className="text-orange-500 font-black text-5xl md:text-6xl uppercase md:w-1/2 w-full md:pl-12 p-4">
          Equipo de trabajo
        </h1>
      </section>
      <section className="w-full mt-24 flex items-center">
        <div className="w-1/2">
          <h1 className="text-orange-500 font-semibold text-5xl"></h1>
        </div>
        <div className="w-1/2 pl-12 text-xl flex flex-col gap-6"></div>
      </section>
      <Footer />
    </Layout>
  );
}
