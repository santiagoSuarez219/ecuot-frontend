import { useNavigate, Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="layout__menu w-full py-[3.5rem] px-[3rem] ">
      <nav className="menu__navbar w-full flex item-center justify-between">
        <ul className="nav__list flex">
          <li className="nav__item">
            <Link
              to="/"
              className={`nav__title font-medium ${
                location.pathname === "/" ? "nav__title--active" : ""
              }`}
            >
              Inicio
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/interventions"
              className={`nav__title font-medium ${
                location.pathname === "/interventions"
                  ? "nav__title--active"
                  : ""
              }`}
            >
              Actuaciones Urbanisticas
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/conflicts"
              className={`nav__title font-medium ${
                location.pathname === "/conflicts" ? "nav__title--active" : ""
              }`}
            >
              Conflictos
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/news"
              className={`nav__title font-medium ${
                location.pathname === "/news" ? "nav__title--active" : ""
              }`}
            >
              Acontecimientos noticiosos
            </Link>
          </li>
        </ul>
        <ul className="nav__list flex">
          <li className="nav__item">
            <p className="text-font-color font-light">santiago8628@gmail.com</p>
          </li>
          <li className="nav__item" onClick={() => navigate("?authLogin=true")}>
            <p className="nav__title font-semibold">Iniciar Sesion</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
