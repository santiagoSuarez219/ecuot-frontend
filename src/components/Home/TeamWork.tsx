import team_work from "../../assets/img/team-work.jpg";

export default function TeamWork() {
  return (
    <section className="layout__team-work mt-8 mb-8 mx-12 py-16 px-28 rounded-[60px] shadow-xl relative overflow-hidden">
      <h1 className="teamwork__title text-center text-[4.5rem] text-secondary font-semibold mb-8 bg-transparent z-10 relative">
        Equipo de trabajo
      </h1>
      <div className="w-full mx-auto flex gap-12 justify-center ">
        <div className="bg-white z-10 shadow-xl p-12 rounded-xl w-[40%]">
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
        <div className="bg-white z-10 shadow-xl p-12 rounded-xl w-[40%]">
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
      <figure>
        <img
          src={team_work}
          alt="team-work"
          className="team-work__figure absolute -left-0 -top-4 w-[30rem]"
        />
      </figure>
    </section>
  );
}
