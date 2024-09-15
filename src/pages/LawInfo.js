import React from 'react';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506748686214e9df14e8e1d5b9"
          alt="Hero Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fadeIn">Welcome to LawInfo</h1>
        <p className="text-lg md:text-2xl mb-8 animate-slideUp">
          Your ultimate source for cutting-edge legal information and resources.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="#learn-more"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-pulse"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-pulse"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

// Section Component for Indian Law Topics
const LawSection = ({ title, content }) => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-50 rounded-2xl"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-semibold mb-6 text-blue-600">{title}</h2>
        <p className="text-lg text-gray-800">{content}</p>
      </div>
    </section>
  );
};

// LawInfo Component
const LawInfo = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />

      <main className="p-8">
        <LawSection
          title="Indian Constitution"
          content="The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers, and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens."
        />
        <LawSection
          title="Criminal Law"
          content="Criminal law in India is defined by the Indian Penal Code (IPC), which deals with crimes and their punishments. It includes various offenses such as theft, assault, murder, and more, along with their legal proceedings and penalties."
        />
        <LawSection
          title="Civil Law"
          content="Civil law deals with non-criminal disputes between individuals or organizations. It covers a range of issues including contracts, property disputes, family law, and more. The Indian civil code includes laws related to personal laws, family laws, and procedural laws."
        />
        <LawSection
          title="Family Law"
          content="Family law in India encompasses various statutes dealing with marriage, divorce, child custody, inheritance, and adoption. It is governed by different personal laws applicable to different communities, including Hindu Law, Muslim Law, and others."
        />
        <LawSection
          title="Corporate Law"
          content="Corporate law in India deals with the formation, regulation, and dissolution of companies and corporations. It includes laws related to company registration, corporate governance, mergers and acquisitions, and compliance with regulatory requirements."
        />
        <LawSection
          title="Intellectual Property Law"
          content="Intellectual Property (IP) law protects creations of the mind, including patents, trademarks, copyrights, and trade secrets. It ensures creators can control and profit from their inventions, designs, and artistic works."
        />
        <LawSection
          title="Labor and Employment Law"
          content="Labor and employment laws govern the rights and responsibilities of employers and employees. This includes laws on wages, working conditions, industrial relations, and dispute resolution mechanisms."
        />
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-4xl font-semibold mb-6 text-blue-600">Contact Us:</h2>
          <p className="text-lg mb-6 text-gray-800">
            For any inquiries or support, feel free to contact us through the options below.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="mailto:info@lawinfo.com" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors font-semibold text-lg animate-pulse">Email Us</a>
            <a href="tel:+1234567890" className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition-colors font-semibold text-lg animate-pulse">Call Us</a>
          </div>
        </section>
      </main>
    </div>
  );
};

// Tailwind CSS Custom Styles
const tailwindCSS = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.bg-gradient-to-r {
  background: linear-gradient(to right, var(--tw-gradient-stops));
}

.text-primary {
  color: #2196f3;
}

.bg-primary {
  background-color: #2196f3;
}

.bg-secondary {
  background-color: #f5f5f5;
}

.bg-link {
  background-color: #4caf50;
}

.text-primary {
  color: #2196f3;
}

.shadow-glass {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.shadow-glass-inset {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.06);
}
`;

const App = () => (
  <div>
    <style>{tailwindCSS}</style>
    <LawInfo />
  </div>
);

export default App;
