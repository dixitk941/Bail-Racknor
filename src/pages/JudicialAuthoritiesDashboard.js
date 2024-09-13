import React from 'react';
import Sidebar from '../components/Sidebar';

const JudicialAuthoritiesDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold">Judicial Authorities Dashboard</h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-semibold">Judgments Pending</h3>
            <p>7 Pending</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-semibold">Judgments Delivered</h3>
            <p>8 Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudicialAuthoritiesDashboard;
