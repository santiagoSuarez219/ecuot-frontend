import Head from "next/head";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import useEcuot from "../hooks/useEcuot";

import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

export default function Layout({ children, title = "", description = "" }) {
  const { modal, handleChangeModal } = useEcuot();

  return (
    <>
      <Head>
        <title>{`Ecuot - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="w-full min-h-screen flex flex-col md:block bg-white">
        <Navbar />
        {children}
      </div>
      {/* {modal && (
        <Modal isOpen={modal} style={customStyles}>
          Hola
        </Modal>
      )} */}
      <ToastContainer />
    </>
  );
}
