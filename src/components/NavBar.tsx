import { useNavigate, Link, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import NavBarMobile from "./NavBarMobile";
import { UserResponse } from "../types";

type NavBarProps = {
  user?: UserResponse;
};

export default function NavBar({ user }: NavBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const Logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    queryClient.invalidateQueries({ queryKey: ["user"] });
  };

  const handleStylesActivate = (path: string) => {
    return location.pathname === path ? "text-primary" : "text-font-color";
  };

  const handleNavBar = (path: string) => {
    if (path === "/" || path === "/interventions" || path === "/conflicts") {
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
              className={`nav__title font-medium ${handleStylesActivate("/")}`}
            >
              Inicio
            </Link>
          </li>
          <li className="mx-8">
            <Link
              to="/interventions"
              className={`nav__title font-medium ${handleStylesActivate(
                "/interventions"
              )}`}
            >
              Actuaciones Urbanisticas
            </Link>
          </li>
          <li className="mx-8">
            <Link
              to="/conflicts"
              className={`nav__title font-medium ${handleStylesActivate(
                "/conflicts"
              )}`}
            >
              Conflictos
            </Link>
          </li>
          <li className="mx-8">
            <Link
              to="/news"
              className={`nav__title font-medium ${handleStylesActivate(
                "/news"
              )}`}
            >
              Acontecimientos noticiosos
            </Link>
          </li>
          {user && user.rol === "researcher" && (
            <li className="mx-8">
              <Link
                to="/users"
                className={`nav__title font-medium ${handleStylesActivate(
                  "/users"
                )}`}
              >
                Usuarios
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
