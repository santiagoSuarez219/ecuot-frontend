import { BrowserRouter, Routes, Route } from "react-router-dom";

import UrbanPlanningInterventions from "./views/UrbanPlanningInterventionsView";
import CreateInterventionDataSheet from "./views/CreateInterventionDataSheet";
import Spatialization from "./views/InterventionDataSheetData/Spatialization";
import InterventionSheetLayout from "./layouts/InterventionDataSheetLayout";
import Conflictivity from "./views/InterventionDataSheetData/Conflictivity";
import UrbanInterventionEditView from "./views/UrbanInterventionEditView";
import EditInterventionDataSheet from "./views/EditInterventionDataSheet";
import Description from "./views/InterventionDataSheetData/Description";
import AddIntervention from "./views/Interventions/AddIntervention";
import DataSheetIntervention from "./views/DataSheetIntervention";
import Features from "./views/InterventionDataSheetData/Features";
import AddConflict from "./views/Conflicts/AddConflict";
import ConflictsView from "./views/ConflictsView";
import LoginView from "./views/Auth/LoginView";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import UsersView from "./views/UsersView";
import NewsView from "./views/NewsView";
import HomeView from "./views/HomeView";
import EditConflict from "./views/Conflicts/EditConflict";

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
            path="/interventions/:interventionId/datasheet/:datasheetId/edit"
            element={<EditInterventionDataSheet />}
          />
          <Route
            path="/interventions/:interventionId/edit"
            element={<UrbanInterventionEditView />}
          />
          <Route path="/conflicts" element={<ConflictsView />} />
          <Route path="/conflicts/new" element={<AddConflict />} />
          <Route
            path="/conflicts/:conflictId/edit"
            element={<EditConflict />}
          />
          <Route path="/news" element={<NewsView />} />
          <Route path="/users" element={<UsersView />} />
        </Route>
        <Route element={<InterventionSheetLayout />}>
          <Route
            path="/intervention-datasheet/:interventionId/:datasheetId/description"
            element={<Description />}
          />
          <Route
            path="/intervention-datasheet/:interventionId/:datasheetId/features"
            element={<Features />}
          />
          <Route
            path="/intervention-datasheet/:interventionId/:datasheetId/conflictivity"
            element={<Conflictivity />}
          />
          <Route
            path="/intervention-datasheet/:interventionId/:datasheetId/spatialization"
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
