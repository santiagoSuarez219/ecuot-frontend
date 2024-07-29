import { useNavigate } from "react-router-dom";
import { Intervention } from "../../../types";
import { useEcuot } from "../../../ecuot";
import DialogDeleteInterventionDataSheet from "../DialogDeleteInterventionDataSheet";

type InterventionDataSheetProps = {
  intervention: Intervention;
};

export default function InterventionDataSheetStart({
  intervention,
}: InterventionDataSheetProps) {
  const navigate = useNavigate();
  const user = useEcuot((state) => state.user);

  return (
    <>
      <div className="layout__intervention-sheet w-full h-screen md:px-20 py-4 md:py-12 flex gap-6 justify-center bg-gradient-to-r from-quaternary relative">
        <div className="layout__intervention-sheet__content w-[90%] h-[100%] shadow-xl rounded-2xl flex overflow-hidden bg-primary">
          <div className="w-full h-full flex flex-col justify-center items-center px-6">
            <h2 className="text-[3rem] w-3/4 text-white font-medium text-center ">
              {`Ficha técnica de ${intervention.interventionName}`}
            </h2>
            <div className="flex mt-12 gap-6 flex-wrap justify-center ">
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
                    onClick={() =>
                      navigate(
                        `/interventions/${intervention._id}/datasheet/${intervention.datasheet}/edit`
                      )
                    }
                  />
                  <input
                    type="button"
                    value="Eliminar"
                    className="w-80 py-6 rounded-lg text-xl font-medium bg-red-700 text-white hover:scale-105 transition-all cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/interventions/${intervention._id}/datasheet/?deleteUrbanInterventionDataSheet=true`
                      )
                    }
                  />
                </>
              )}
              <input
                type="button"
                value="Volver"
                className="w-80 py-6 rounded-lg text-xl font-medium bg-white hover:scale-105 transition-all cursor-pointer"
                onClick={() => navigate("/interventions")}
              />
            </div>
          </div>
        </div>
      </div>
      <DialogDeleteInterventionDataSheet intervention={intervention} />
    </>
  );
}
