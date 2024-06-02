import { Suspense } from 'react';
import CountryList from '../ui/CountryList';
import Pagination from '../ui/Pagination';

interface HomeProps {
  searchParams?: {
    region?: string;
    page?: number;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const region = searchParams?.region || 'all';
  const page = searchParams?.page || 1;

  return (
    <>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <CountryList region={region} page={page} />
        </Suspense>
      </section>
      <Pagination totalPages={20} />
    </>
  );
}
