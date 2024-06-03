import { getCountryDetail } from '../lib/data';
import Image from 'next/image';
import Link from 'next/link';
import ListDetail from '../ui/ListDetail';
import { CountryDetail } from '../lib/data';
import { getCountryName } from '../lib/data';

const Page = ({ params }: { params: { id: string } }) => {
  const country: CountryDetail = getCountryDetail(params.id);
  return (
    <section className="flex w-full flex-col gap-y-6 md:gap-y-12 lg:h-[calc(100dvh-160px)] lg:items-center lg:justify-center lg:gap-y-16 lg:px-12">
      <figure className="flex max-w-[500px] flex-col self-center md:max-w-full md:items-center md:justify-center md:gap-x-12 lg:mx-auto lg:flex-row lg:gap-x-16 xl:gap-x-28">
        <div className="w-full md:w-[55%] lg:self-start xl:w-1/2">
          <Image
            src={country?.flag}
            alt={country?.name}
            width={1000}
            height={1000}
            className="aspect-video rounded-lg object-cover shadow-lg"
          />
        </div>
        <figcaption className="mt-8 lg:mt-0 lg:w-[45%] xl:w-auto">
          <div className="mb-12 flex flex-col gap-y-4">
            <h2 className="mb-4 text-2xl font-bold">{country?.name}</h2>
            <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-16">
              <ul className="flex flex-col gap-y-4">
                <ListDetail title="Native Name" data={country?.nativeName} />
                <ListDetail title="Population" data={country?.population} />
                <ListDetail title="Region" data={country?.region} />
                <ListDetail title="Sub Region" data={country?.subregion} />
                <ListDetail title="Capital" data={country?.capital} />
              </ul>
              <ul className="flex flex-col gap-y-4">
                <ListDetail
                  title="Top Level Domain"
                  data={country?.topLevelDomain}
                />
                <ListDetail title="Currencies" data={country?.currencies} />
                <ListDetail title="Languages" data={country?.languages} />
              </ul>
            </div>
          </div>
          <div>
            {country?.borders?.length > 0 && (
              <h3 className="mb-6 text-xl font-bold">Border Countries</h3>
            )}
            <ul className="flex flex-wrap gap-x-4 gap-y-8">
              {country?.borders?.length > 0 &&
                country?.borders?.map((border: string, index: number) => (
                  <li key={index}>
                    <Link
                      href={`/${border}`}
                      className="rounded-md bg-white px-4 py-2 shadow-lg dark:bg-dark-blue dark:text-white"
                    >
                      {getCountryName(border)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default Page;
