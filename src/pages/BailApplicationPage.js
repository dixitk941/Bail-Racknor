import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from './firebase';  // Import Firebase config

const BailReckonerForm = () => {
  const [formData, setFormData] = useState({
    charges: '',
    durationServed: '',
    escapeRisk: '',
    evidenceInfluence: '',
    suretyBonds: '',
    personalBonds: '',
    fines: '',
    judicialPronouncements: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "bailApplications"), formData);
      alert("Bail application submitted!");
    } catch (error) {
      console.error("Error submitting bail application: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Bail Reckoner Form</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Streamline the bail application process</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Nature of the Offense and Penal Provisions */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Charges</label>
              <input
                name="charges"
                type="text"
                placeholder="Charges (e.g., IPC Section 420)"
                value={formData.charges}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                required
              />
            </div>

            {/* Duration of Imprisonment */}
            <div>
              <label className="sr-only">Duration Served</label>
              <input
                name="durationServed"
                type="number"
                placeholder="Duration Served (in months)"
                value={formData.durationServed}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Judge's Discretion */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Escape Risk</label>
              <input
                name="escapeRisk"
                type="text"
                placeholder="Escape Risk (e.g., High / Low)"
                value={formData.escapeRisk}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>

            <div>
              <label className="sr-only">Influence on Evidence/Witnesses</label>
              <input
                name="evidenceInfluence"
                type="text"
                placeholder="Influence on Evidence/Witnesses (e.g., High / Low)"
                value={formData.evidenceInfluence}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          {/* Procedural Pre-requisites */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Surety Bonds</label>
              <input
                name="suretyBonds"
                type="text"
                placeholder="Surety Bonds (e.g., ₹50,000)"
                value={formData.suretyBonds}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>

            <div>
              <label className="sr-only">Personal Bonds</label>
              <input
                name="personalBonds"
                type="text"
                placeholder="Personal Bonds (e.g., ₹25,000)"
                value={formData.personalBonds}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>

            <div>
              <label className="sr-only">Fines</label>
              <input
                name="fines"
                type="number"
                placeholder="Fines (if applicable)"
                value={formData.fines}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          {/* Judicial Pronouncements */}
          <div>
            <label className="sr-only">Judicial Pronouncements</label>
            <textarea
              name="judicialPronouncements"
              placeholder="Judicial Pronouncements (optional)"
              value={formData.judicialPronouncements}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Bail Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BailReckonerForm;
