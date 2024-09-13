import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebaseConfig';

const BailReckonerForm = () => {
  const [formData, setFormData] = useState({
    prisonerName: '',
    prisonerId: '',
    age: '',
    gender: 'male',
    offenseDetails: '',
    statute: '',
    flightRisk: 'no',
    influenceWitnesses: 'no',
    suretyBond: '',
    personalBond: '',
    identityProof: null,
    bailApplicationStatus: 'pending',
    courtDate: '',
    caseNotes: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      identityProof: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let identityProofURL = '';
      if (formData.identityProof) {
        const storageRef = ref(storage, `identityProofs/${formData.identityProof.name}`);
        await uploadBytes(storageRef, formData.identityProof);
        identityProofURL = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, 'bailApplications'), {
        prisonerName: formData.prisonerName,
        prisonerId: formData.prisonerId,
        age: formData.age,
        gender: formData.gender,
        offenseDetails: formData.offenseDetails,
        statute: formData.statute,
        flightRisk: formData.flightRisk,
        influenceWitnesses: formData.influenceWitnesses,
        suretyBond: formData.suretyBond,
        personalBond: formData.personalBond,
        identityProofURL: identityProofURL,
        bailApplicationStatus: formData.bailApplicationStatus,
        courtDate: formData.courtDate,
        caseNotes: formData.caseNotes,
      });

      alert('Application submitted successfully');
    } catch (error) {
      setError('Error submitting application: ' + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Bail Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="prisonerName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Prisoner Name</label>
          <input
            type="text"
            name="prisonerName"
            value={formData.prisonerName}
            onChange={handleInputChange}
            placeholder="Prisoner Name"
            required
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="prisonerId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Prisoner ID</label>
          <input
            type="text"
            name="prisonerId"
            value={formData.prisonerId}
            onChange={handleInputChange}
            placeholder="Prisoner ID"
            required
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Age"
            required
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="offenseDetails" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Offense Details</label>
          <textarea
            name="offenseDetails"
            value={formData.offenseDetails}
            onChange={handleInputChange}
            placeholder="Offense Details"
            required
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="statute" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Statute</label>
          <input
            type="text"
            name="statute"
            value={formData.statute}
            onChange={handleInputChange}
            placeholder="Statute"
            required
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="flightRisk" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Flight Risk</label>
          <select
            name="flightRisk"
            value={formData.flightRisk}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="influenceWitnesses" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Influence Witnesses</label>
          <select
            name="influenceWitnesses"
            value={formData.influenceWitnesses}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="suretyBond" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Surety Bond</label>
          <input
            type="text"
            name="suretyBond"
            value={formData.suretyBond}
            onChange={handleInputChange}
            placeholder="Surety Bond"
            required
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="personalBond" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Personal Bond</label>
          <input
            type="text"
            name="personalBond"
            value={formData.personalBond}
            onChange={handleInputChange}
            placeholder="Personal Bond"
            required
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="identityProof" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Identity Proof</label>
          <input
            type="file"
            name="identityProof"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="courtDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Court Date</label>
          <input
            type="date"
            name="courtDate"
            value={formData.courtDate}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="caseNotes" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Case Notes</label>
          <textarea
            name="caseNotes"
            value={formData.caseNotes}
            onChange={handleInputChange}
            placeholder="Case Notes"
            required
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default BailReckonerForm;