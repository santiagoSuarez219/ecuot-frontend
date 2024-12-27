import { IoCloseOutline } from "react-icons/io5";
import { useEcuot } from "../../ecuot";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const isSideMenuOpen = useEcuot((state) => state.isSideMenuOpen);
  const closeMenu = useEcuot((state) => state.closeSideMenu);

  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      <nav
        className={`fixed p-5 right-0 top-0 w-4/5 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ${
          !isSideMenuOpen ? "translate-x-full" : ""
        }`}
      >
        <IoCloseOutline
          size={40}
          className="absolute top-5 right-5 cursor-pointer text-septenary"
          onClick={() => closeMenu()}
        />
        <Link
          to="/"
          className="flex items-center mt-20 p-2"
          onClick={closeMenu}
        >
          <span className="text-lg">Inicio</span>
        </Link>
        <Link
          to="/interventions"
          className="flex items-center p-2"
          onClick={closeMenu}
        >
          <span className="text-lg">Actuaciones Urbanísticas</span>
        </Link>
        <Link
          to="/news"
          className="flex items-center p-2"
          onClick={() => closeMenu()}
        >
          <span className="text-lg">Acontecimientos Noticiosos</span>
        </Link>
        <Link
          to="/conflicts"
          className="flex items-center p-2"
          onClick={closeMenu}
        >
          <span className="text-lg">Conflictos</span>
        </Link>
        <Link
          to="/project"
          className="flex items-center p-2"
          onClick={closeMenu}
        >
          <span className="text-lg">El Proyecto</span>
        </Link>
        <div className="w-full h-px bg-gray-200 my-6" />
      </nav>
    </div>
  );
};
