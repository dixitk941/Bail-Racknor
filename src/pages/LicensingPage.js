import React from "react";

const LicensingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Licensing Information
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bail Reckoner License</h2>
            <p className="text-gray-600 leading-relaxed">
              The <strong>Bail Reckoner</strong> project is licensed under the{" "}
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-600"
              >
                MIT License
              </a>
              . This permits anyone to use, copy, modify, merge, publish, distribute, and sublicense copies of the software, 
              provided that the original copyright notice is included in all copies or substantial portions of the software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">React.js License</h2>
            <p className="text-gray-600 leading-relaxed">
              Bail Reckoner is built using{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-600"
              >
                React.js
              </a>
              , which is licensed under the MIT License. You are free to use and modify React.js for both personal and commercial use under this license.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tailwind CSS License</h2>
            <p className="text-gray-600 leading-relaxed">
              We use{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-600"
              >
                Tailwind CSS
              </a>{" "}
              for styling, which is also licensed under the MIT License. Tailwind CSS allows for building custom UIs using predefined utility classes for consistency and simplicity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Libraries</h2>
            <p className="text-gray-600 leading-relaxed">
              Additional third-party libraries used in this project are subject to their respective licenses.
              Please review the licenses of these libraries as required. All third-party code is maintained by its respective authors.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Bail Reckoner. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LicensingPage;
