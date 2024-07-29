export default function Statistics() {
  return (
    <section className="layout__statistics mt-24 mb-8 md:mx-12 mx-4">
      <div className="w-full md:h-[34rem] flex flex-col md:flex-row md:justify-between">
        <figure className="w-full md:w-[50%] flex md:px-16 md:pt-16">
          <img
            src="statistics.avif"
            alt="statistics-image"
            className="aspect-square w-full h-full object-fit"
          />
        </figure>
        <div className="w-full md:w-1/2 flex flex-col mt-6 md:mt-0">
          <h2 className="text-4xl md:text-[4.5rem] capitalize text-primary text-center md:text-left font-semibold mb-4 md:mb-12">
            Estadisticas
          </h2>
          <p className="text-xl mb-6 text-font-color font-medium text-justify ">
            En esta sección podrás encontrar algunos datos estadísticos
            relevantes que te ayudarán a entender mejor la situación actual de
            la ciudad.
          </p>
          <div className="w-full md:w-auto bg-white shadow-lg md:rounded-[60px] rounded-2xl md:h-96 md:aspect-video flex justify-center items-center cursor-pointer self-end border-2 border-primary relative">
            <img
              src="logo.avif"
              alt="logo"
              className="w-[16rem] md:w-[22rem] aspect-square object-fit"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-32 text-primary rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all"
            >
              <path
                fillRule="evenodd"
                d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
