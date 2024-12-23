import { Link } from "react-router-dom";

type ShortCutItemProps = {
  name: string;
  url_image: string;
  alt_image: string;
  color: string;
  route: string;
};

export default function ShortCutItem({
  name,
  url_image,
  alt_image,
  color,
  route,
}: ShortCutItemProps) {
  return (
    <>
      <div className="w-full h-[300px] lg:h-[460px] rounded-xl md:rounded-3xl relative overflow-x-hidden flex justify-center items-center">
        <figure className="absolute inset-0">
          <img
            src={`${url_image}.jpg`}
            alt={alt_image}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className={`absolute inset-0 ${color} opacity-70`}></div>
        <div className="relative z-10 flex flex-col pt-32 lg:pt-56 items-center justify-between h-full text-white max-w-[236px] font-semibold">
          <h1 className="text-2xl lg:text-4xl text-center">{name}</h1>
          <Link
            to={route}
            className="primary-button md:w-[165px] mb-4 lg:mb-16 text-center"
          >
            Ver más
          </Link>
        </div>
      </div>
    </>
  );
}
