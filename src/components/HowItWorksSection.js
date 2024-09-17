import React, { useState, useEffect } from "react";
import { FaSearch, FaFileSignature, FaCheckCircle } from "react-icons/fa";

const HowItWorksSection = () => {
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

  return (
    <section className={`py-10 px-4 md:px-6 lg:px-8 xl:px-20 ${theme === 'dark' ? 'bg-gray-900 text-gray-400' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          How <span className="text-indigo-600">Bail Reckoner</span> Works
        </h2>
        <p className={`mt-2 md:mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-base md:text-lg`}>
          Follow these simple steps to streamline the bail application process.
        </p>

        {/* Steps Grid */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* Step 1 */}
          <div className={`p-6 md:p-8 rounded-lg shadow-md transition duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <FaSearch className="text-indigo-600 text-3xl md:text-4xl mx-auto" />
            <h3 className={`text-lg md:text-xl font-semibold mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Step 1: Search</h3>
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm md:text-base`}>
              Find the case or undertrial prisoner by searching in our secure
              database. Easy and efficient access to the needed information.
            </p>
          </div>

          {/* Step 2 */}
          <div className={`p-6 md:p-8 rounded-lg shadow-md transition duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <FaFileSignature className="text-indigo-600 text-3xl md:text-4xl mx-auto" />
            <h3 className={`text-lg md:text-xl font-semibold mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Step 2: Submit</h3>
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm md:text-base`}>
              Submit the bail application online with all the required documents,
              ensuring a quick and paperless process.
            </p>
          </div>

          {/* Step 3 */}
          <div className={`p-6 md:p-8 rounded-lg shadow-md transition duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <FaCheckCircle className="text-indigo-600 text-3xl md:text-4xl mx-auto" />
            <h3 className={`text-lg md:text-xl font-semibold mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Step 3: Track</h3>
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm md:text-base`}>
              Track your application in real-time and get notified once the process
              is complete. Stay informed every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;