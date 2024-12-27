import { useNavigate, Link, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { UserItemList } from "../types";
import { useEcuot } from "../ecuot";

type NavBarProps = {
  user?: UserItemList;
};

export default function NavBar({ user }: NavBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  // const isSideMenuOpen = useEcuot((state) => state.isSideMenuOpen);
  const openMenu = useEcuot((state) => state.openSideMenu);

  const Logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    toast.success("Cierre de sesion exitoso");
  };

  const handleRouteActivate = (path: string) => {
    return location.pathname === path
      ? "decoration-septenary"
      : "decoration-white";
  };

  const handleNavBar = (path: string) => {
    if (path === "/news" || path.includes("/complete")) {
      return true;
    }

    if (
      path.includes("/edit") ||
      path.includes("/new") ||
      path.includes("/create")
    ) {
      return false;
    }
    return true;
  };

  return (
    <header
      className={`w-full lg:h-14 my-4 lg:mt-16 lg:mb-10 flex items-center justify-between px-4 lg:px-12 ${
        handleNavBar(location.pathname) ? "block" : "hidden"
      }`}
    >
      <Link to="/">
        <figure className="w-4/5 md:w-[250px] md:mr-16 ">
          <img
            src="/logo2.png"
            alt="ecuot-logo"
            className="w-full h-full object-cover"
          />
        </figure>
      </Link>
      <figure
        className="lg:hidden w-[20%] h-full justify-self-end flex justify-end"
        onClick={openMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-12 text-white bg-primary rounded-full p-1"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </figure>
      {/* <NavBarMobile /> */}
      <nav className="hidden lg:flex w-[calc(100%-314px)] items-center justify-between">
        <ul className="flex gap-9 [&>li]:cursor-pointer text-septenary [&>li]:underline [&>li]:underline-offset-4">
          <li
            className={`hover:decoration-septenary ${handleRouteActivate("/")}`}
          >
            <Link to="/">Inicio</Link>
          </li>
          <li
            className={`hover:decoration-septenary ${handleRouteActivate(
              "/interventions"
            )}`}
          >
            <Link to="/interventions">Actuaciones Urbanísticas</Link>
          </li>

          <li
            className={`hover:decoration-septenary ${handleRouteActivate(
              "/news"
            )}`}
          >
            <Link to="/news">Acontecimientos Noticiosos</Link>
          </li>
          <li
            className={`hover:decoration-septenary ${handleRouteActivate(
              "/conflicts"
            )}`}
          >
            <Link to="/conflicts">Conflictos</Link>
          </li>
          <li
            className={`hover:decoration-septenary ${handleRouteActivate(
              "/project"
            )}`}
          >
            <Link to="/project">El Proyecto</Link>
          </li>

          {user && user.rol === "researcher" && (
            <li
              className={`hover:decoration-septenary ${handleRouteActivate(
                "/admin"
              )}`}
            >
              <Link to="/admin">Administrador</Link>
            </li>
          )}
        </ul>
        {user ? (
          <ul className="flex gap-4 items-center">
            <li className="">
              <p className="text-font-color font-light">{user.user}</p>
            </li>
            <li className="primary-button" onClick={Logout}>
              <p className={`nav__title font-semibold`}>Cerrar Sesion</p>
            </li>
          </ul>
        ) : (
          <ul>
            <li
              className="primary-button"
              onClick={() => navigate("/auth/login")}
            >
              <p className="font-semibold">Iniciar Sesion</p>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
