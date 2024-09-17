import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BailApplicationPage from './pages/BailApplicationPage';
import UndertrialPrisonersDashboard from './pages/UndertrialPrisonersDashboard';
import LegalAidProvidersDashboard from './pages/LegalAidProvidersDashboard';
import JudicialAuthoritiesDashboard from './pages/JudicialAuthoritiesDashboard';
import BailTrackPage from './pages/BailTrackPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LicensingPage from './pages/LicensingPage';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col"> {/* Ensure full screen height and flex layout */}
      <Router>
        <Header />
        <main className="flex-grow"> {/* Allow main content to grow and push footer to bottom */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/bail-application" element={<BailApplicationPage />} />
            <Route path="/undertrial-prisoners" element={<UndertrialPrisonersDashboard />} />
            <Route path="/legal-aid-providers" element={<LegalAidProvidersDashboard />} />
            <Route path="/judicial-authorities" element={<JudicialAuthoritiesDashboard />} />
            <Route path="/bailtrackpage/:id" element={<BailTrackPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/LicensingPage" element={<LicensingPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
