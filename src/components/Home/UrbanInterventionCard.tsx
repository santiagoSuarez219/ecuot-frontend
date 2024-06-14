type Data = {
  title: string;
  image: string;
};

export default function UrbanInterventionCard(props: Data) {
  return (
    <div className="urban-interventions__item w-full h-[28rem] rounded-xl cursor-pointer hover:scale-105 transition-all bg-secondary">
      <figure className="item__image-container bg-red-300 w-full h-[100%] rounded-xl relative">
        <img
          src={props.image}
          alt={props.title}
          className="item__image rounded-xl object-cover h-full w-full aspect-square"
        />
        <h2 className="item__title absolute left-6 bottom-6 px-4 py-2 rounded-xl text-2xl bg-secondary font-semibold ">
          {props.title}
        </h2>
      </figure>
    </div>
  );
}
