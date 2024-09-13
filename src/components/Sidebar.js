import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <ul className="space-y-4">
        <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard Overview</Link></li>
        <li><Link to="/undertrial-prisoners" className="hover:text-gray-300">Undertrial Prisoners</Link></li>
        <li><Link to="/legal-aid-providers" className="hover:text-gray-300">Legal Aid Providers</Link></li>
        <li><Link to="/judicial-authorities" className="hover:text-gray-300">Judicial Authorities</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
