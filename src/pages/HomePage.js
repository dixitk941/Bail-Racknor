import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // Ensure firebase is properly configured
import HeroSection from '../components/HeroSection';
import BailRequestTrack from '../components/BailRequestTrack';


const HomePage = () => {
  const [user] = useAuthState(auth);

  return (
    <main>
      <HeroSection />
      {user && <BailRequestTrack />}
    </main>
  );
};

export default HomePage;