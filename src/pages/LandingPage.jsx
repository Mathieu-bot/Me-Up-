import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import PointsSystem from "../components/PointsSystem";
import HowItWorks from "../components/HowItWorks";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>{`${process.env.VITE_APP_TITLE || 'Me.Up()'}`}</title>
        <meta name="description" content={`Bienvenue sur ${process.env.VITE_APP_TITLE || 'Me.Up()'}, votre application de promotion d'élites technique et relationnelle.`} />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <PointsSystem />
      </main>
      <Footer />
      <Outlet />
    </div>
  );
};
export default LandingPage;
