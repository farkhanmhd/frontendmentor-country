'use client';

import { useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { capitalize } from '../utils/util';
import Search from './Search';

const Region = () => {
  const [isOpen, setIsOpen] = useState(false);
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState(
    capitalize(searchParams.get('region')?.toString() || 'All'),
  );

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    const params = new URLSearchParams(searchParams);
    params.set('region', capitalize(region.toLowerCase()));
    params.set('page', '1');

    let queryString = `region=${params.get('region')}&page=${params.get('page')}`;

    if (params.get('search')) {
      queryString += `&search=${params.get('search')}`;
    }
    router.push(`${pathname}?${queryString}`);
    closeDropdown();
  };

  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  return (
    <div className="relative mx-auto flex w-full max-w-[1536px] flex-col justify-between gap-y-4 font-semibold md:flex-row">
      <Search />
      <button
        id="dropdown-button"
        className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm text-gray-700 shadow-lg dark:bg-dark-blue dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {`Filter by Region : ${selectedRegion}`}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-mr-1 ml-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown-menu"
          className="absolute right-0 top-28 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 md:top-14 dark:bg-dark-blue"
          ref={ref}
        >
          <div
            className="p-2 py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
          >
            {regions.map((region, index) => (
              <button
                className="block w-full rounded-md px-4 py-4 text-left text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 dark:text-white dark:hover:bg-very-dark-blue"
                role="menuitem"
                key={index}
                onClick={() => handleRegionClick(region)}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Region;
