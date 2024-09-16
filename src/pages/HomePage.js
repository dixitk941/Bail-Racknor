import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // Ensure firebase is properly configured
import HeroSection from '../components/HeroSection';
import BailRequestTrack from '../components/BailRequestTrack';
// import FeaturesSection from '../components/FeatureSection';
// import HowItWorksSection from '../components/HowItWorksSection';
// import CTASection from '../components/CTASection';
// import ScrollEffect from '../components/ScrollEffect';
// import LawInfo from './LawInfo';

const HomePage = () => {
  const [user] = useAuthState(auth);

  return (
    <main>
      {/* <ScrollEffect /> Add ScrollEffect here */}
      <HeroSection />
      {user && <BailRequestTrack />} {/* Show BailRequestTrack only when user is logged in */}
      {/* <LawInfo /> */}

      {/* Features Section */}
      {/* <FeaturesSection /> */}

      {/* How It Works Section */}
      {/* <HowItWorksSection /> */}

      {/* CTA Section */}
      {/* <CTASection /> */}
    </main>
  );
};

export default HomePage;