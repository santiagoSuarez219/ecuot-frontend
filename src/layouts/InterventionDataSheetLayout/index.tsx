import { Outlet } from "react-router-dom";

import ItemNav from "../../components/InterventionDataSheet/ItemNav";

export default function InterventionSheetLayout() {
  return (
    <div className="layout__intervention-sheet w-full h-screen px-20 py-12 flex gap-6 justify-center bg-gradient-to-r from-septenary to-senary">
      <div className="layout__intervention-sheet__content w-[85%] h-[100%] shadow-xl rounded-2xl flex overflow-hidden relative">
        <Outlet />
      </div>
      <nav className="intervention-sheet__nav w-[10%] h-full shadow-xl rounded-2xl bg-white">
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
            title="Salir"
            svg="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            route="return"
          />
        </ul>
      </nav>
    </div>
  );
}
