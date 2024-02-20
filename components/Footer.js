export default function Footer() {
  return (
    <footer className="bg-[#2ec4b6] md:p-12">
      {/* <div className="flex justify-center gap-48">
      <figure>
        <Image
          src="/img/itm.png"
          alt="Logo de la institución"
          width={250}
          height={250}
        />
      </figure>
      <figure>
        <Image
          src="/img/logo2.png"
          alt="Logo de la institución"
          width={250}
          height={250}
        />
      </figure>
      <figure>
        <Image
          src="/svg/colmayor-1.svg"
          alt="Logo de la institución"
          width={250}
          height={250}
        />
      </figure>
    </div> */}
      <div className="w-full text-center md:text-xl text-lg font-light md:mt-12 my-4">
        <p className="font-semibold uppercase">
          Facultad de ciencias sociales y educación
        </p>
        <p>Teléfono: + 57 (4) 444 56 11 Ext 128</p>
        <p>Contacto: Investigacionfcs@colmayor.edu.co</p>
        <p className="font-semibold">
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
