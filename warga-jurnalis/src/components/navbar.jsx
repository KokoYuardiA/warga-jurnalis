import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Cek status autentikasi saat komponen dimuat
    const isLoggedIn = localStorage.getItem('authenticated') === 'true';
    setAuthenticated(isLoggedIn);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Hapus status autentikasi dan arahkan pengguna ke halaman login
    localStorage.removeItem('authenticated');
    setAuthenticated(false);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="lg:flex lg:items-center space-x-6">
          <ul className={`lg:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li>
              <a
                href="#home"
                className="text-black hover:text-gray-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#business"
                className="text-black hover:text-gray-500 transition duration-300"
              >
                Business
              </a>
            </li>
            <li>
              <a
                href="#entertainment"
                className="text-black hover:text-gray-500 transition duration-300"
              >
                Entertainment
              </a>
            </li>
            <li>
              <a
                href="#health"
                className="text-black hover:text-gray-500 transition duration-300"
              >
                Health
              </a>
            </li>
            <li>
              <a
                href="#science"
                className="text-black hover:text-gray-500 transition duration-300"
              >
                Science
              </a>
            </li>
            <li>
              <a
                href="#sports"
                className="text-black hover:text-gray-500 transition duration-300"
              >
                Sports
              </a>
            </li>
            <li>
              <a
                href="#technology"
                className="text-black hover:text-gray-500 transition duration-300"
              >
                Technology
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:flex lg:items-center space-x-6">
          <button
            onClick={toggleMenu}
            className="lg:hidden text-black hover:text-gray-500 focus:text-gray-500 focus:outline-none"
          >
            {isMenuOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
          {authenticated ? (
            <>
              <Link to="/news-form" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Add News
              </Link>
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Sign Up
              </Link>
              <Link to="/login" className="text-black hover:text-gray-500 transition duration-300">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
