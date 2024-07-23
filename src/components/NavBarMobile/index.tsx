import { useLocation } from "react-router-dom";

export default function NavBarMobile() {
  const location = useLocation();
  return (
    <div className="md:hidden bg-primary px-6 py-4 flex justify-between items-center">
      <h1
        className={`uppercase text-5xl font-bold text-white ${
          location.pathname === "/" ? "hidden" : "block"
        }
        `}
      >
        Ecuot
      </h1>
      <figure
        className={`w-1/3 bg-white rounded-full ${
          location.pathname.length > 1 ? "hidden" : "block"
        }`}
      >
        <img
          src="logo.avif"
          alt="logo"
          className="w-full h-full aspect-square"
        />
      </figure>
      <figure className="bg-white rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 text-primary"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </figure>
    </div>
  );
}
