import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY', // Replace with your Web3Forms access key
        ...formData
      })
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <section className={`body-font relative ${theme === 'dark' ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className={`title-font mb-4 text-2xl font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} sm:text-3xl`}>Contact Us</h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <form onSubmit={handleSubmit} className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`peer w-full rounded border ${theme === 'dark' ? 'border-gray-700 bg-gray-800 text-gray-100' : 'border-gray-300 bg-gray-100 text-gray-900'} py-1 px-3 text-base leading-8 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900`}
                  placeholder="Name"
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute left-3 -top-6 bg-transparent text-sm leading-7 ${theme === 'dark' ? 'text-indigo-500' : 'text-gray-500'} transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-${theme === 'dark' ? 'gray-900' : 'white'} peer-placeholder-shown:text-base peer-placeholder-shown:text-${theme === 'dark' ? 'gray-500' : 'gray-900'} peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500`}
                >
                  Name
                </label>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`peer w-full rounded border ${theme === 'dark' ? 'border-gray-700 bg-gray-800 text-gray-100' : 'border-gray-300 bg-gray-100 text-gray-900'} py-1 px-3 text-base leading-8 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900`}
                  placeholder="Email"
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-3 -top-6 bg-transparent text-sm leading-7 ${theme === 'dark' ? 'text-indigo-500' : 'text-gray-500'} transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-${theme === 'dark' ? 'gray-900' : 'white'} peer-placeholder-shown:text-base peer-placeholder-shown:text-${theme === 'dark' ? 'gray-500' : 'gray-900'} peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500`}
                >
                  Email
                </label>
              </div>
            </div>
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`peer h-32 w-full resize-none rounded border ${theme === 'dark' ? 'border-gray-700 bg-gray-800 text-gray-100' : 'border-gray-300 bg-gray-100 text-gray-900'} py-1 px-3 text-base leading-6 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900`}
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-3 -top-6 bg-transparent text-sm leading-7 ${theme === 'dark' ? 'text-indigo-500' : 'text-gray-500'} transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-${theme === 'dark' ? 'gray-900' : 'white'} peer-placeholder-shown:text-base peer-placeholder-shown:text-${theme === 'dark' ? 'gray-500' : 'gray-900'} peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500`}
                >
                  Message
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <button type="submit" className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                Submit
              </button>
            </div>
            {submitted && (
              <div className="w-full p-2 text-center text-green-500">
                Thank you for your message. We will get back to you soon.
              </div>
            )}
            <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
              <a href="mailto:example@email.com" className="text-indigo-400">example@email.com</a>
              <p className="my-5 leading-normal">
                49 Smith St. <br />
                Saint Cloud, MN 56301
              </p>
              <span className="inline-flex">
                <a href="#" className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="ml-4 text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="#" className="ml-4 text-gray-500">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a href="#" className="ml-4 text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;