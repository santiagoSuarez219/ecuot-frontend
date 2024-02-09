import { useState, createContext } from "react";

const EcuotContext = createContext();

const EcuotProvider = ({ children }) => {
  return <EcuotContext.Provider value={{}}>{children}</EcuotContext.Provider>;
};

export { EcuotProvider };
export default EcuotContext;
