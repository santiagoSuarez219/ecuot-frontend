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
      <div className="w-full h-[calc(100vh-80px)] lg:h-[calc(100vh-160px)] py-4 lg:py-12 flex gap-6 justify-center bg-gradient-to-r from-quaternary px-4 lg:px-0">
        <div className="w-full lg:w-[90%] h-[100%] rounded-2xl flex overflow-hidden relative">
          <figure className="absolute inset-0">
            <img
              src="/main-poster.avif"
              alt="main-poster"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="absolute inset-0 bg-primary opacity-70"></div>

          <div className="w-full h-full flex flex-col justify-center items-center px-4 lg:px-6 z-10">
            <h2 className="text-4xl lg:text-[3rem] lg:w-3/4 text-white font-medium text-center ">
              {`Ficha técnica de ${intervention.interventionName}`}
            </h2>
            <div className="w-full flex mt-4 lg:mt-12 gap-4 lg:gap-6 flex-wrap justify-center px-4">
              <input
                type="button"
                value="Comenzar"
                className="w-full md:w-80 py-6 rounded-lg text-lg lg:text-xl font-medium bg-white hover:scale-105 transition-all cursor-pointer"
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
                    className="hidden lg:block w-80 py-6 rounded-lg text-lg lg:text-xl font-medium bg-white hover:scale-105 transition-all cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/interventions/${intervention._id}/datasheet/${intervention.datasheet}/edit`,
                        {
                          replace: true,
                        }
                      )
                    }
                  />
                </>
              )}
              {user?.rol === "researcher" && (
                <>
                  <input
                    type="button"
                    value="Eliminar"
                    className="hidden lg:block w-80 py-6 rounded-lg text-lg lg:text-xl font-medium bg-red-700 text-white hover:scale-105 transition-all cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/interventions/${intervention._id}/datasheet/?deleteUrbanInterventionDataSheet=true`,
                        {
                          replace: true,
                        }
                      )
                    }
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <DialogDeleteInterventionDataSheet intervention={intervention} />
    </>
  );
}
