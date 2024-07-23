export default function TeamWork() {
  return (
    <section className="layout__team-work mt-8 mb-8 mx-4 md:mx-12 md:py-16 py-6 md:px-28 px-4 md:rounded-[60px] rounded-2xl relative overflow-hidden bg-primary">
      <h1 className="teamwork__title text-center text-4xl md:text-[4.5rem] text-white font-semibold mb-6 md:mb-16 bg-transparent z-10 relative">
        Equipo de trabajo
      </h1>
      <div className="w-full mx-auto flex flex-col md:flex-row gap-4 md:gap-12 justify-center ">
        <div className="bg-white z-10 shadow-xl p-12 rounded-xl w-full md:w-[40%]">
          <h2 className="text-xl lg:text-3xl font-semibold">
            Investigador principal
          </h2>
          <p className="lg:text-xl mt-4">Claudia Maria Gonzalez Hernandez</p>
          <p className="text-sm lg:text-lg">
            Trabajadora Social. Mg. Ciencia Politica
          </p>
          <h2 className="text-xl lg:text-3xl font-semibold mb-4 mt-12">
            Colaboradores
          </h2>
          <p className="text-base lg:text-xl mt-4">
            Yuly Andrea Sanchez Velasquez
          </p>
          <p className="text-sm lg:text-lg">
            Profesional en planeacion y desarrollo social
          </p>
          <p className="text-base lg:text-xl mt-4">
            Julio Cesar Escobar Quiroga
          </p>
          <p className="text-sm lg:text-lg">
            Sociologo: Especialista en sistema de informacion geografica
          </p>
        </div>
        <div className="bg-white z-10 shadow-xl p-12 rounded-xl w-full md:w-[40%]">
          <h2 className="text-xl lg:text-3xl font-semibold ">
            Estudiantes del programa de planeacion y desarrollo social
          </h2>
          <h3 className="text-lg lg:text-2xl font-semibold  mt-4">
            Estudiantes en practica profesional
          </h3>
          <p className="text-base lg:text-xl">Carlos Andres Narvaez</p>
          <p className="text-base lg:text-xl">Carlos Andres Narvaez</p>
          <p className="text-base lg:text-xl">Carlos Andres Narvaez</p>
          <h3 className="text-lg lg:text-2xl font-semibold  mt-4">
            Estudiantes Asistentes
          </h3>
          <p className="text-base lg:text-xl">Carlos Andres Narvaez</p>
          <p className="text-base lg:text-xl">Carlos Andres Narvaez</p>
          <p className="text-base lg:text-xl">Carlos Andres Narvaez</p>
        </div>
      </div>
    </section>
  );
}
