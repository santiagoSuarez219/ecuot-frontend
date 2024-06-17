import { useNavigate } from "react-router-dom";

type ShortCutItemProps = {
  title: string;
  icon: string;
  route: string;
};

export default function ShortCutItem(props: ShortCutItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(props.route);
  };

  return (
    <div
      className="shorcuts__item bg-primary relative w-full h-56 rounded-xl shadow-xl cursor-pointer flex justify-center items-center hover:bg-secondary transition-colors"
      onClick={handleClick}
    >
      <h2 className="text-white font-semibold capitalize text-4xl text-center">
        {props.title}
      </h2>
    </div>
  );
}
