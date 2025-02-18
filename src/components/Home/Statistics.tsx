import { useNavigate } from "react-router-dom";

export default function Statistics() {
  const navigate = useNavigate();

  const handleSpanClick = (option: number) => {
    if (option === 1) navigate("?watchStatistic=true&option=1");
    if (option === 2) navigate("?watchStatistic=true&option=2");
    if (option === 3) navigate("?watchStatistic=true&option=3");
  };

  return (
    <div className="hidden mt-20 lg:flex px-4 lg:px-12 xl:px-56 gap-4 lg:gap-8 xl:gap-12">
      <figure className="hidden lg:block w-[300px] lg:w-[500px] h-[330px] lg:h-[500px] bg-red-200 rounded-2xl overflow-hidden relative">
        <img
          src="statistics.jpg"
          alt="statistics"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="w-full lg:w-[calc(100%-548px)] font-semibold flex flex-col xl:pr-12 [&>p]:text-lg [&>p]:lg:text-xl [&>p]:text-septenary [&>p]:mt-5">
        <h3 className="text-primary text-5xl text-center md:text-left">
          Estadísticas
        </h3>
        <p>
          Explora en esta visualización las principales tendencias sobre la
          conflictividad asociada a las decisiones de ordenamiento territorial
          en el periodo 1999-2014
        </p>
        <p>Puedes examinar:</p>
        <ul className="text-lg lg:text-xl [&>li>span]:text-primary  [&>li>span]:cursor-pointer mt-5">
          <li>
            1. La tipología de conflictos en relación con el sistema
            estructurante y la jerarquía urbana en la que se inscribe la acción
            urbanística. <span onClick={() => handleSpanClick(1)}>(Ver)</span>
          </li>
          <li>
            {" "}
            2. El número de hechos noticiosos asociados a cada conflicto.{" "}
            <span onClick={() => handleSpanClick(2)}>(Ver)</span>
          </li>
          <li>
            3. Los actores (demandantes y demandados) en función del tipo de
            conflicto y su escalonamiento.{" "}
            <span onClick={() => handleSpanClick(3)}>(Ver)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
