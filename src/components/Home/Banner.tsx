export default function Banner() {
  return (
    <div className="w-full px-4 lg:px-10 md:mt-8 lg:mt-0">
      <div className="poster px-4 rounded-2xl md:rounded-3xl lg:rounded-[80px]">
        <figure className="absolute inset-0">
          <img
            src="main-poster.avif"
            alt="main-poster"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="absolute inset-0 bg-primary opacity-70"></div>

        <div className="relative z-10 flex flex-col justify-center h-full text-white max-w-[817px] font-semibold py-4 md:py-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl ">
            Estudios sobre el conflicto urbano asociados a decisiones de
            ordenamiento territorial
          </h1>
          <p className="mt-4 md:mt-11 text-lg lg:text-xl underline underline-offset-8 cursor-pointer ">
            Conoce el proyecto
          </p>
        </div>
      </div>
    </div>
  );
}
