import { useQuery } from "@tanstack/react-query";

import UrbanPlanningInterventions from "../components/Home/UrbanPlanningInterventions";
import DocumentsSection from "../components/Home/DocumentsSection";
import { getLatestInterventions } from "../api/InterventionAPI";
import Statistics from "../components/Home/Statistics";
import VideoModal from "../components/Home/VideoModal";
import ShortCuts from "../components/Home/ShortCuts";
import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
import Footer from "../components/Footer";

export default function HomeView() {
  const {
    data: interventions,
    isError: errorInterventions,
    isLoading: isLoadingIntervention,
  } = useQuery({
    queryKey: ["latest_interventions"],
    queryFn: getLatestInterventions,
  });

  if (isLoadingIntervention) return "Cargando ...";
  if (errorInterventions) return "Ha ocurrido un error";

  if (interventions)
    return (
      <section>
        <Banner />
        <AboutUs />
        <ShortCuts />
        <UrbanPlanningInterventions interventions={interventions?.slice(-3)} />
        <Statistics />
        <DocumentsSection />
        <Footer />
        <VideoModal />
        {/* <ContactUsSection /> */}
      </section>
    );
}
