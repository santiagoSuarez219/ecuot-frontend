import { useContext } from "react";
import EcuotContext from "../context/EcuotProvider";

const useEcuot = () => {
  return useContext(EcuotContext);
};
export default useEcuot;
