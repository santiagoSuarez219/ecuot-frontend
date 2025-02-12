import { waveform } from "ldrs";
import Logo from "../../assets/logo2.avif";

export default function Loader() {
  waveform.register();
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-white flex flex-col justify-center items-center gap-6 lg:gap-12">
      <figure className="w-4/5 md:w-1/2 lg:w-1/4">
        <img src={Logo} alt="logo" className="w-full h-full object-contain" />
      </figure>
      <l-waveform size="40" stroke="3.5" speed="1" color="#E9901E"></l-waveform>
    </div>
  );
}
