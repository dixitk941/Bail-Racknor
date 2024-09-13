import React from "react";
import { FaSearch, FaFileSignature, FaCheckCircle } from "react-icons/fa";

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          How <span className="text-indigo-600">Bail Reckoner</span> Works
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Follow these simple steps to streamline the bail application process.
        </p>

        {/* Steps Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaSearch className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Step 1: Search</h3>
            <p className="mt-2 text-gray-600">
              Find the case or undertrial prisoner by searching in our secure
              database. Easy and efficient access to the needed information.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaFileSignature className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Step 2: Submit</h3>
            <p className="mt-2 text-gray-600">
              Submit the bail application online with all the required documents,
              ensuring a quick and paperless process.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaCheckCircle className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Step 3: Track</h3>
            <p className="mt-2 text-gray-600">
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
