import React from 'react';

const LicensePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 md:px-24 lg:px-48">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-12">
        <h1 className="text-3xl font-bold text-center mb-8">Apache License</h1>
        <h2 className="text-xl font-semibold text-center mb-4">Version 2.0, January 2004</h2>
        <p className="text-center text-blue-600 mb-12">
          <a href="http://www.apache.org/licenses/" target="_blank" rel="noopener noreferrer">
            http://www.apache.org/licenses/
          </a>
        </p>

        <div className="text-sm space-y-4 leading-relaxed">
          <p className="font-semibold">TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION</p>
          <p className="font-semibold">1. Definitions.</p>
          <p>
            "License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.
          </p>
          <p>
            "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.
          </p>
          <p>
            "Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity...
          </p>

          {/* You can keep adding more of the license text here */}

          <h3 className="font-semibold mt-6">2. Grant of Copyright License.</h3>
          <p>
            Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable
            copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form...
          </p>

          <h3 className="font-semibold mt-6">END OF TERMS AND CONDITIONS</h3>
        </div>

        <footer className="mt-12">
          <p className="text-sm text-gray-500 text-center">
            BailMantri | Licensed under the Apache License, Version 2.0
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LicensePage;
