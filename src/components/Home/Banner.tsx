export default function Banner() {
  return (
    <div className="home__banner mt-6 md:mt-0 md:mb-12 relative mx-4 md:mx-12 pr-0 md:pl-24 md:py-6 md:rounded-[60px] rounded-2xl bg-primary z-10 overflow-x-hidden overflow-y-hidden ">
      <div className="banner__content flex px-6 z-30">
        <div className="banner__title md:w-[70%] md:py-32 py-12">
          <h1 className="text-4xl md:text-[4rem] leading-none font-medium text-white flex flex-col ">
            Estudios sobre el conflicto urbano asociados a decisiones de
            ordenamiento territorial
          </h1>
        </div>
        <div className="banner__logo hidden md:block w-[30%] aspect-square rounded-full bg-white p-2 self-center relative ">
          <img src="logo.avif" alt="logo" />
        </div>
      </div>
    </div>
  );
}
