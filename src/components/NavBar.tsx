import { useNavigate, Link, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import NavBarMobile from "./NavBarMobile";
import { UserItemList } from "../types";

type NavBarProps = {
  user?: UserItemList;
};

export default function NavBar({ user }: NavBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const Logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    toast.success("Cierre de sesion exitoso");
  };

  const handleStylesActivate = (path: string, color: string) => {
    return location.pathname === path ? color : "text-font-color";
  };

  const handleNavBar = (path: string) => {
    if (
      path === "/" ||
      path === "/interventions" ||
      path === "/conflicts" ||
      path === "/news"
    ) {
      return true;
    }
    return false;
  };

  return (
    <header
      className={`layout__menu w-full md:py-[3.5rem] md:px-[3rem] ${
        handleNavBar(location.pathname) ? "block" : "hidden"
      }`}
    >
      <NavBarMobile />
      <nav className="hidden md:flex menu__navbar w-full  item-center justify-between">
        <ul className="nav__list flex">
          <li className="mx-8">
            <Link
              to="/"
              className={`nav__title font-medium hover:text-primary  ${handleStylesActivate(
                "/",
                "text-primary"
              )}`}
            >
              Inicio
            </Link>
          </li>
          <li className="mx-8">
            <Link
              to="/interventions"
              className={`nav__title font-medium hover:text-primary ${handleStylesActivate(
                "/interventions",
                "text-primary"
              )}`}
            >
              Actuaciones Urbanisticas
            </Link>
          </li>

          <li className="mx-8">
            <Link
              to="/news"
              className={`nav__title font-medium hover:text-quaternary ${handleStylesActivate(
                "/news",
                "text-quaternary"
              )}`}
            >
              Acontecimientos noticiosos
            </Link>
          </li>
          <li className="mx-8">
            <Link
              to="/conflicts"
              className={`nav__title font-medium hover:text-septenary ${handleStylesActivate(
                "/conflicts",
                "text-septenary"
              )}`}
            >
              Conflictos
            </Link>
          </li>

          {user && user.rol === "researcher" && (
            <li className="mx-8">
              <Link
                to="/admin"
                className={`nav__title font-medium ${handleStylesActivate(
                  "/admin",
                  "text-primary"
                )}`}
              >
                Administrador
              </Link>
            </li>
          )}
        </ul>
        {user ? (
          <ul className="nav__list flex">
            <li className="mx-8">
              <p className="text-font-color font-light">{user.user}</p>
            </li>
            <li className="mx-8" onClick={Logout}>
              <p className={`nav__title font-semibold`}>Cerrar Sesion</p>
            </li>
          </ul>
        ) : (
          <ul className="nav__list flex">
            <li className="mx-8" onClick={() => navigate("/auth/login")}>
              <p className="nav__title font-semibold">Iniciar Sesion</p>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
