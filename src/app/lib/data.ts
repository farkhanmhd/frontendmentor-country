import { data } from '../data/data';

const ITEM_PER_PAGE = 16;

export interface AllCountry {
  alpha3Code: string;
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

export const getAllCountries = () => {
  const filteredCountries = data.map((country: any) => {
    const {
      alpha3Code,
      name,
      population,
      region,
      capital,
      flags: { png },
    } = country;
    return {
      alpha3Code,
      flag: png,
      name,
      population,
      region,
      capital,
    };
  });

  const sortedCountries = filteredCountries.sort((a: any, b: any): any => {
    if (a.name < b.name) return -1;
  });

  const totalPages = Math.ceil(sortedCountries.length / ITEM_PER_PAGE);

  return { countries: sortedCountries, totalPages };
};

export const getCountriesByRegion = (region: string) => {
  const filteredCountries = data.filter((country) => country.region === region);

  const countries = filteredCountries.map((country: any) => {
    const {
      alpha3Code,
      name,
      population,
      region,
      capital,
      flags: { png },
    } = country;
    return {
      alpha3Code,
      flag: png,
      name,
      population,
      region,
      capital,
    };
  });
  const sortedCountries = countries.sort((a: any, b: any): any => {
    if (a.name < b.name) return -1;
  });

  const totalPages = Math.ceil(sortedCountries.length / ITEM_PER_PAGE);

  return { countries: sortedCountries, totalPages };
};

export interface CountryDetail {
  flag: string;
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borders: string[];
}

export const getCountryDetail = (alpha3Code: string) => {
  const country: any = data.find(
    (country) => country.alpha3Code === alpha3Code,
  );
  const {
    flags: { png },
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    borders,
    topLevelDomain,
    currencies,
    languages,
  } = country;

  const result: CountryDetail = {
    flag: png,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies: currencies.map((c: any) => c.name).join(''),
    languages: languages.map((l: any) => l.name).join(', '),
    borders,
  };

  return result;
};
