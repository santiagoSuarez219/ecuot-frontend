import el_colombiano from "../../assets/img/El_Colombiano.jpeg";

export default function Conflictivity() {
  return (
    <>
      <article className="content_page w-[60%] p-12 overflow-auto">
        <h2 className="text-5xl font-semibold capitalize text-primary mb-6">
          Conflictividad
        </h2>
        <p className="text-lg text-justify text-font-color">
          De igual modo se hacen publicas quejas de la ciudadania "que los
          paraderos estan muy lejos, que toca caminar mucho" "que el plan en
          muchos casos significo, el pago de mas pasajes" (el colombiano,
          30/06/2003). Y desde el gremio trasnsportador se manifesto que no se
          habia concertadoo la propuesta, aun cuando el decreto mismo, menciona
          que se concerto con asociaciones como CTU y CONTRASANA. Situacion que
          conduce a que el consejo municipal revise la propuesta y se plantee
          hacer ajustes a la medida parcialmente
          <br />
          <br />
          El problema se visibiliza en la prensa en los meses de junio-julio
          evidenciandose como principa tension, las demandas de la comunidad del
          barrio Prado en relacion con el argumento de que la medida afectaba su
          calidad de vida. Un anio despues en septiembre de 2024 la prensa
          registra que el gobierno de Fajardo reversa la medida y los buses
          regresan al centro.
        </p>
      </article>
      <figure className="w-[40%]">
        <img src={el_colombiano} alt="map" className="w-full h-full " />
      </figure>
    </>
  );
}
