export const getAllCountries = async () => {
  try {
    const response = await fetch(
      `${process.env.ENDPOINT}/v3.1/all?fields=cca3,name,population,region,capital,flags`,
    );
    const data = await response.json();
    // Fix the any later
    const countries = data.map((country: any) => {
      const {
        cca3,
        name: { common },
        population,
        region,
        capital: [city],
        flags: { png },
      } = country;
      return {
        cca3,
        flag: png,
        name: common,
        population,
        region,
        capital: city,
      };
    });

    // fix the any later
    const sortedCountries = countries.sort((a: any, b: any) => {
      if (a.name < b.name) return -1;
    });
    return sortedCountries;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getCountriesByRegion = async (region: string) => {
  try {
    const response = await fetch(
      `${process.env.ENDPOINT}/v3.1/region/${region}?fields=cca3,name,population,region,capital,flags`,
    );
    const data = await response.json();
    const countries = data.map((country: any) => {
      const {
        cca3,
        name: { common },
        population,
        region,
        capital: [city],
        flags: { png },
      } = country;
      return {
        cca3,
        flag: png,
        name: common,
        population,
        region,
        capital: city,
      };
    });
    // fix the any later
    const sortedCountries = countries.sort((a: any, b: any) => {
      if (a.name < b.name) return -1;
    });
    return sortedCountries;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getCountryDetail = async (cca3: string) => {
  try {
    const response = await fetch(
      `${process.env.ENDPOINT}/v3.1/alpha/${cca3}?fields=name,nativename,population,region,subregion,capital,flags,currencies,borders,languages,tld`,
    );
    const data = await response.json();
    const result = {
      flag: data.flags.png,
      name: data.name.common,
      nativeName:
        data.name.nativeName[Object.keys(data.name.nativeName)[0]].common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital[0],
      tld: data.tld[0],
      currencies: data.currencies[Object.keys(data.currencies)[0]].name,
      languages: Object.values(data.languages),
      borders: data.borders,
    };
    return result;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
