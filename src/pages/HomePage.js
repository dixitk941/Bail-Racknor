import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // Ensure firebase is properly configured
import HeroSection from '../components/HeroSection';
import BailRequestTrack from '../components/BailRequestTrack';
import Contact from '../components/Contact';
import FQ from '../components/F&Q'

const HomePage = () => {
  const [user] = useAuthState(auth);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <main className={theme === 'dark' ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-900'}>
      <HeroSection />
      {user && <BailRequestTrack />}
      <Contact />
      <FQ />
    </main>
  );
};

export default HomePage;