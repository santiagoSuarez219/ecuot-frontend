import { useNavigate } from "react-router-dom";

type ItemNavProps = {
  title: string;
  svg: string;
  active: boolean;
  route: string;
};

export default function ItemNav(props: ItemNavProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/intervention/${props.route}`);
  };

  return (
    <li
      className="intervention-sheet__nav__item flex flex-col items-center relative cursor-pointer"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={`w-12 p-2 rounded-full mb-2 text-white ${
          props.active ? "bg-secondary" : "bg-primary"
        }`}
      >
        <path stroke-linecap="round" stroke-linejoin="round" d={props.svg} />
      </svg>
      <h3 className="font-medium">{props.title}</h3>
    </li>
  );
}
