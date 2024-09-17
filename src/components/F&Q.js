import React, { useState, useEffect } from 'react';

const FAQ = () => {
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
    <section className={`py-32 min-h-screen ${theme === 'dark' ? 'bg-[#1D1D1D] text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className={`flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-300'}`}>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">How do I apply for bail through Bail Recknor?</summary>
            <div className="px-4 pb-4">
              <p>To apply for bail, you can fill out our online bail application form. After providing the required personal and case information, our legal team will review your application and guide you through the next steps, which may include submitting supporting documents and attending a court hearing.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">What documents are required for a bail application?</summary>
            <div className="px-4 pb-4">
              <p>You will need to submit key documents such as an FIR copy, charge sheet, personal identification, and other relevant case documents. Our team will inform you of any additional paperwork needed depending on the specifics of your case.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">How long does the bail process take?</summary>
            <div className="px-4 pb-4">
              <p>The bail process duration can vary based on the complexity of the case and the court's schedule. Typically, it may take anywhere from a few days to a couple of weeks. Our platform will keep you updated on the progress at every stage.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">Can I track the status of my bail application?</summary>
            <div className="px-4 pb-4">
              <p>Yes, Bail Recknor offers a tracking system where you can monitor the status of your application. Simply log into your account to view real-time updates on your bail application process.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">What happens if my bail application is denied?</summary>
            <div className="px-4 pb-4">
              <p>If your bail application is denied, our legal team will assist you in filing an appeal or exploring other legal options to secure bail. We are committed to providing continuous support until your case reaches a resolution.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">How can I contact Bail Recknor for support?</summary>
            <div className="px-4 pb-4">
              <p>If you need assistance, you can reach us at 9911083755 during business hours (Monday to Saturday from 10 am to 6 pm) or email us at <a href="mailto:example@gmail.com" className="underline">example@gmail.com</a>.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">What are the terms and conditions of Bail Recknor's services?</summary>
            <div className="px-4 pb-4">
              <p>You can read the full terms and conditions of our services on the <a href="#" className="underline">Terms of Service</a> page on our website. It includes detailed information about our policies and procedures regarding bail applications.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
