import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-6 md:gap-12 mb-6 px-16">
        <figure>
          <img
            src="logo_colmayor.avif"
            alt="logo colmayor"
            className="h-24 md:h-36 object-contain"
          />
        </figure>
        <figure>
          <img
            src="logo_itm.avif"
            alt="logo itm"
            className=" h-24 md:h-36 object-contain"
          />
        </figure>
        <figure>
          <img
            src="logo_alcaldia.avif"
            alt="logo alcaldia"
            className="h-24 md:h-36 object-contain"
          />
        </figure>

        <figure>
          <img
            src="logo_desarrollo.avif"
            alt="logo desarrollo"
            className=" h-24 md:h-36 object-contain"
          />
        </figure>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-primary md:pt-16 md:px-16">
        <div className="mt-12 lg:mt-0 w-full lg:w-1/2 text-lg px-6 flex flex-col md:flex-row gap-12 lg:gap-24 text-white">
          <div>
            <h3 className="font-semibold mb-6  text-xl">Menu</h3>
            <ul className="flex flex-col gap-2  ">
              {location.pathname === "/" ? (
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Inicio
                </li>
              ) : (
                <li className=" cursor-pointer">
                  <Link to="/">Inicio</Link>
                </li>
              )}

              <li
                className="cursor-pointer"
                onClick={() => handleScroll("about-us")}
              >
                Sobre nosotros
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleScroll("documents-section")}
              >
                Documentos
              </li>
              <li className=" cursor-pointer">
                <Link to="/interventions">Actuaciones Urbanisticas</Link>
              </li>
              <li className=" cursor-pointer">
                <Link to="/conflicts">Conflictos</Link>
              </li>
              <li className=" cursor-pointer">
                <Link to="/news">Acontecimientos noticiosos</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-xl">Contacto</h3>
            <div className="flex flex-col gap-2">
              <p>Facultad de ciencias sociales y educacion</p>
              <p>Direccion: Calle 112 #45-56</p>
              <p>Teléfono: + 57 (4) 444 56 11 Ext 128</p>
              <p>Correo: Investigacionfcs@colmayor.edu.co</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-white text-center lg:text-right p-4 md:mt-12 pt-12 md:pt-0 lg:mt-0 bg-primary">
        © {new Date().getFullYear()} Santiago Suarez. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
