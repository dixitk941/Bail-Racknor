import React from "react";
import { FaBalanceScale, FaUserShield, FaFileContract } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Why Choose <span className="text-indigo-600">Bail Reckoner?</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Our platform offers a variety of features designed to make the bail
          application process easier, faster, and more transparent.
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaBalanceScale className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Legal Aid</h3>
            <p className="mt-2 text-gray-600">
              Connect with legal professionals and access tools to help with bail
              application processes efficiently.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaUserShield className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Secure Data
            </h3>
            <p className="mt-2 text-gray-600">
              Your information is encrypted and handled with care to ensure that
              all data remains private and secure.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaFileContract className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Transparent Process
            </h3>
            <p className="mt-2 text-gray-600">
              Track the bail application process step-by-step with real-time updates
              to keep you informed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
