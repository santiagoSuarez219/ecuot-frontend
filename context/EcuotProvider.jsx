import { useState, createContext } from "react";
import { toast } from "react-toastify";

const EcuotContext = createContext();

const EcuotProvider = ({ children }) => {
  const [modalNavbar, setModalNavbar] = useState(false);
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModalNavbar(true);
  };

  const handleCloseModal = () => {
    setModalNavbar(false);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  return (
    <EcuotContext.Provider
      value={{
        modalNavbar,
        handleOpenModal,
        handleCloseModal,
        modal,
        handleChangeModal,
        toast,
      }}
    >
      {children}
    </EcuotContext.Provider>
  );
};

export { EcuotProvider };
export default EcuotContext;
