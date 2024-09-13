import React from 'react';
import Sidebar from '../components/Sidebar';

const UndertrialPrisonersDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold">Undertrial Prisoners Dashboard</h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-semibold">Pending Applications</h3>
            <p>3 Applications</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-semibold">Total Undertrial Prisoners</h3>
            <p>15 Prisoners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UndertrialPrisonersDashboard;
