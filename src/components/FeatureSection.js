import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { FaBalanceScale, FaUserShield, FaFileContract } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Sphere } from '@react-three/drei';

// 3D Background Component
const AnimatedBackground = () => {
  const meshRef1 = useRef();
  const meshRef2 = useRef();

  // Animation for the spheres
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    meshRef1.current.rotation.x = elapsedTime * 0.3;
    meshRef1.current.rotation.y = elapsedTime * 0.3;
    meshRef2.current.rotation.y = elapsedTime * 0.4;
  });

  return (
    <>
      <Sphere ref={meshRef1} position={[-3, 0, -5]} args={[1.5, 32, 32]}>
        <meshStandardMaterial attach="material" color="#6C63FF" wireframe />
      </Sphere>
      <Sphere ref={meshRef2} position={[3, 0, -6]} args={[1, 32, 32]}>
        <meshStandardMaterial attach="material" color="#FF6584" wireframe />
      </Sphere>
    </>
  );
};

const FeaturesSection = () => {
  return (
    <section className="relative bg-white py-20 px-5 lg:px-20">
      {/* Three.js Animated Background */}
      <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <AnimatedBackground />
      </Canvas>

      {/* Content of the section */}
      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl lg:text-4xl font-bold text-gray-800"
        >
          Why Choose <span className="text-indigo-600">Bail Reckoner?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-600 text-lg"
        >
          Our platform offers a variety of features designed to make the bail
          application process easier, faster, and more transparent.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaBalanceScale className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Legal Aid
            </h3>
            <p className="mt-2 text-gray-600">
              Connect with legal professionals and access tools to help with bail
              application processes efficiently.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserShield className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Secure Data
            </h3>
            <p className="mt-2 text-gray-600">
              Your information is encrypted and handled with care to ensure that
              all data remains private and secure.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaFileContract className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Transparent Process
            </h3>
            <p className="mt-2 text-gray-600">
              Track the bail application process step-by-step with real-time updates
              to keep you informed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
