import React, { useState } from 'react';

const BailFormPage = () => {
  const [offenseType, setOffenseType] = useState('');
  const [duration, setDuration] = useState('');
  const [judgeDiscretion, setJudgeDiscretion] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Bail Calculation Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Offense Type</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={offenseType}
            onChange={(e) => setOffenseType(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Duration of Imprisonment</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Judge’s Discretion</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={judgeDiscretion}
            onChange={(e) => setJudgeDiscretion(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
          Calculate Bail
        </button>
      </form>
    </div>
  );
};

export default BailFormPage;