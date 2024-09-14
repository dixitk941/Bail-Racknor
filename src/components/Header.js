import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal'; // Adjust the path as necessary
import { auth } from '../firebase'; // Ensure firebase is properly configured
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onLoginSuccess = () => {
    console.log('Login successful');
    setIsModalOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Logged out successfully');
    } catch (err) {
      console.error('Logout failed', err.message);
    }
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bail Reckoner</span>
          </Link>
          <div className="flex md:order-2 space-x-3">
            {user ? (
              <button
                onClick={handleLogout}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-red-500 group-hover:from-red-600 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Logout
                </span>
              </button>
            ) : (
              <button
                onClick={openModal}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </button>
            )}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`} id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/dashboard" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white">Dashboard</Link>
              </li>
              <li>
                <Link to="/bail-application" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white">Bail Application</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <LoginModal onClose={closeModal} onLoginSuccess={onLoginSuccess} />
      )}
    </header>
  );
};

export default Header;
