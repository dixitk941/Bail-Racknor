import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4 flex justify-between">
        <div className="text-lg font-semibold">
          <Link to="/">Bail Reckoner</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
          <li><Link to="/bail-application" className="hover:text-gray-300">Bail Application</Link></li>
          <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
          <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
