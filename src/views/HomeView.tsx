import Banner from "../components/Home/Banner";
import AboutUs from "../components/Home/AboutUs";
import UrbanPlanningInterventions from "../components/Home/UrbanPlanningInterventions";
import ShortCuts from "../components/Home/ShortCuts";
import Statistics from "../components/Home/Statistics";
import DocumentsSection from "../components/Home/DocumentsSection";
import TeamWork from "../components/Home/TeamWork";

export default function HomeView() {
  return (
    <section className="section__home w-full ">
      <Banner />
      <AboutUs />
      <UrbanPlanningInterventions />
      <ShortCuts />
      <Statistics />
      <DocumentsSection />
      <TeamWork />
    </section>
  );
}
