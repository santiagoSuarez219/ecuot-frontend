import { useNavigate } from "react-router-dom";
import { useEcuot } from "../../../ecuot";

type NoInterventionDataSheetProps = {
  interventionId: string;
  interventionName: string;
};

export default function NoInterventionDataSheet({
  interventionId,
  interventionName,
}: NoInterventionDataSheetProps) {
  const navigate = useNavigate();
  const user = useEcuot((state) => state.user);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 md:py-0 md:px-6">
      <h2 className="text-3xl md:text-[3rem] text-white font-medium text-center">
        {`No se ha encontrado información de ${interventionName}`}
      </h2>
      {user && (
        <p className="hidden md:block text-lg md:text-[1.5rem] mt-4 md:mt-6 text-white text-center">
          ¿Deseas crear una ficha técnica?
        </p>
      )}
      <div className="w-full md:w-auto flex flex-col md:justify-center md:flex-row mt-12 gap-4 md:gap-6 md:pb-4">
        {user && (
          <input
            type="button"
            value="Crear ficha tecnica"
            className="hidden md:block w-full md:w-96 py-6 rounded-lg text-xl font-medium bg-white hover:scale-105 transition-all cursor-pointer"
            onClick={() =>
              navigate(`/interventions/${interventionId}/datasheet/create`)
            }
          />
        )}
        <input
          type="button"
          value="Volver"
          className="w-full md:w-96 md:py-6 py-4 rounded-lg text-lg md:text-xl font-medium bg-white hover:scale-105 transition-all cursor-pointer"
          onClick={() => navigate("/interventions")}
        />
      </div>
    </div>
  );
}
