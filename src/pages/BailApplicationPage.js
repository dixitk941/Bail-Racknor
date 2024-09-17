import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, storage } from '../firebase'; // Ensure firebase is properly configured
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { motion } from 'framer-motion';
import LoginModal from '../components/LoginModal'; // Adjust the path as necessary
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
  const [theme, setTheme] = useState('light');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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

    // Form validation
    if (!formData.applicantName || !formData.caseNumber || !formData.email || !formData.address || !formData.additionalInfo) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setProgress(0);

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

      setProgress(100);
      setIsSubmitted(true);
      generatePDF();
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application: ', error);
      alert('Failed to submit application.');
    } finally {
      setIsSubmitting(false);
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

  const getBase64FromUrl = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  
  const generatePDF = async () => {
    const doc = new jsPDF();
  
    try {
      // Adding the logo (Ensure you have a logo URL or a base64 string)
      const logoUrl = 'https://flowbite.com/docs/images/logo.svg';
      const logoBase64 = await getBase64FromUrl(logoUrl);
      
      // Adjust dimensions as needed
      doc.addImage(logoBase64, 'SVG', 10, 10, 50, 20);
  
      // Header with Organization & Department details
      doc.setFontSize(18);
      doc.text('Organization: Ministry of Law & Justice', 50, 20);
      doc.text('Department: Department of Justice', 50, 30);
      doc.text('Bail Application', 50, 40);
  
      // Form content
      doc.setFontSize(12);
      doc.autoTable({
        startY: 60,
        head: [['Field', 'Value']],
        body: [
          ['Applicant Name', formData.applicantName],
          ['Case Number', formData.caseNumber],
          ['Email', formData.email],
          ['Address', formData.address],
          ['Additional Info', formData.additionalInfo],
        ],
      });
  
      // Footer
      doc.setFontSize(10);
      doc.text('For any queries, contact us at support@example.com', 20, doc.internal.pageSize.height - 20);
      doc.text('© 2024 Ministry of Law & Justice', 20, doc.internal.pageSize.height - 10);
  
      // Save the PDF
      doc.save('BailApplicationForm.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-900 text-gray-400' : 'bg-gray-50 text-gray-900'}`}>
      <div className={`max-w-4xl w-full space-y-8 p-10 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <form onSubmit={handleSubmit}>
          <motion.div className="space-y-12" initial="initial" animate="animate">
            <motion.div className="border-b border-gray-900/10 pb-12" {...fadeInUp}>
              <h2 className={`text-base font-semibold leading-7 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                Bail Application Form
              </h2>
              <p className={`mt-1 text-sm leading-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Please fill out the form below accurately. All fields are required, and a valid document is compulsory for verification.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Applicant Name */}
                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="applicantName" className={`block text-sm font-medium leading-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
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
                      className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${theme === 'dark' ? 'bg-gray-700 text-gray-300 ring-gray-600 focus:ring-indigo-500' : 'bg-white text-gray-900 ring-gray-300 focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                    />
                  </div>
                </motion.div>

                {/* Case Number */}
                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="caseNumber" className={`block text-sm font-medium leading-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                    Case Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="caseNumber"
                      name="caseNumber"
                      type="text"
                      placeholder="1234-5678"
                      value={formData.caseNumber}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${theme === 'dark' ? 'bg-gray-700 text-gray-300 ring-gray-600 focus:ring-indigo-500' : 'bg-white text-gray-900 ring-gray-300 focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                    />
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="email" className={`block text-sm font-medium leading-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${theme === 'dark' ? 'bg-gray-700 text-gray-300 ring-gray-600 focus:ring-indigo-500' : 'bg-white text-gray-900 ring-gray-300 focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                    />
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div className="sm:col-span-4" {...fadeInUp}>
                  <label htmlFor="address" className={`block text-sm font-medium leading-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="123 Main St, City, Country"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${theme === 'dark' ? 'bg-gray-700 text-gray-300 ring-gray-600 focus:ring-indigo-500' : 'bg-white text-gray-900 ring-gray-300 focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                    />
                  </div>
                </motion.div>

                {/* Additional Information */}
                <motion.div className="sm:col-span-6" {...fadeInUp}>
                  <label htmlFor="additionalInfo" className={`block text-sm font-medium leading-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                    Additional Information
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Provide any other relevant details..."
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${theme === 'dark' ? 'bg-gray-700 text-gray-300 ring-gray-600 focus:ring-indigo-500' : 'bg-white text-gray-900 ring-gray-300 focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                    />
                  </div>
                </motion.div>

                {/* File Upload */}
                <motion.div className="sm:col-span-6" {...fadeInUp}>
                  <label htmlFor="file" className={`block text-sm font-medium leading-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                    Upload Document
                  </label>
                  <div className="mt-2">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      onChange={handleFileChange}
                      className={`block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700`}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Progress Bar */}
            {/* {isSubmitting && (
              <motion.div className="mt-6" {...fadeInUp}>
                <CircularProgressbar
                  value={progress}
                  text={`${progress}%`}
                  styles={buildStyles({
                    pathColor: '#4F46E5',
                    textColor: theme === 'dark' ? '#D1D5DB' : '#111827',
                    trailColor: theme === 'dark' ? '#374151' : '#E5E7EB',
                  })}
                />
              </motion.div>
            )} */}

<motion.div className="mt-6" {...fadeInUp}>
  <button
    type="submit"
    disabled={isSubmitting}
    className={`w-full flex justify-center rounded-md border border-transparent ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600'} py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
  >
    {isSubmitting ? 'Submitting...' : 'Submit Application'}
  </button>
</motion.div>

          </motion.div>
        </form>
      </div>

      {/* Login Modal */}
      {isModalOpen && <LoginModal closeModal={closeModal} />}
    </div>
  );
};

export default BailApplicationPage;
