import React, { useState, useEffect } from 'react';

const BailFormPage = () => {
  const [offenseType, setOffenseType] = useState('');
  const [duration, setDuration] = useState('');
  const [judgeDiscretion, setJudgeDiscretion] = useState('');
  const [status, setStatus] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <div className={`min-h-screen flex justify-center items-center ${theme === 'dark' ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-900'}`}>
      <form onSubmit={handleSubmit} className={`p-8 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Bail Calculation Form</h2>
        <div className="mb-4">
          <label className={`block text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Offense Type</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'}`}
            value={offenseType}
            onChange={(e) => setOffenseType(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className={`block text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Duration</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'}`}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className={`block text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Judge Discretion</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'}`}
            value={judgeDiscretion}
            onChange={(e) => setJudgeDiscretion(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className={`block text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Status</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'}`}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={`w-full py-2 px-4 rounded ${theme === 'dark' ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BailFormPage;