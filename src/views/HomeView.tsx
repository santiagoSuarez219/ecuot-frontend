import Banner from "../components/Home/Banner";
import AboutUs from "../components/Home/AboutUs";

export default function HomeView() {
  return (
    <section className="section__home w-full">
      <Banner />
      <AboutUs />
    </section>
  );
}
