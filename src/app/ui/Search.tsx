'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('country', term);
    } else {
      params.delete('country');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="relative h-[56px] w-full rounded-lg shadow-lg">
      <label
        htmlFor="search"
        className="absolute left-4 top-1/2 -translate-y-1/2"
      >
        <IoSearchOutline />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search for a country"
        className="h-full w-full rounded-lg pl-12 dark:bg-dark-blue"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
};

export default Search;
