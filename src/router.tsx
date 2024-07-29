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
import EditConflict from "./views/Conflicts/EditConflict";
import AddConflict from "./views/Conflicts/AddConflict";
import EditUserView from "./views/Users/EditUserView";
import NewPassword from "./views/Users/NewPassword";
import ConflictsView from "./views/ConflictsView";
import LoginView from "./views/Auth/LoginView";
import AuthLayout from "./layouts/AuthLayout";
import EditNews from "./views/News/EditNews";
import AppLayout from "./layouts/AppLayout";
import AddUser from "./views/Users/AddUser";
import AddNews from "./views/News/AddNews";
import UsersView from "./views/UsersView";
import AdminView from "./views/AdminView";
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
          <Route path="/news/new" element={<AddNews />} />
          <Route path="/news/:newsId/edit" element={<EditNews />} />
          <Route path="/users" element={<UsersView />} />
          <Route path="/users/new" element={<AddUser />} />
          <Route path="/users/:userId/edit" element={<EditUserView />} />
          <Route path="/users/:userId/new-password" element={<NewPassword />} />
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
          <Route path="/admin" element={<AdminView />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
