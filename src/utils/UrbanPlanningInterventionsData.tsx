import bazares from "../assets/img/Bazares.jpg";
import estacion_de_transferencia from "../assets/img/Estacion_de_transferencia.jpg";
import biblioteca_espana from "../assets/img/biblioteca_espana.jpg";

type Data = {
  title: string;
  image: string;
};

export const data: Data[] = [
  {
    title: "Bazares",
    image: bazares,
  },
  {
    title: "Estacion de transferencia",
    image: estacion_de_transferencia,
  },
  {
    title: "Biblioteca Espana",
    image: biblioteca_espana,
  },
];
