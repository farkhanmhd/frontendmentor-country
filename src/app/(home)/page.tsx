import { Suspense } from 'react';
import CountryList from '../ui/CountryList';
import Pagination from '../ui/Pagination';
import { getAllCountries, getCountriesByRegion } from '../lib/data';

interface HomeProps {
  searchParams?: {
    region?: string;
    page?: number;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const region = searchParams?.region || 'all';
  const page = searchParams?.page || 1;
  const { countries, totalPages } =
    region === 'all'
      ? await getAllCountries()
      : await getCountriesByRegion(region);

  return (
    <>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <CountryList page={page} countries={countries} />
        </Suspense>
      </section>
      <Pagination totalPages={totalPages} />
    </>
  );
}
