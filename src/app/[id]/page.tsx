import { getCountryDetail } from '../lib/data';
import Image from 'next/image';
import Link from 'next/link';
import ListDetail from '../ui/ListDetail';

const Page = async ({ params }: { params: { id: string } }) => {
  // fix this any type
  const country: any = await getCountryDetail(params.id);
  return (
    <section className="w-full">
      <figure className="mx-auto max-w-[500px]">
        <div className="w-full">
          <Image
            src={country?.flag}
            alt={country?.name}
            width={1000}
            height={1000}
            className="object-cover"
          />
        </div>
        <figcaption className="mt-8 flex flex-col gap-y-8">
          <h2 className="text-2xl font-bold">{country?.name}</h2>
          <ul>
            <ListDetail title="Native Name" data={country?.nativeName} />
            <ListDetail title="Population" data={country?.population} />
            <ListDetail title="Region" data={country?.region} />
            <ListDetail title="Sub Region" data={country?.subregion} />
            <ListDetail title="Capital" data={country?.capital} />
          </ul>
          <ul>
            <ListDetail title="Top Level Domain" data={country?.tld} />
            <ListDetail title="Currencies" data={country?.currencies} />
            <ListDetail
              title="Languages"
              data={country?.languages.join(', ')}
            />
          </ul>
          {country?.borders.length > 0 && (
            <h3 className="text-xl font-bold">Border Countries</h3>
          )}
          <ul className="flex flex-wrap gap-x-4 gap-y-8">
            {country?.borders.length > 0 &&
              country?.borders?.map((border: string, index: number) => (
                <li key={index}>
                  <Link
                    href={`/${border}`}
                    className="rounded-md bg-white px-4 py-2 shadow-lg dark:bg-dark-blue dark:text-white"
                  >
                    {' '}
                    {border}
                  </Link>
                </li>
              ))}
          </ul>
        </figcaption>
      </figure>
    </section>
  );
};

export default Page;
