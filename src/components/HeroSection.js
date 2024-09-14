import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei"; // For 3D animations
import { motion, useAnimation, useInView } from "framer-motion";

// Floating animated sphere
const AnimatedSphere = () => {
  const sphereRef = useRef();

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={sphereRef} scale={1.5}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <MeshDistortMaterial color="#6366F1" distort={0.5} speed={3} roughness={0} />
      </mesh>
    </Float>
  );
};

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Trigger animations when the section comes into view
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
    <section ref={ref} className="relative bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500 py-20 px-5 lg:px-20 overflow-hidden min-h-screen">
      {/* Background 3D Sphere */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Text content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md">
            Simplifying Bail Applications for <br />
            <span className="text-yellow-300">Undertrial Prisoners</span>
          </h1>
          <p className="mt-5 text-lg text-gray-200 max-w-md mx-auto md:mx-0 leading-relaxed drop-shadow-lg">
            Bail Reckoner is your digital companion, designed to streamline the bail process for undertrial prisoners, legal aid providers, and judicial authorities. Fast, secure, and efficient.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="bg-yellow-300 text-gray-800 py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition duration-300">
              Get Started
            </button>
            <button className="ml-4 bg-transparent text-white py-3 px-8 border border-white rounded-full hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <div className="relative">
            <img
              src="https://via.placeholder.com/500x400"
              alt="Bail Application Process"
              className="rounded-lg shadow-2xl border-4 border-yellow-300 transform hover:rotate-3 hover:scale-105 transition-all duration-500"
            />
            {/* Glow effect behind the image */}
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-yellow-300 via-transparent to-transparent opacity-30 blur-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
