import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between p-6">
      <h1 className="text-orange-500 font-black text-5xl">ECUOT</h1>
      <div>
        <ul className="h-full flex gap-6 items-center text-xl font-medium">
          <li>Noticias</li>
          <li>Conflictividad</li>
          <li>Intervenciones</li>
        </ul>
      </div>
      <div className="flex gap-6 items-center text-xl">
        <p className="font-light">Invitado</p>
        <Link href="/login">Ingresar</Link>
      </div>
    </nav>
  );
}
