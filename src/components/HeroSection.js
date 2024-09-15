import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaBalanceScale, FaUserShield, FaFileContract } from "react-icons/fa";
import HowItWorksSection from "./HowItWorksSection"; // Import the new section
import CTA from "./CTASection"; // Import the CTA section

// Floating animated sphere
const TransitionSphere = () => {
  const sphereRef = useRef();

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={sphereRef} scale={1.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color="#FFBB00" distort={0.7} speed={2} roughness={0} />
      </mesh>
    </Float>
  );
};

// Hero Section
const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} className="relative bg-white dark:bg-gray-900 py-12 px-4 lg:px-8 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Background 3D Sphere */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <TransitionSphere />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
        {/* Left side: Text content */}
        <motion.div
          className="flex-1 mb-10 lg:mb-0"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight drop-shadow-md">
            Simplifying Bail Applications for <br />
            <span className="text-yellow-300">Undertrial Prisoners</span>
          </h1>
          <p className="mt-4 text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-xs lg:max-w-md mx-auto lg:mx-0 leading-relaxed drop-shadow-lg">
            Bail Reckoner is your digital companion, designed to streamline the bail process for undertrial prisoners, legal aid providers, and judicial authorities. Fast, secure, and efficient.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="bg-yellow-300 text-gray-800 dark:text-gray-900 py-2 px-6 rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent text-gray-900 dark:text-white py-2 px-6 border border-gray-900 dark:border-white rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transform hover:scale-105 transition duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          className="flex-1"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <div className="relative">
            <img
              src="https://th.bing.com/th/id/OIP.gy7NAPPuBswV_-uI4fvANQHaE8?rs=1&pid=ImgDetMain"
              alt="Bail Application Process"
              className="rounded-lg shadow-2xl border-4 border-yellow-300 transform hover:rotate-3 hover:scale-105 transition-all duration-500 w-full object-cover max-w-xs lg:max-w-md mx-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-yellow-300 via-transparent to-transparent opacity-30 blur-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section with Scroll Transition
const FeaturesSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      ref={ref}
      className="bg-white dark:bg-gray-900 py-12 px-4 lg:px-8"
      initial="hidden"
      animate={controls}
      variants={fadeVariants}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
          Why Choose <span className="text-indigo-600">Bail Reckoner?</span>
        </h2>
        <p className="mt-2 text-base lg:text-lg text-gray-700 dark:text-gray-300">
          Our platform offers a variety of features designed to make the bail application process easier, faster, and more transparent.
        </p>

        {/* Features Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaBalanceScale className="text-indigo-600 text-3xl mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">Legal Aid</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Connect with legal professionals and access tools to help with bail application processes efficiently.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaUserShield className="text-indigo-600 text-3xl mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">
              Secure Data
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Your information is encrypted and handled with care to ensure that all data remains private and secure.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaFileContract className="text-indigo-600 text-3xl mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">
              Transparent Process
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Track the bail application process step-by-step with real-time updates to keep you informed.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const App = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection /> {/* Add the HowItWorksSection here */}
      <CTA /> {/* Add the CTA section here */}
    </div>
  );
};

export default App;
