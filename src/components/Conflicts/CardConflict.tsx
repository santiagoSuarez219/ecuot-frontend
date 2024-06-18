import prueba from "../../assets/img/Estacion_de_transferencia.jpg";

export default function CardConflict() {
  return (
    <div className="urban-planning-interventions__item flex rounded-xl overflow-hidden flex-col text-font-color border border-secondary cursor-pointer">
      <div className="flex ">
        <figure className="w-[40%] relative">
          <img
            src={prueba}
            alt=""
            className="w-full h-full aspect-square object-cover" // TODO: Modificar la opacidad al 40
          />
          <div className="hidden w-full h-full justify-center items-center absolute top-0 cursor-pointer">
            {/* // TODO:colocar display flex  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-20 text-delete"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </figure>
        <div className="w-[60%] pt-4 flex flex-col justify-between">
          <div className="px-4">
            <h3 className="text-3xl font-semibold text-primary mb-2">
              Inconformidad de parte de la Administración Municipal con la
              ejecución de la obra
            </h3>
            <p className="text-lg">
              El problema inicia con las quejas de los comerciantes por el
              retraso en las obras, esto da pie para que se denuncien luego ante
              el concejo problemas en el tipo de materiales, lo que da origen a
              una acción de verificación de parte de la contraloría
              identificándose las irregularidades, seguidamente en la entrega
              corpocentro denuncia problemas de acabados, lo que da pie para que
              la secretaria de obras públicas declare que hay un incumplimiento
              del contracto
            </p>
            <p className="text-xl mt-4 text-primary font-medium">
              Actuacion urbanistica asociada
            </p>
            <p className="text-lg">Bazares</p>
            <p className="text-xl mt-4 text-primary font-medium">
              Momento en el que se presenta la tension
            </p>
            <p className="text-lg">Ejecucion</p>
            <p className="text-xl mt-4 text-primary font-medium">
              Actores demandantes
            </p>
            <p className="text-lg">
              Comerciantes, concejo municipal, administración
            </p>
          </div>

          <input
            type="button"
            value="Ir a la actuacion urbanistica asociada"
            className="bg-primary text-white text-3xl font-semibold w-[calc(100vh+2rem)] py-2 cursor-pointer hover:bg-secondary transition-all"
          />
        </div>
      </div>
    </div>
  );
}
