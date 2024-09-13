import React from 'react';
import Sidebar from '../components/Sidebar';

const LegalAidProvidersDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold">Legal Aid Providers Dashboard</h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-semibold">Open Cases</h3>
            <p>12 Cases</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-semibold">Active Lawyers</h3>
            <p>5 Lawyers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAidProvidersDashboard;
