import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className='text-lg text-white'>Warga Jurnalis</Link>
        <div>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline ml-4"
          >
            ReactJS Official
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline ml-4"
          >
            Vite Official
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline ml-4"
          >
            Tailwind CSS Official
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
