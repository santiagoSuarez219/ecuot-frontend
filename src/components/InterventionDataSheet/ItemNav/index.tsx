import { useLocation, useNavigate } from "react-router-dom";

type ItemNavProps = {
  title: string;
  svg: string;
  route: string;
};

export default function ItemNav(props: ItemNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (props.title === "Salir") {
      navigate(-2);
      return;
    }

    const currentPath = location.pathname;
    const newPath = currentPath.replace(/[^/]+$/, props.route);
    navigate(newPath, { replace: true });
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
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-12 p-2 rounded-full mb-2 text-white
        ${
          location.pathname.includes(props.route)
            ? "bg-secondary"
            : "bg-primary"
        }`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={props.svg} />
      </svg>
      <h3 className="font-medium">{props.title}</h3>
    </li>
  );
}
