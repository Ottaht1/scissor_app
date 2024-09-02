import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureBox from "../components/FeatureBox";
import BackgroundShapes from "../components/BackgroundShapes";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import PricingCards from "../components/PricingCards";
import URLShortener from "../components/URLShortener";
import FAQSection from "../components/FAQSection";
import CTABanner from "../components/CtaBanner";

const Home = () => (
  <div className="w-full min-h-screen relative bg-white overflow-x-hidden">
    <BackgroundShapes />
    <Header />
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <FeatureBox />
      <StatsSection />
      <FeaturesSection />
      <PricingCards />
      <URLShortener />
      <FAQSection />
    </main>
    <CTABanner />
  </div>
);

export default Home;
