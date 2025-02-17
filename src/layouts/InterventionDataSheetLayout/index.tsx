import { Outlet, useLocation, useNavigate } from "react-router-dom";

import ItemNav from "../../components/InterventionDataSheet/ItemNav";
import {
  IoBookOutline,
  IoMenuOutline,
  IoNewspaperOutline,
  IoReturnUpBack,
} from "react-icons/io5";

export default function InterventionSheetLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (route: string) => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace(/[^/]+$/, route);
    navigate(newPath, { replace: true });
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full lg:h-screen xl:px-20 xl:py-12 py-4 flex gap-6 lg:justify-center lg:bg-gradient-to-r from-septenary to-senary relative ">
      <div className="w-full  lg:w-[85%] h-[100%] rounded-2xl flex flex-col lg:flex-row lg:overflow-hidden relative">
        <Outlet />
      </div>
      <nav className="hidden lg:block intervention-sheet__nav w-[10%] h-full shadow-xl rounded-2xl bg-white">
        <ul className="intervention-sheet__nav__list w-full h-full text-center flex flex-col justify-around ">
          <ItemNav
            title="Descripcion"
            svg="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            route={`description`}
          />
          <ItemNav
            title="Caracteristicas"
            svg="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            route={`features`}
          />
          <ItemNav
            title="Conflictividad"
            svg="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
            route="conflictivity"
          />
          <ItemNav
            title="Espacializacion"
            svg="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            route="spatialization"
          />
          <ItemNav
            title="Volver"
            svg="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            route="return"
          />
        </ul>
      </nav>
      <nav className="lg:hidden w-full fixed bottom-0 bg-primary text-white font-semibold py-2 px-4">
        <ul className="w-full flex justify-between text-sm md:text-base [&>li]:flex [&>li]:flex-col [&>li]:gap-1 [&>li]:items-center">
          <li onClick={() => handleClick("description")}>
            <IoMenuOutline className="size-8" />
            <p>Descripción</p>
          </li>
          <li onClick={() => handleClick("features")}>
            <IoBookOutline className="size-8" />
            <p>Caracteristicas</p>
          </li>
          <li onClick={() => handleClick("conflictivity")}>
            <IoNewspaperOutline className="size-8" />
            <p>Conflictividad</p>
          </li>
          <li onClick={() => navigate(-1)}>
            <IoReturnUpBack className="size-8" />
            <p>Volver</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
