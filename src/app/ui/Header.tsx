'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoMoonOutline } from 'react-icons/io5';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const handleThemeClick = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white px-5 py-6 font-bold shadow md:px-10 dark:bg-dark-blue">
      <div className="mx-auto flex w-full max-w-[1536px] justify-between">
        <Link href="/?page=1" className="text-xl">
          Where in the world?
        </Link>
        <button
          className="flex items-center gap-x-3 font-semibold"
          onClick={handleThemeClick}
        >
          <IoMoonOutline />
          <span className="font-semibold">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
