import React from 'react';

const CaseDetailsPage = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Case Details</h1>
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl mb-4">Offense: Theft</h2>
        <p className="text-lg text-gray-700 mb-4">Case Number: #12345</p>
        <p className="text-lg text-gray-700">Bail Amount: $5000</p>
        <p className="text-lg text-gray-700 mt-4">Status: Pending Approval</p>
      </div>
    </div>
  );
};

export default CaseDetailsPage;
