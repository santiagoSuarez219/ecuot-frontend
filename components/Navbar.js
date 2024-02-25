import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full md:flex lg:px-8 md:mb-6 md:justify-center lg:justify-between md:items-center md:gap-8">
      <div className="md:flex lg:gap-8">
        <h1 className="font-bold text-2xl lg:text-3xl tracking-tighter w-full text-center md:max-w-[200px] lg:max-w-screen-lg">
          ECUOT Repositorio Institucional
        </h1>
        <div className="hidden md:block">
          <ul className="h-full flex lg:gap-8 gap-4 items-center text-sm font-medium">
            <li>Noticias</li>
            <li>Conflictividad</li>
            <li>Intervenciones</li>
          </ul>
        </div>
      </div>
      <button className="hidden md:block p-2 border border-gray-400 rounded-lg h-1/2 ">
        <Link href="/login">Iniciar sesion</Link>
      </button>
    </nav>
  );
}
