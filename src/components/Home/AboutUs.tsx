import { Information } from "../../types";

type AboutUsProps = {
  data: Information;
};

export default function AboutUs({ data }: AboutUsProps) {
  return (
    <section
      className="layout__about-us md:bg-senary md:mx-12 mx-4 md:rounded-[60px] rounded-2xl relative md:mt-8 mt-6 md:py-24  shadow-lg md:px-28 flex gap-8 z-10 overflow-hidden pb-6 "
      id="about-us"
    >
      <div className="about-us__content flex flex-col-reverse md:flex-row md:gap-12 gap-6">
        <div className="md:w-[50%] px-6 md:px-6">
          <h1 className="about-us__title text-4xl md:text-[4.5rem] capitalize text-primary font-semibold leading-none ">
            Sobre nosotros
          </h1>
          <p className="about-us__text text-xl md:mt-8 mt-4 text-font-color md:text-white font-medium ">
            {data.aboutUs}
          </p>
        </div>
        {/* TODO: Crear el modal para ver el video */}
        <div className="w-full md:w-[40%] bg-white p-6 rounded-xl overflow-hidden aspect-video flex justify-center items-center text-secondary cursor-pointer relative">
          <img
            src="logo.avif"
            alt="logo"
            className="aspect-square w-[16rem] md:w-[22rem]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
