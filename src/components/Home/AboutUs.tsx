import team from "../../assets/img/team2.jpg";
import video_figure from "../../assets/img/video2.jpg";
import { aboutUsText } from "../../utils/aboutUsText";

export default function AboutUs() {
  return (
    <section className="layout__about-us mx-12 rounded-[60px] relative mt-8 pt-16 pb-[17rem] shadow-lg  px-28 flex gap-8 z-10 overflow-hidden min-h-[720px]">
      <div className="about-us__content">
        <h1 className="about-us__title text-[4.5rem] capitalize text-primary font-semibold leading-none ">
          Sobre <br />
          nosotros
        </h1>
        <p className="about-us__text text-xl mt-8 w-[55%] text-font-color font-medium ">
          {aboutUsText.description}
        </p>
        <div className="absolute top-24 right-24 h-72 w-[30rem] bg-primary rounded-[60px] overflow-hidden aspect-square p-8 flex justify-center items-center text-secondary cursor-pointer hover:scale-105 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-64 w-64 "
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="about-us__figures">
          <ul className="figures__list">
            <li className="figures__item figures__item--figure-team -left-[4rem] -bottom-[3rem]">
              <div className="figure_container">
                <img
                  src={team}
                  alt="team-figure"
                  className="figure__img w-[500px]"
                />
              </div>
            </li>
            <li className="figures__item figures__item--figure-team -bottom-[8rem] right-[3rem]">
              <div className="figure_container w-[500px]">
                <img
                  src={video_figure}
                  alt="video-figure"
                  className="figure__img"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
