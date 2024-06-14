type ShortCutItemProps = {
  title: string;
  icon: string;
};

export default function ShortCutItem(props: ShortCutItemProps) {
  return (
    <div className="shorcuts__item relative rounded-xl shadow-xl cursor-pointer hover:scale-105 transition-all ">
      <figure className="shorcut__icon">
        <img
          src={props.icon}
          alt={props.title}
          className="shorcut_img aspect-square"
        />
      </figure>
      <h2 className="shorcut__title bg-primary rounded-lg py-6 px-4 text-white font-semibold capitalize text-2xl w-full absolute text-center -bottom-8">
        {props.title}
      </h2>
    </div>
  );
}
