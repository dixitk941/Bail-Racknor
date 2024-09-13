import React from 'react';

const FeaturesPage = () => {
  return (
    <div className="text-center p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Key Features</h1>
      <ul className="text-lg text-gray-700 space-y-3">
        <li>Automated bail eligibility check.</li>
        <li>Tracking of imprisonment duration.</li>
        <li>Comprehensive database of offenses and penalties.</li>
        <li>Integration of judicial pronouncements on bail.</li>
      </ul>
    </div>
  );
};

export default FeaturesPage;
