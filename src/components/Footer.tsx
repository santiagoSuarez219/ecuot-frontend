import logo_colmayor from "../assets/img/logo_colmayor.png";
import logo_alcaldia from "../assets/img/logo_alcaldia.png";
import logo_itm from "../assets/img/logo_itm.png";
import logo_desarrollo from "../assets/img/logo_desarrollo.png";

export default function Footer() {
  return (
    <footer className="flex flex-col px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-12">
        <figure>
          <img src={logo_colmayor} alt="logo_colmayor" />
        </figure>
        <figure>
          <img src={logo_alcaldia} alt="logo_colmayor" />
        </figure>
        <figure>
          <img src={logo_itm} alt="logo_itm" />
        </figure>
        <figure>
          <img src={logo_desarrollo} alt="logo_desarrollo" />
        </figure>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full md:max-w-screen-sm lg:max-w-screen-xl lg:w-1/2 shadow-lg rounded-2xl flex flex-col px-12 pb-12 pt-6">
          <h2 className="text-4xl lg:text-6xl font-medium text-primary text-center lg:text-left">
            Contactanos!
          </h2>
          <p className="lg:text-lg lg:mt-8 mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla enim
            quaerat eaque dolor impedit delectus doloribus iusto facilis eum est
            ad deserunt debitis omnis ipsam, nisi, quo quae similique aperiam?
          </p>
          <div className="flex px-2 lg:px-6 mt-4 lg:mt-8 py-2 lg:py-4 shadow-md justify-between items-center">
            <div className="flex gap-2 lg:gap-4 lg:w-4/5 items-center">
              <input
                type="text"
                placeholder="Correo Electronico"
                className="lg:text-lg w-full bg-transparent focus:outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="bg-primary px-4 py-2 rounded-lg text-white font-semibold text-lg hover:bg-primary/80 transition-colors"
            >
              Enviar
            </button>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 w-full lg:w-1/2 text-lg px-6 flex flex-col md:flex-row gap-12 lg:gap-24 text-gray-500">
          <div>
            <h3 className="font-semibold mb-6 text-black">Menu</h3>
            <ul className="flex flex-col gap-2 ">
              <li className="hover:text-black cursor-pointer">Inicio</li>
              <li className="hover:text-black cursor-pointer">
                Sobre nosotros
              </li>
              <li className="hover:text-black cursor-pointer">Documentos</li>
              <li className="hover:text-black cursor-pointer">
                Actuaciones Urbanisticas
              </li>
              <li className="hover:text-black cursor-pointer">Conflictos</li>
              <li className="hover:text-black cursor-pointer">
                Acontecimientos noticiosos
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-black">Contacto</h3>
            <div className="flex flex-col gap-2">
              <p>Facultad de ciencias sociales y educacion</p>
              <p>Direccion: Calle 112 #45-56</p>
              <p>Teléfono: + 57 (4) 444 56 11 Ext 128</p>
              <p>Correo: Investigacionfcs@colmayor.edu.co</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-center lg:text-right p-4 md:mt-12 lg:mt-0">
        © {new Date().getFullYear()} Santiago Suarez. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
