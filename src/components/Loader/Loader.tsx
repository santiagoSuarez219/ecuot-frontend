import { waveform } from "ldrs";

export default function Loader() {
  waveform.register();
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-white flex flex-col justify-center items-center">
      <figure className="h-56 aspect-video">
        <img
          src="/public/logo2.avif"
          alt="logo"
          className="w-full h-full object-contain aspect-video"
        />
      </figure>
      <l-waveform size="40" stroke="3.5" speed="1" color="#E9901E"></l-waveform>
    </div>
  );
}
