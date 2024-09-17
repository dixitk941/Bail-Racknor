import React, { useState, useEffect } from 'react';

const CTASection = () => {
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
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
      <div
        className={`relative isolate overflow-hidden px-6 py-20 text-center sm:rounded-3xl sm:border sm:px-16 sm:shadow-sm ${
          theme === 'dark' ? 'bg-gray-900 text-gray-400 sm:border-gray-700' : 'bg-white text-gray-900 sm:border-gray-100'
        }`}
      >
        <h2 className={`mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Join our community today!
        </h2>
        <h3 className={`mx-auto mt-6 max-w-xl text-lg leading-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          Sign up for exclusive access to events, resources, and more
        </h3>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href="#"
          >
            Explore the forum
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7"></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#3b82f6"></stop>
              <stop offset="1" stopColor="#1d4ed8"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default CTASection;