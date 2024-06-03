import { Suspense } from 'react';
import CountryList from '../ui/CountryList';
import Pagination from '../ui/Pagination';
import { getAllCountries, getCountriesByRegion } from '../lib/data';

interface HomeProps {
  searchParams?: {
    region?: string;
    page?: number;
    search?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const region = searchParams?.region || 'All';
  const page = searchParams?.page || 1;
  const search = searchParams?.search || '';
  let { countries, totalPages } =
    region === 'All' ? getAllCountries() : getCountriesByRegion(region);

  // if search
  if (searchParams?.search) {
    const searchResults = countries.filter((country: any) =>
      country.name.toLowerCase().includes(searchParams.search?.toLowerCase()),
    );
    if (searchResults.length === 0) {
      return (
        <div className="text-center">{`${search} not found in ${region} region`}</div>
      );
    }
    totalPages = Math.ceil(searchResults.length / 16);
    return (
      <>
        <section>
          <Suspense fallback={<div>Loading...</div>}>
            <CountryList page={page} countries={searchResults} />
          </Suspense>
        </section>
        {totalPages > 1 && <Pagination totalPages={totalPages} />}
      </>
    );
  }

  return (
    <>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <CountryList page={page} countries={countries} />
        </Suspense>
      </section>
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </>
  );
}
