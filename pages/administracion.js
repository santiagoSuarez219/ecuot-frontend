import Modal from "react-modal";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import Layout from "../layout/Layout";
import useEcuot from "../hooks/useEcuot";

function PanelAdministracion() {
  return (
    <Layout
      title={"Administracion"}
      description="Crea, edita y elimna intervenciones, conflictos y noticas, registro de usuarios y mucho mas"
    >
      administracion
    </Layout>
  );
}
export default PanelAdministracion;
