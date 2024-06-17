type CrudButtonProps = {
  icon: string;
  text: string;
  color: string;
};

export default function CrudButton(props: CrudButtonProps) {
  return (
    <div
      className={`bg-${props.color} rounded-lg h-16 flex overflow-hidden items-center gap-6 pl-6 cursor-pointer hover:scale-105 transition-all `}
    >
      <figure className={`text-white`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d={props.icon} />
        </svg>
      </figure>
      <h3 className={`text-3xl text-white font-semibold`}>{props.text}</h3>
    </div>
  );
}
