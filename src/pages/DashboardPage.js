import React from 'react';
import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-semibold">Active Cases</h3>
            <p>10 Cases</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-semibold">Pending Applications</h3>
            <p>5 Applications</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-semibold">Judgments Delivered</h3>
            <p>8 Judgments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
