import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../hooks/useAuth";
import NavBar from "../components/NavBar";
import "./scroll.css";
import ScrollToTop from "../components/ScrollToTop";

export default function AppLayout() {
  const { data, isLoading } = useAuth();

  //TODO: Cambiar por un loading
  if (isLoading) return "Cargando ...";

  return (
    <div className="layout content_page">
      <NavBar user={data} />
      <ScrollToTop />
      <Outlet />
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </div>
  );
}
