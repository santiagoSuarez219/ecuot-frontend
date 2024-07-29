import { useEcuot } from "../../ecuot";

type NoDataFoundProps = {
  title: string;
};

export default function NoDataFound(props: NoDataFoundProps) {
  const user = useEcuot((state) => state.user);
  return (
    <div className="w-full h-96 border-2 p-6 md:p-0 border-primary rounded-lg flex flex-col justify-center items-center text-septenary">
      <p className="text-[3rem] font-medium">{`No hay ${props.title}`}</p>
      {user ? (
        <p className="hidden md:block">{`Pulse el boton agregar para empezar a añadir ${props.title}`}</p>
      ) : (
        <p>{`Inicie sesion para empezar a añadir ${props.title}`}</p>
      )}
    </div>
  );
}
