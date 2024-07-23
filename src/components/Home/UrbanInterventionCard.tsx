import { useNavigate } from "react-router-dom";

type Data = {
  title: string;
  image: string;
};

export default function UrbanInterventionCard(props: Data) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/intervention/description");
  };

  return (
    <div
      className="urban-interventions__item w-full md:w-[30rem] h-[35rem] rounded-xl cursor-pointer hover:scale-105 transition-all bg-secondary"
      onClick={handleClick}
    >
      <figure className="item__image-container w-full h-[100%] rounded-xl relative">
        <img
          src={props.image}
          alt={props.title}
          className="item__image rounded-xl object-cover h-full w-full aspect-square"
        />
        <h2 className="item__title absolute left-6 right-6 bottom-6 px-4 py-2 rounded-xl text-xl lg:text-2xl bg-secondary font-semibold ">
          {props.title}
        </h2>
      </figure>
    </div>
  );
}
