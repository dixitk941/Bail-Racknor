import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CTASection = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Check if mountRef.current is not null
    if (!mountRef.current) return;

    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4;

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a 3D torus shape
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.3 });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Add light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      if (mountRef.current && mountRef.current.firstChild) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      <div ref={mountRef} className="absolute inset-0" />

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 opacity-90 z-0"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
        <div className="backdrop-blur-lg bg-white bg-opacity-10 rounded-2xl p-10 shadow-lg max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Transform the Bail Process</h2>
          <p className="text-lg lg:text-xl max-w-xl mx-auto mb-6">
            Simplify bail applications with Bail Reckoner. Seamless, secure, and transparent – start today!
          </p>

          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Get Started
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-indigo-600 transition transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
