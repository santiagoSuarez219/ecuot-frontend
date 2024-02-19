import Link from "next/link";
import Layout from "../layout/Layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title={"Inicio"} description={"ECUOT Repositorio Institucional"}>
      <Navbar />
      <section className="w-full flex items-center px-6">
        <h1 className="text-orange-500 font-black text-6xl uppercase w-1/2">
          Sobre nosotros
        </h1>
        <div className="w-1/2 pl-12">
          <p className="mt-6 text-gray-600 text-xl font-light text-justify">
            ECOUT surge como resultado del proyecto de investigación “Conflictos
            urbanos asociados a las intervenciones y decisiones referidas al
            ordenamiento territorial de la ciudad de Medellín- Colombia”
            realizado por el Grupo de Investigación en Estudios sobre Desarrollo
            Local y Gestión Territorial de la Facultad de Ciencias Sociales y
            Educación de la IUCMA. La investigación planteada en 2018 se trazó
            como objetivo Caracterizar a través del análisis de prensa las
            tensiones en relación con las decisiones del ordenamiento
            territorial en la ciudad de Medellin entre 1916- 2016. Lográndose
            como resultado un sistema de información que recupera y estructura
            la conflictividad asociada a los procesos de ordenamiento
            territorial en relación con tres componentes: Uno, Infonoticias,
            codifica la información identificada en prensa sobre las tensiones
            urbanas puestas en el escenario público. Dos, conflictividad.
            Caracteriza la conflictividad asociada a las intervenciones físico
            espaciales y decisiones del ordenamiento territorial. Tres,
            Intervenciones y decisiones, presenta las características de las
            intervenciones y decisiones objeto de tensión en el escenario
            público. El aplicativo ECUOT es desarrollado mediante convenio con
            el grupo de investigación en Automática, Electrónica y Ciencias
            Computacionales del ITM y tiene como propósito compartir los
            hallazgos del estudio con la comunidad académica, constituyéndose en
            una herramienta de consulta para orientarse en el reconocimiento de
            la transversalidad de las tensiones inherentes a las decisiones e
            intervenciones de ordenamiento territorial para la ciudad de
            Medellín.
          </p>
        </div>
      </section>
      <section className="w-full flex items-center px-6">
        <div className="w-1/2 text-xl font-light space-y-6">
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
        <h1 className="text-orange-500 font-black text-6xl uppercase w-1/2 pl-12">
          Equipo de trabajo
        </h1>
      </section>
      <section className="w-full mt-24 flex items-center">
        <div className="w-1/2">
          <h1 className="text-orange-500 font-semibold text-5xl"></h1>
        </div>
        <div className="w-1/2 pl-12 text-xl flex flex-col gap-6"></div>
      </section>
      <footer className="bg-cyan-700 p-24">
        <div className="flex justify-center gap-48">
          <figure>
            <Image
              src="/img/itm.png"
              alt="Logo de la institución"
              width={250}
              height={250}
            />
          </figure>
          <figure>
            <Image
              src="/img/logo2.png"
              alt="Logo de la institución"
              width={250}
              height={250}
            />
          </figure>
          <figure>
            <Image
              src="/svg/colmayor-1.svg"
              alt="Logo de la institución"
              width={250}
              height={250}
            />
          </figure>
        </div>
        <div className="w-full text-center text-xl font-light mt-12">
          <p>Facultad de ciencias sociales y educación</p>
          <p>Teléfono: + 57 (4) 444 56 11 Ext 128</p>
          <p>Contacto: Investigacionfcs@colmayor.edu.co</p>
          <p>Todos los derechos reservados {new Date().getFullYear()}</p>
        </div>
      </footer>
    </Layout>
  );
}
