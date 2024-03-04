import Link from "next/link";
import Modal from "react-modal";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import useEcuot from "../hooks/useEcuot";

const customStyles = {
  content: {
    top: "auto",
    left: "auto",
    right: 0,
    bottom: 0,
    width: "70%",
    height: "calc(100vh - 96px)",
    overflow: "auto",
    padding: "20px",
    transform: "translateX(0)",
  },
};

Modal.setAppElement("#__next");

export default function Navbar() {
  const { handleOpenModal, handleCloseModal, modalNavbar } = useEcuot();
  return (
    <>
      <nav className="w-full flex p-4 lg:p-6 items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-tighter lg:mr-8">
            <Link href={"/"}>ECUOT Repositorio Institucional</Link>
          </h1>
          <ul className="hidden lg:flex gap-6 text-sm font-medium">
            <li className="hover:border-b-2">
              <Link href={"/noticias"}>Noticias</Link>
            </li>
            <li className="hover:border-b-2">
              <Link href={"/conflictos"}>Conflictos</Link>
            </li>

            <li className="hover:border-b-2">
              <Link href={"/intervenciones"}>Intervenciones</Link>
            </li>
          </ul>
        </div>
        <button className="hidden lg:block p-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition-colors">
          <Link href="/login">Iniciar sesion</Link>
        </button>
        {modalNavbar ? (
          <HiOutlineXMark
            className="text-5xl z-10 lg:hidden"
            onClick={handleCloseModal}
          />
        ) : (
          <HiBars3
            className="text-5xl z-10 lg:hidden"
            onClick={handleOpenModal}
          />
        )}
        {modalNavbar && (
          <Modal isOpen={modalNavbar} style={customStyles}>
            <ul className="flex flex-col gap-2 font-semibold">
              <li onClick={handleCloseModal}>
                <Link href={"/noticias"}>Noticias</Link>
              </li>
              <li onClick={handleCloseModal}>
                <Link href={"/conflictos"}>Conflictos</Link>
              </li>
              <li onClick={handleCloseModal}>
                <Link href={"/intervenciones"}>Intervenciones</Link>
              </li>
              <div className="w-full h-[1px] rounded-sm bg-slate-200"></div>
              <li>Iniciar sesion</li>
            </ul>
          </Modal>
        )}
      </nav>
    </>
  );
}
