import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          Warga Jurnalis
        </div>
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
