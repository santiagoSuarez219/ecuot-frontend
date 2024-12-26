import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="mt-8 lg:mt-16 ">
      <div className="px-4 lg:px-56 grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-16 items-center lg:[&>figure]:h-[120px] [&>figure]:flex [&>figure]:justify-center [&>figure]:items-center">
        <a
          href="https://www.colmayor.edu.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="logo_colmayor.avif"
              alt="logo-colmayor"
              className="object-cover"
            />
          </figure>
        </a>
        <a
          href="https://www.itm.edu.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure>
            <img src="logo_itm.avif" alt="logo-itm" className="object-cover" />
          </figure>
        </a>
        <a
          href="https://www.medellin.gov.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="logo_alcaldia.avif"
              alt="logo-alcaldia"
              className="object-cover"
            />
          </figure>
        </a>
        <a
          href="https://www.colmayor.edu.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src="logo_desarrollo.avif"
              alt="logo-desarrollo"
              className="object-cover"
            />
          </figure>
        </a>
      </div>
      <div className="w-full bg-septenary mt-8 md:h-[400px] flex flex-col md:flex-row lg:justify-between px-4 lg:px-16 gap-4">
        <figure className="lg:w-[400px] h-full flex items-center justify-center">
          <img src="logo_footer.png" alt="logo-footer" />
        </figure>
        <div className="md:w-1/3 h-full flex flex-col py-4 md:py-10 justify-center">
          <h3 className="text-primary text-xl font-semibold">Menú</h3>
          <ul className="text-white text-lg font-normal mt-4 flex flex-col gap-2">
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
            <li className=" cursor-pointer">
              <Link to="/interventions">Actuaciones Urbanísticas</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="/news">Acontecimientos noticiosos</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="/conflicts">Conflictos</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="/project">El Proyecto</Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 h-full flex flex-col py-4 md:py-10 justify-center">
          <h3 className="text-primary text-xl font-semibold">Contacto</h3>
          <ul className="text-white text-lg font-normal mt-4 flex flex-col gap-2">
            <li>Facultad de ciencias sociales y educación</li>
            <li>Dirección: Calle 112 #45-56</li>
            <li>Teléfono: + 57 (4) 444 56 11 Ext 128</li>
            <li>Correo: Investigacionfcs@colmayor.edu.co</li>
          </ul>
        </div>
      </div>
      <div className="text-base w-full bg-white px-4 md:px-0 py-2 md:py-5 flex justify-center items-center md:text-xl font-semibold text-septenary">
        © {new Date().getFullYear()} Santiago Suarez. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
