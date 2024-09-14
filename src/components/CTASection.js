import React, { useState, useEffect } from 'react';

const CTASection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        // You can also display a user-friendly error message here
      }
    };

    fetchData();
  }, []);

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