import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Bail Reckoner</h1>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
          <Link to="/features" className="text-white hover:text-gray-200">Features</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
