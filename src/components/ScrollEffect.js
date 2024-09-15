import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.position.y = -scrollY * 0.05; // Adjust multiplier for effect
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, -5]}>
      <meshStandardMaterial color="royalblue" />
    </Sphere>
  );
};

const ScrollAnimation = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default ScrollAnimation;
