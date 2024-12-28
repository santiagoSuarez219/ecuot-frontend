import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEcuot } from "../../../ecuot";
import handleDate from "../../../utils/formatDate";

export default function NewsModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showModal = queryParams.get("completeNewsInformation") ? true : false;

  const news = useEcuot((state) => state.news);

  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
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
            <div className="fixed inset-0 bg-black/60 " />
          </TransitionChild>

          <div className="modal__form fixed inset-0 overflow-y-auto">
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
                <DialogPanel className="w-full max-w-screen-lg transform overflow-hidden rounded-2xl bg-[#D9D9D9] text-left align-middle shadow-xl transition-all px-4 py-12 md:p-6 lg:p-12 [&>p]:mt-4 lg:[&>p]:mt-8 [&>p]:text-base lg:[&>p]:text-xl [&>p>span]:font-semibold [&>p]:whitespace-pre-line">
                  <span
                    className="absolute top-0 right-0 text-septenary font-bold text-2xl md:text-4xl p-4 cursor-pointer"
                    onClick={() => {
                      navigate(location.pathname, { replace: true });
                    }}
                  >
                    X
                  </span>
                  <h2 className="text-xl lg:text-3xl font-semibold">
                    {news?.newsName}
                  </h2>
                  <p>{news?.description}</p>
                  <p>
                    <span>
                      Fecha de la noticia: <br />{" "}
                    </span>
                    {news ? handleDate(news?.newsDate) : "No hay fecha"}
                  </p>
                  <div className="w-full flex justify-center mt-10">
                    <input
                      type="button"
                      value="Ir actuacion urbanistica"
                      className="bg-primary text-white text-lg lg:text-xl rounded-md font-semibold py-2 px-4 cursor-pointer hover:scale-105 transition-all"
                      onClick={() =>
                        navigate(
                          `/interventions/${news?.intervention._id}/datasheet`
                        )
                      }
                    />
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
