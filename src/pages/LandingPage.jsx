import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import PointsSystem from "../components/PointsSystem";
import HowItWorks from "../components/HowItWorks";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <PointsSystem />
      </main>
      <Footer />
    </div>
  );
};
export default LandingPage;
