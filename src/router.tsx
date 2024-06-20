import { BrowserRouter, Routes, Route } from "react-router-dom";

import UrbanInterventionEditView from "./views/UrbanInterventionEditView";
import UrbanPlanningInterventions from "./views/UrbanPlanningInterventionsView";
import Spatialization from "./components/InterventionSheet/Spatialization";
import Conflictivity from "./components/InterventionSheet/Conflictivity";
import InterventionSheetLayout from "./layouts/InterventionSheetLayout";
import Description from "./components/InterventionSheet/Description";
import Features from "./components/InterventionSheet/Features";
import ConflictsView from "./views/ConflictsView";
import AppLayout from "./layouts/AppLayout";
import UsersView from "./views/UsersView";
import NewsView from "./views/NewsView";
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
          <Route
            path="/interventions/:interventionId/edit"
            element={<UrbanInterventionEditView />}
          />
          <Route path="/conflicts" element={<ConflictsView />} />
          <Route path="/news" element={<NewsView />} />
          <Route path="/users" element={<UsersView />} />
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
