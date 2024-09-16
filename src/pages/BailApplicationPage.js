import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, storage } from '../firebase'; // Ensure firebase is properly configured
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { motion } from 'framer-motion';
import LoginModal from '../components/LoginModal'; // Adjust the path as necessary

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const BailApplicationPage = () => {
  const [user] = useAuthState(auth);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    applicantName: '',
    caseNumber: '',
    email: '',
    address: '',
    additionalInfo: '',
    file: null,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      openModal();
      return;
    }

    try {
      let fileUrl = '';
      if (formData.file) {
        const storageRef = ref(storage, `bailRequests/${formData.file.name}`);
        await uploadBytes(storageRef, formData.file);
        fileUrl = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, 'bailRequests'), {
        applicantName: formData.applicantName,
        caseNumber: formData.caseNumber,
        email: formData.email,
        address: formData.address,
        additionalInfo: formData.additionalInfo,
        fileUrl: fileUrl,
        userId: user.uid, // Include the user ID in the form data
      });

      setIsSubmitted(true);
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application: ', error);
      alert('Failed to submit application.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <motion.div className="space-y-12" initial="initial" animate="animate">
            <motion.div className="border-b border-gray-900/10 pb-12" {...fadeInUp}>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Bail Application Form
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Please fill out the form below accurately. All fields are required, and a valid document is compulsory for verification.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="applicantName" className="block text-sm font-medium leading-6 text-gray-900">
                    Applicant Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="applicantName"
                      name="applicantName"
                      type="text"
                      placeholder="John Doe"
                      autoComplete="name"
                      value={formData.applicantName}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                    />
                  </div>
                </motion.div>
                {/* Add other form fields here */}
                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="caseNumber" className="block text-sm font-medium leading-6 text-gray-900">
                    Case Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="caseNumber"
                      name="caseNumber"
                      type="text"
                      placeholder="123456"
                      value={formData.caseNumber}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                    />
                  </div>
                </motion.div>
                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                    />
                  </div>
                </motion.div>
                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="123 Main St"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                    />
                  </div>
                </motion.div>
                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium leading-6 text-gray-900">
                    Additional Info
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Any additional information"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                    />
                  </div>
                </motion.div>
                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="file" className="block text-sm font-medium leading-6 text-gray-900">
                    Upload Document
                  </label>
                  <div className="mt-2">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="mt-6 flex items-center justify-end gap-x-6" {...fadeInUp}>
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            >
              Submit Application
            </button>
          </motion.div>
        </form>
        {isSubmitted && (
          <div className="mt-4 text-green-600">
            Your form is successfully submitted. Please wait for a few days, our team will contact you.
          </div>
        )}
        {!user && (
          <div className="mt-4 text-red-600">
            Please login first to submit the application.
            <button
              onClick={openModal}
              className="ml-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            >
              Login
            </button>
          </div>
        )}
      </div>
      {isModalOpen && (
        <LoginModal onClose={closeModal} onLoginSuccess={closeModal} />
      )}
    </div>
  );
};

export default BailApplicationPage;