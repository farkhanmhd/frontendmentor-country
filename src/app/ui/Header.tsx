'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoMoonOutline } from 'react-icons/io5';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (
      theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
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
    <header className="fixed left-0 top-0 z-50 flex w-full justify-between bg-white px-5 py-6 font-bold shadow dark:bg-dark-blue md:px-10">
      <Link href="/" className="text-xl">
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
    </header>
  );
};

export default Header;
