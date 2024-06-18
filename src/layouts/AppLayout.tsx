import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "../components/Auth/Login";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./scroll.css";

export default function AppLayout() {
  return (
    <div className="layout content_page ">
      <NavBar />
      <Outlet />
      <Footer />
      <Login />
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </div>
  );
}
