import Card from './Card';
import { getAllCountries, getCountriesByRegion } from '../lib/data';

const ITEM_PER_PAGE = 16;

async function CountryList({
  page = 1,
  countries,
}: {
  page: number;
  countries: any;
}) {
  const countriesPerPage = countries.slice(
    (page - 1) * ITEM_PER_PAGE,
    page * ITEM_PER_PAGE,
  );

  // fix the any later
  return (
    <ul className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {countriesPerPage.map((country: any, index: number) => (
        <li key={index}>
          <Card {...country} />
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
