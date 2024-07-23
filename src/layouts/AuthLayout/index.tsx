import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function AuthLayout() {
  return (
    <div className="w-full h-screen">
      <Outlet />
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </div>
  );
}
