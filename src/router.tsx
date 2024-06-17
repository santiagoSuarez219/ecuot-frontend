import { BrowserRouter, Routes, Route } from "react-router-dom";

import UrbanPlanningInterventions from "./views/UrbanPlanningInterventionsView";
import Spatialization from "./components/InterventionSheet/Spatialization";
import Conflictivity from "./components/InterventionSheet/Conflictivity";
import InterventionSheetLayout from "./layouts/InterventionSheetLayout";
import Description from "./components/InterventionSheet/Description";
import Features from "./components/InterventionSheet/Features";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./views/HomeView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeView />} index />
          <Route
            path="/interventions"
            element={<UrbanPlanningInterventions />}
          />
        </Route>
        <Route element={<InterventionSheetLayout />}>
          <Route path="/intervention/description" element={<Description />} />
          <Route path="/intervention/features" element={<Features />} />
          <Route
            path="/intervention/conflictivity"
            element={<Conflictivity />}
          />
          <Route
            path="/intervention/spatialization"
            element={<Spatialization />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
