import React, { useState } from 'react';

const BailForm = () => {
  const [formData, setFormData] = useState({
    prisonerName: '',
    caseNumber: '',
    bailReason: '',
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documents") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Submit the form data (to Firebase or another backend)
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Bail Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Prisoner Name</label>
          <input
            type="text"
            name="prisonerName"
            value={formData.prisonerName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter prisoner's name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Case Number</label>
          <input
            type="text"
            name="caseNumber"
            value={formData.caseNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter case number"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Reason for Bail</label>
          <textarea
            name="bailReason"
            value={formData.bailReason}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter reason for bail"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Documents</label>
          <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Submit Bail Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default BailForm;
