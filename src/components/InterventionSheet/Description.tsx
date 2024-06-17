import map_img from "../../assets/img/map2.jpg";

export default function Description() {
  return (
    <>
      <article className="w-[60%] p-12">
        <h1 className="text-5xl font-semibold capitalize text-primary mb-6">
          Plan Cuadrantes
        </h1>
        <p className="text-lg text-justify text-font-color">
          El plan cuadrante fue una decision administrativa en el marco de la
          ordenacion y organizacion del cnetro de la ciudad, orientada a regular
          y organizar la circulacion del transporte publico, buscando mejorar la
          movilidad no motorizada y optimizar el usuo del sistema metroe en el
          centro de la ciudad. Organiza el trasnporte en la denominada zona
          amarilla comprendida entre: calle 58 avenida Echeverri al Norte, calle
          44 San Juan al Sur, por la carrea 57, avenida del ferrocarril o
          alfonso lopez al occidente y carrera 43 Girardot al oriente.
        </p>
      </article>
      <figure className="w-[40%]">
        <img src={map_img} alt="map" className="w-full h-full object-cover" />
      </figure>
    </>
  );
}
