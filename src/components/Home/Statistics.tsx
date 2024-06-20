import statistics_img from "../../assets/img/statistics2.png";

export default function Statistics() {
  return (
    <section className="layout__statistics mt-8 mb-8 mx-12 ">
      <div className="w-full h-[34rem] flex">
        <figure className="w-[50%] h-full flex">
          <img src={statistics_img} alt="" className="aspect-auto" />
        </figure>
        <div className="w-1/2 flex flex-col">
          <h2 className="text-[4.5rem] capitalize text-primary font-semibold">
            Estadisticas
          </h2>
          <p className="text-xl mt-8 text-font-color font-medium ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            deleniti quidem id aliquid officiis libero praesentium dolorem sequi
            eligendi tempora? Magnam ipsam, eaque reiciendis veniam natus
            molestiae explicabo aut! Vero?
          </p>
          <div className="bg-primary h-60 w-1/2 rounded-[60px] self-end flex justify-center items-center cursor-pointer hover:scale-105 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[50%] text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex items-center justify-center bg-red-200 relative aspect-video rounded-[60px] overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://lookerstudio.google.com/embed/reporting/1WhloLyiBE-pOP0xw8Pee1Mamekc-CGgH/page/D1hT"
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      </div> */}
    </section>
  );
}
