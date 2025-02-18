import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";

export default function StatisticsModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showModal = queryParams.get("watchStatistic") ? true : false;
  const option = queryParams.get("option");

  const handleOption = (option: number) => {
    if (option === 1) {
      return "https://lookerstudio.google.com/embed/reporting/9965f25f-5273-4332-90a8-7786363d676b/page/HN5sE";
    }
    if (option === 2) {
      return "https://lookerstudio.google.com/embed/reporting/d26170b8-3200-4ba5-ba05-400e14c02292/page/XnseE";
    }
    if (option === 3) {
      return "https://lookerstudio.google.com/embed/reporting/12d94796-6a6c-4179-a5e2-5261bb0c8ad7/page/legiE";
    }
  };

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
                <DialogPanel className="w-full max-w-screen-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all ">
                  <figure className="w-full aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={handleOption(Number(option))}
                      title="Looker Studio"
                      sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                      allowFullScreen
                    ></iframe>
                  </figure>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
