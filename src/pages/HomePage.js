import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeatureSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <main className="container mx-auto p-8">
      <HeroSection />

      {/* Features Section */}
      {/* <FeaturesSection /> */}

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* CTA Section */}
      <CTASection />

      {/* Scroll Progress Bar (if needed without animation) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-blue-500"></div>
    </main>
  );
};

export default HomePage;
