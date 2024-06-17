import UrbanPlanningInterventions from "../components/Home/UrbanPlanningInterventions";
import DocumentsSection from "../components/Home/DocumentsSection";
import ContactUsSection from "../components/Home/ContactUsSection";
import Statistics from "../components/Home/Statistics";
import ShortCuts from "../components/Home/ShortCuts";
import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
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
      <ContactUsSection />
    </section>
  );
}
