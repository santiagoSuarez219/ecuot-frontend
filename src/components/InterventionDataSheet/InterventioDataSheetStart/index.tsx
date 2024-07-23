// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { toast } from "react-toastify";

// import { deleteInterventionDataSheetById } from "@/actions/delete-intervention-datasheet";

import { useNavigate } from "react-router-dom";
import { Intervention } from "../../../types";
import { useEcuot } from "../../../ecuot";

type InterventionDataSheetProps = {
  intervention: Intervention;
};

export default function InterventionDataSheetStart({
  intervention,
}: InterventionDataSheetProps) {
  const navigate = useNavigate();
  //   const addIntervention = useEcuot((state) => state.addIntervention);
  //   const interventionDataSheet = useEcuot(
  //     (state) => state.interventionDataSheet
  //   );
  const user = useEcuot((state) => state.user);
  //   const token = useEcuot((state) => state.token);

  //   useEffect(() => {
  //     addIntervention(intervention);
  //   }, [intervention]);

  //   const handleDeleteInterventionDataSheet = async () => {
  //     if (!intervention.datasheet) {
  //       return;
  //     }
  //     if (!token) {
  //       toast.error("No tienes permisos para eliminar la ficha técnica");
  //       return;
  //     }
  //     await deleteInterventionDataSheetById(
  //       intervention.datasheet,
  //       intervention._id,
  //       token
  //     );
  //     toast.success("Ficha eliminada correctamente");
  //     router.push(`/interventions`);
  //   };

  return (
    <div className="layout__intervention-sheet w-full h-screen md:px-20 py-4 md:py-12 flex gap-6 justify-center bg-gradient-to-r from-quaternary">
      <div className="layout__intervention-sheet__content w-[90%] h-[100%] shadow-xl rounded-2xl flex overflow-hidden bg-primary">
        <div className="w-full h-full flex flex-col justify-center items-center px-6">
          <h2 className="text-[3rem] w-3/4 text-white font-medium text-center ">
            {`Ficha técnica de ${intervention.interventionName}`}
          </h2>
          <div className="flex mt-12 gap-6 ">
            <input
              type="button"
              value="Comenzar"
              className="w-80 py-6 rounded-lg text-xl font-medium bg-white hover:scale-105 transition-all cursor-pointer"
              onClick={() =>
                navigate(
                  `/intervention-datasheet/${intervention._id}/${intervention.datasheet}/description`
                )
              }
            />
            {user && (
              <>
                <input
                  type="button"
                  value="Editar"
                  className="w-80 py-6 rounded-lg text-xl font-medium bg-white hover:scale-105 transition-all cursor-pointer"
                  //   onClick={() => {
                  //     router.push(
                  //       `/interventions/datasheet/edit/${intervention.datasheet}`
                  //     );
                  //   }}
                />
                <input
                  type="button"
                  value="Eliminar"
                  className="w-80 py-6 rounded-lg text-xl font-medium bg-red-700 text-white hover:scale-105 transition-all cursor-pointer"
                  //   onClick={handleDeleteInterventionDataSheet}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
