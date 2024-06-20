import { useNavigate } from "react-router-dom";

type CrudButtonProps = {
  icon: string;
  text: string;
  color: string;
  route: string;
};

export default function CrudButton(props: CrudButtonProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        props.text === "Eliminar" ? "bg-red-700" : "bg-primary"
      } rounded-lg h-16 flex overflow-hidden items-center gap-6 pl-6 cursor-pointer hover:scale-105 transition-all`}
      onClick={() => navigate(`${props.route ? `?${props.route}=true` : ""}`)}
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
