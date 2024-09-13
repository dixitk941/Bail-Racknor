import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Text content */}
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Simplifying Bail Applications for <br />
            <span className="text-indigo-600">Undertrial Prisoners</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Bail Reckoner is your digital companion, designed to streamline the
            bail process for undertrial prisoners, legal aid providers, and
            judicial authorities. Fast, secure, and efficient.
          </p>
          <div className="mt-8">
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
              Get Started
            </button>
            <button className="ml-4 bg-transparent text-indigo-600 py-3 px-6 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Bail Application Process"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
