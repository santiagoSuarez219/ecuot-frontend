import plan_cuadrantes from "../../assets/img/plan_cuadrantes.jpg";
import "./scroll.css";

export default function Features() {
  return (
    <>
      <article className="content_page w-[60%] p-12 overflow-auto">
        <h1 className="text-5xl font-semibold capitalize text-primary mb-6">
          Caracteristicas
        </h1>
        <p className="text-lg text-justify text-font-color">
          Acorde con el acuerdo 0511 de 2003, el centro de la ciudad presentaba
          para ese momento un ingreso desproporcionad de rutas de buses urbanas,
          130, de las cuales lo recorrian en algunas ocasiones de extremo a
          extremo, y a su vez contaban cada una hasta con 5 paraderos. Esta
          situacion, se considero problematica porque: generaba un exceso de
          contaminacion auditiva y de gases por la quema de combustible y
          propiciaba una alta congestion vehicular impidiendo la libre
          circulacion.
          <br />
          <br />
          Por este motivo, en correspondencia con: el acuerdo 62 de 1999 que
          preciso en su articulo 118 la necesidad de que la ciudad definiera un
          plan de transporte y transito para optimizar el espacio vial
          existente, las acciones proyectadas por el plan de desarrollo acuerdo
          012 de 2001 en relacion con la renovacion del centro y los derechos
          constitucionales en relacion con el espacio publico, se propuso la
          reordenacion de las rutas de transporte.
          <br />
          <br />
          Para ello, se tomo el area del centro denominada como zona amarilla y
          se dividio en cuatro cuadrantes a partir de los cuales se organizaba
          el ingreso y salida del transporte publico del centro de la ciudad. De
          modo que, la accion urbanistica es una decision municipal de jerarquia
          metropolitanam que se inscribio en el conjunto de acciones para
          renovar el centro de la ciudad en funcion de resolver el caos
          vehicular y mejorar la movilidad no motorizada.
        </p>
      </article>
      <figure className="w-[40%]">
        <img
          src={plan_cuadrantes}
          alt="map"
          className="w-full h-full object-cover"
        />
      </figure>
    </>
  );
}
