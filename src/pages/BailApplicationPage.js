import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, storage } from '../firebase'; // Ensure firebase is properly configured
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { motion } from 'framer-motion';
import LoginModal from '../components/LoginModal'; // Adjust the path as necessary
import { DocumentIcon } from '@heroicons/react/24/outline';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // Import PDF viewer
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import PDF viewer styles

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
      });

      setIsSubmitted(true);
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application: ', error);
      alert('Failed to submit application.');
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
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

  const filePreview = formData.file ? URL.createObjectURL(formData.file) : null;

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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                      value={formData.applicantName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="caseNumber" className="block text-sm font-medium leading-6 text-gray-900">
                    Case Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="caseNumber"
                      name="caseNumber"
                      type="text"
                      placeholder="Enter case number"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                      value={formData.caseNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div className="col-span-full" {...fadeInUp}>
                  <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                    Permanent Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Street address, city, state"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="file" className="block text-sm font-medium leading-6 text-gray-900">
                    Upload Valid Document (PDF, JPG, PNG)
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
                    <div className="text-center">
                      <DocumentIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file" name="file" type="file" className="sr-only" accept=".pdf,.jpg,.png" onChange={handleFileChange} required />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PDF, JPG, PNG up to 10MB</p>
                      {filePreview && (
                        <div className="mt-4">
                          {formData.file && formData.file.type === 'application/pdf' ? (
                            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                              <Viewer fileUrl={filePreview} />
                            </Worker>
                          ) : (
                            <img src={filePreview} alt="Preview" className="mt-2 max-h-40" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="mt-6 flex items-center justify-end gap-x-6" {...fadeInUp}>
              <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105">
                Submit Application
              </button>
            </motion.div>
          </motion.div>
        </form>

        {!user && isModalOpen && <LoginModal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default BailApplicationPage;
