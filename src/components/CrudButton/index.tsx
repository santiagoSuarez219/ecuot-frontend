import { useLocation, useNavigate } from "react-router-dom";

type CrudButtonProps = {
  icon: string;
  text: string;
  route: string;
};

export default function CrudButton(props: CrudButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleColor = () => {
    if (location.pathname === "/conflicts") {
      return "bg-quaternary";
    }
    if (location.pathname === "/news") {
      return "bg-quinary";
    }
    return "bg-primary";
  };

  return (
    <div
      className={`${
        props.text === "Eliminar" ? "bg-red-700" : handleColor()
      } flex rounded-lg h-16 overflow-hidden items-center gap-6 pl-6 cursor-pointer hover:scale-105 transition-all`}
      onClick={() => {
        if (props.text === "Agregar") {
          navigate(props.route);
        }
      }}
    >
      <figure className={`text-white`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={props.icon} />
        </svg>
      </figure>
      <h3 className={`text-3xl text-white font-semibold`}>{props.text}</h3>
    </div>
  );
}
