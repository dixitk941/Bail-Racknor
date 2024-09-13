import React from 'react';

const BailApplicationPage = () => {
  return (
    <main className="container mx-auto p-8 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Submit Bail Application</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Offense</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Duration of Imprisonment</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
          Submit Application
        </button>
      </form>
    </main>
  );
};

export default BailApplicationPage;
