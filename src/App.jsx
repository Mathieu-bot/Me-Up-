import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import { AnimatePresence } from 'framer-motion';

// Animate route transitions (including modal exit)
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />}>
          <Route path="login" element={<Modal><LoginPage /></Modal>} />
          <Route path="register" element={<Modal><SignupPage /></Modal>} />
          <Route path="/forgot-password" element={<Modal><ForgotPasswordPage /></Modal>} />
          <Route path="/reset-password" element={<Modal><ResetPasswordPage /></Modal>} />
        </Route>
        <Route path="/help" element={<HelpPage />} />
        <Route path="/conferences" element={<ConferencesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />

      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
