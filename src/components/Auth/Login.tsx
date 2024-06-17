import { Link } from "react-router-dom";
import { Fragment } from "react";
// import { Dialog, Transition } from "@headlessui/react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const modalLogin = queryParams.get("authLogin");
  const show = modalLogin ? true : false;

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            navigate(location.pathname, { replace: true });
          }}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-2xl transform overflow-hidden rounded-2xl align-middle shadow-xl transition-all p-4 md:p-16 bg-white">
                  <DialogTitle
                    as="h3"
                    className="text-3xl md:text-5xl font-bold  mt-5 mb-2 text-primary text-left"
                  >
                    Iniciar sesion
                  </DialogTitle>

                  <p className="text-font-color mb-5 text-left">
                    Introduzca su dirección de correo electrónico para acceder a
                    su cuenta
                  </p>
                  <form
                    noValidate
                    className="my-4 w-full space-y-4 flex flex-col mx-auto text-start"
                  >
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:outline-none focus:border focus:border-primary transition-colors"
                        type="email"
                        placeholder="m@example.com"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <label htmlFor="password">Password</label>
                        <p className="underline underline-offset-1 text-sm cursor-pointer">
                          <Link to={"olvide-password"}>
                            Olvidaste tu contraseña
                          </Link>
                        </p>
                      </div>
                      <input
                        id="password"
                        className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:outline-none focus:border focus:border-primary transition-colors"
                        type="password"
                        placeholder="********"
                      />
                    </div>
                    <input
                      type="submit"
                      value={"Iniciar Sesion"}
                      className="w-full bg-primary mb-5 py-3 text-white text-xl rounded cursor-pointer hover:bg-secondary transition-colors"
                    />
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
