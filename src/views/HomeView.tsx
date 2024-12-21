import { useQuery } from "@tanstack/react-query";

import UrbanPlanningInterventions from "../components/Home/UrbanPlanningInterventions";
import DocumentsSection from "../components/Home/DocumentsSection";
import { getInterventions } from "../api/InterventionAPI";
import Statistics from "../components/Home/Statistics";
import VideoModal from "../components/Home/VideoModal";
import ShortCuts from "../components/Home/ShortCuts";
import TeamWork from "../components/Home/TeamWork";
import AboutUs from "../components/Home/AboutUs";
import { getInfo } from "../api/InformationAPI";
import Banner from "../components/Home/Banner";
import Footer from "../components/Footer";

export default function HomeView() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["information"],
    queryFn: getInfo,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const {
    data: interventions,
    isError: errorInterventions,
    isLoading: isLoadingIntervention,
  } = useQuery({
    queryKey: ["interventions"],
    queryFn: getInterventions,
  });

  if (isLoading || isLoadingIntervention) return "Cargando ...";
  if (isError || errorInterventions) return "Ha ocurrido un error";

  if (data)
    return (
      <section>
        <Banner />
        <AboutUs />
        <ShortCuts />
        <UrbanPlanningInterventions interventions={interventions?.slice(-3)} />
        <Statistics />
        <DocumentsSection />
        <TeamWork />
        <Footer />
        <VideoModal />
        {/* <ContactUsSection /> */}
      </section>
    );
}
