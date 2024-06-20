import bazares from "../assets/img/Bazares.jpg";
import estacion_de_transferencia from "../assets/img/Estacion_de_transferencia.jpg";
import biblioteca_espana from "../assets/img/biblioteca_espana.jpg";
import { InterventionFormData } from "../types";

export const dataInterventions: InterventionFormData[] = [
  {
    interventionName: "Adecuacion Carrera Junin",
    description:
      "Adecuación de mejores espacios peatonales y acondicionamiento de las áreas ambientales",
    hierarchy: "Ciudad",
    strategicProject: "Plan especial del Centro Tradicional y Representativo",
    internalSystem: "Sistema de Espacio Público",
    image: bazares,
  },
  {
    interventionName: "Ampliación Carrera 76",
    description:
      " La obra consiste en la ampliación de la carrera 76, para que quedara de doble vía a una doble calzada de dos carriles a cada lado. Además la construcción de puentes  sobre la quebrada la picacha, altavista,  puente en altura sobre la calle 14 y el intercambio vial de la 80 con la carrera 76 y obras adicionales en la loma de los Bernal y el rincón. Incluye asimismo, remodelación de andenes y zonas verdes ",
    hierarchy: "Ciudad",
    strategicProject: "No aplica",
    internalSystem: "Sistema Movilidad",
    image: estacion_de_transferencia,
  },
  {
    interventionName: "Ampliación y renovación plazoleta Pueblito Paisa",
    description: "",
    hierarchy: "Barrial y suburbano",
    strategicProject:
      "Valoración y recuperación ambiental de los cerros tutelares. ",
    internalSystem: "Sistema de Espacio Público de esparcimiento y encuentro",
    image: biblioteca_espana,
  },
];
