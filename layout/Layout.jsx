import Head from "next/head";
import Navbar from "../components/Navbar";
import Modal from "react-modal";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import useEcuot from "../hooks/useEcuot";
import RegistrarUsuario from "@/components/RegistrarUsuario";

const customStylesMobile = {
  content: {
    top: "auto",
    left: "auto",
    right: 0,
    bottom: 0,
    height: "calc(100vh - 96px)",
  },
};

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
      {modal && (
        <Modal isOpen={modal} style={customStylesMobile}>
          <RegistrarUsuario />
        </Modal>
      )}
    </>
  );
}
