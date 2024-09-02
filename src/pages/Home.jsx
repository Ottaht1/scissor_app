
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
  <div className="w-full h-full relative bg-white overflow-hidden">
    <BackgroundShapes />
    <Header />
    <Hero />
    <FeatureBox />
    <StatsSection />
    <FeaturesSection />
    <PricingCards />
    <URLShortener />
    <FAQSection />
    <CTABanner />
  </div>
);

export default Home;
