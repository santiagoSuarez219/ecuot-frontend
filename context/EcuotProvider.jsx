import { useState, createContext } from "react";

const EcuotContext = createContext();

const EcuotProvider = ({ children }) => {
  const [modalNavbar, setModalNavbar] = useState(false);

  const handleOpenModal = () => {
    setModalNavbar(true);
  };

  const handleCloseModal = () => {
    setModalNavbar(false);
  };

  return (
    <EcuotContext.Provider
      value={{
        modalNavbar,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </EcuotContext.Provider>
  );
};

export { EcuotProvider };
export default EcuotContext;
