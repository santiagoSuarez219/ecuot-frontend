import logo from "../../assets/img/logo2.png";
import picture_house from "../../assets/img/logo4sinfondo.png";

export default function Banner() {
  return (
    <div className="home__banner relative mx-12 pr-0 pl-32 rounded-[60px] bg-primary z-10 overflow-x-hidden overflow-y-hidden ">
      <div className="banner__content flex px-6 z-30">
        <div className="banner__title w-[70%] pt-24 pb-[24rem]">
          <h1 className="text-[4rem] leading-none font-medium  text-white flex flex-col ">
            Estudios sobre el conflicto urbano asociados a decisiones de
            ordenamiento territorial
          </h1>
        </div>
        <div className="banner__logo w-[30%] self-center ">
          <img
            src={logo}
            alt="logo"
            className="aspect-square w-[400px] rounded-full bg-white p-2"
          />
        </div>
      </div>
      <div className="banner__figures absolute -bottom-[5.5rem] -left-16 z-20">
        <img src={picture_house} alt="picture_of_a_house" />
      </div>
    </div>
  );
}

//pb-72 pt-24
