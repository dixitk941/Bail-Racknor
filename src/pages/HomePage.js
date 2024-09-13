import React from 'react';

const HomePage = () => {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bail Reckoner</h1>
      <p>Your digital tool for streamlining the bail process.</p>
      <div className="mt-6">
        <a href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </a>
      </div>
    </main>
  );
};

export default HomePage;
