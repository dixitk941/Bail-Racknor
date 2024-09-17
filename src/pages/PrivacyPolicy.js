import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <div className="text-lg text-gray-700 space-y-6">
          <p>
            Welcome to <strong>Bail Mantri</strong>. Your privacy is of utmost importance to us. 
            This Privacy Policy outlines the types of personal information we collect, how we use and protect it, and your rights concerning your data.
          </p>

          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p>
            We may collect and process the following data:
            <ul className="list-disc list-inside pl-4">
              <li>
                <strong>Personal Information:</strong> Name, email address, contact details, legal case details.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about your use of our service, including log data, browser type, and IP address.
              </li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p>
            The data we collect is used for the following purposes:
            <ul className="list-disc list-inside pl-4">
              <li>To provide and improve our services.</li>
              <li>To communicate with you regarding your use of the service.</li>
              <li>To comply with legal requirements and protect our legal rights.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold">3. Data Security</h2>
          <p>
            We are committed to ensuring the security of your data. We use appropriate technical and organizational measures to safeguard your personal data from unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-2xl font-semibold">4. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. However, we may share data with law enforcement agencies, legal entities, or other parties as required by law.
          </p>

          <h2 className="text-2xl font-semibold">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data. To exercise these rights, please contact us at [support@bailreckoner.com].
          </p>

          <h2 className="text-2xl font-semibold">6. Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page, and we encourage you to review it periodically.
          </p>

          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> support@bailreckoner.com<br />
            <strong>Phone:</strong> +1234567890
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
