export default function Statistics() {
  return (
    <div className="mt-8 lg:mt-20 flex px-4 lg:px-56 gap-4 lg:gap-12">
      <figure className="hidden md:block w-[300px] lg:w-[500px] h-[330px] lg:h-[500px] bg-red-200 rounded-2xl overflow-hidden relative">
        <img
          src="statistics.jpg"
          alt="statistics"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="w-full md:w-[calc(100%-316px)] lg:w-[calc(100%-548px)] font-semibold flex flex-col lg:pr-12 [&>p]:text-base [&>p]:lg:text-xl [&>p]:text-septenary [&>p]:mt-2 lg:[&>p]:mt-5">
        <h3 className="text-primary text-3xl lg:text-5xl text-center md:text-left">
          Estadísticas
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus
          erat a vestibulum hendrerit. Quisque hendrerit luctus nulla, ac
          viverra velit venenatis a. Donec suscipit laoreet felis, nec fermentum
          elit ullamcorper sit amet. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis rhoncus erat a vestibulum hendrerit.
        </p>
        <p>
          Quisque hendrerit luctus nulla, ac viverra velit venenatis a. Donec
          suscipit laoreet felis, nec fermentum elit ullamcorper sit amet.
        </p>
        <h3 className="mt-4 w-[100px] lg:w-[165px] py-2 lg:py-5 bg-primary text-white text-center cursor-pointer lg:rounded-3xl rounded-xl text-lg lg:text-xl justify-self-end lg:mt-auto transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-105">
          Ver más
        </h3>
      </div>
    </div>
  );
}
