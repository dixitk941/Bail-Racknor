import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeatureSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <main className="container mx-auto p-8">
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <CTASection />
    </main>
  );
};

export default HomePage;
