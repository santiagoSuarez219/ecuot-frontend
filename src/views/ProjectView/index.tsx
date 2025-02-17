import TeamWork from "../../components/Home/TeamWork";
import Footer from "../../components/Footer";

export default function ProjectView() {
  return (
    <section className="w-full">
      <h2 className="w-full bg-quinary text-5xl font-semibold text-white px-4 lg:px-16 py-8 lg:py-12">
        El proyecto
      </h2>
      <figure className="h-auto w-full aspect-w-16 aspect-h-9">
        <img
          src="main-poster.avif"
          alt="main-poster"
          className="w-full h-full object-fit grayscale"
        />
      </figure>
      <h3 className="my-4 px-4 md:my-8 lg:my-12 mx-auto text-center font-semibold text-3xl md:text-4xl xl:text-5xl text-quinary max-w-screen-lg">
        Estudio sobre el conflicto urbano asociado a decisiones de ordenamiento
        territorial
      </h3>
      <article className="w-full lg:grid grid-cols-2">
        <p className="w-full px-4 xl:pl-12 2xl:pl-24 lg:pr-12 xl:text-lg 2xl:text-xl text-base lg:leading-snug xl:leading-normal font-normal ">
          Ecuot surge como resultado del proyecto de investigación “Conflictos
          urbanos asociados a las intervenciones y decisiones referidas al
          ordenamiento territorial de la ciudad de Medellín- Colombia” realizado
          por el Grupo de Investigación en Estudios sobre Desarrollo Local y
          Gestión Territorial de la Facultad de Ciencias Sociales y Educación de
          la Institución Universitaria Colegio Mayor de Antioquia. La
          investigación planteada en 2018 se trazó como objetivo{" "}
          <span className="font-bold">
            caracterizar a través del análisis de prensa las tensiones en
            relación con las decisiones del ordenamiento territorial en la
            ciudad de Medellín entre 1999- 2014.
          </span>{" "}
          Lo anterior, logró como resultado un sistema de información que
          recupera y estructura la conflictividad asociada a los procesos de
          ordenamiento territorial en relación con tres componentes:
          <span className="font-bold"> Acontecimientos noticiosos</span>, el
          cual codifica la información identificada en prensa sobre las
          tensiones urbanas puestas en el escenario público.{" "}
          <span className="font-bold">Conflictividad</span>, este caracteriza la
          conflictividad asociada a las intervenciones físico espaciales y
          decisiones del ordenamiento territorial.{" "}
          <span className="font-bold">Actuaciones urbanísticas</span>, el cual
          presenta las características de las intervenciones y decisiones objeto
          de tensión en el escenario público.
        </p>
        <figure className="w-full h-[250px] md:h-[400px] lg:h-[568px] mt-4 lg:mt-0">
          <img
            src="main-poster.avif"
            alt="main-poster"
            className="h-full w-full object-cover"
          />
        </figure>
        <figure className="hidden lg:block w-full lg:h-[568px]">
          <img
            src="main-poster.avif"
            alt="main-poster"
            className="h-full w-full object-cover grayscale"
          />
        </figure>
        <p className="w-full h-full text-base xl:text-lg 2xl:text-xl font-normal px-4 py-4 xl:pr-12 xl:pl-12">
          El aplicativo Ecuot es desarrollado mediante convenio con el grupo de
          investigación en Automática, Electrónica y Ciencias Computacionales
          del Instituto Tecnológico Metropolitano y tiene como propósito
          compartir los hallazgos del estudio con la comunidad académica,
          constituyéndose en una herramienta de consulta para orientarse en el
          reconocimiento de la transversalidad de las tensiones inherentes a las
          decisiones e intervenciones de ordenamiento territorial para la ciudad
          de Medellín. <br />
          <br /> La herramienta se estructura a partir de dos funcionalidades.
          La primera es ser un repositorio de información sobre la
          conflictividad en relación con el ordenamiento territorial abierta a
          su actualización permanente, y la segunda, convertirse en una
          herramienta de visualización amigable para el análisis y
          reconocimiento de la conflictividad que media en los procesos de
          enseñanza y aprendizaje. En esta dirección, ésta posibilita reconocer
          los contextos, definir los problemas e identificar las decisiones del
          ordenamiento, y su consulta es un disparador de debate e intercambio
          de saberes alrededor de los datos que esta organiza, orientando al
          debate y la estimulación de preguntas en torno al problema urbano.
        </p>
      </article>
      <TeamWork />
      <Footer />
    </section>
  );
}
