import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import HelpPage from "./pages/HelpPage";
import ConferencesPage from "./pages/ConferencesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/registerPage";
import ForgotPasswordPage from "./pages/forgotPasswordPage";
import ResetPasswordPage from "./pages/resetPasswordPage";
import PrivateRoute from "./components/PrivateRoute";
import Modal from "./components/ui/Modal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="login" element={<Modal><LoginPage /></Modal>} />
          <Route path="register" element={<Modal><SignupPage /></Modal>} />
        </Route>
        <Route path="/help" element={<HelpPage />} />
        <Route path="/conferences" element={<ConferencesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
