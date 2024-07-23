import { BrowserRouter, Routes, Route } from "react-router-dom";

import UrbanPlanningInterventions from "./views/UrbanPlanningInterventionsView";
import CreateInterventionDataSheet from "./views/CreateInterventionDataSheet";
import Spatialization from "./components/InterventionSheet/Spatialization";
import UrbanInterventionEditView from "./views/UrbanInterventionEditView";
import Conflictivity from "./components/InterventionSheet/Conflictivity";
import InterventionSheetLayout from "./layouts/InterventionSheetLayout";
import Description from "./components/InterventionSheet/Description";
import AddIntervention from "./views/Interventions/AddIntervention";
import DataSheetIntervention from "./views/DataSheetIntervention";
import Features from "./components/InterventionSheet/Features";
import ConflictsView from "./views/ConflictsView";
import LoginView from "./views/Auth/LoginView";
import AuthLayout from "./layouts/AuthLayout";
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
          <Route path="/interventions/new" element={<AddIntervention />} />
          <Route
            path="/interventions/:interventionId/datasheet"
            element={<DataSheetIntervention />}
          />
          <Route
            path="/interventions/:interventionId/datasheet/create"
            element={<CreateInterventionDataSheet />}
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
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
