import React from "react";

const CTASection = () => {
  return (
    <section className="bg-indigo-600 py-20 px-5 lg:px-20 text-center text-white">
      <div className="max-w-7xl mx-auto">
        {/* CTA Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold">
          Ready to Simplify the Bail Application Process?
        </h2>
        <p className="mt-4 text-lg lg:text-xl">
          Join Bail Reckoner today and experience a seamless, secure, and transparent way to manage bail applications.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="#"
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;







