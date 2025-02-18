import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../hooks/useAuth";
import NavBar from "../components/NavBar";
import "./scroll.css";
import ScrollToTop from "../components/ScrollToTop";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Loader from "../components/Loader/Loader";

export default function AppLayout() {
  const { data, isLoading } = useAuth();

  if (isLoading) return <Loader />;
  return (
    <div className="layout content_page">
      <NavBar user={data} />
      <ScrollToTop />
      <Outlet />
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
      <Sidebar />
    </div>
  );
}
