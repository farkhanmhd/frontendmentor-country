import Image from 'next/image';
import Link from 'next/link';
import { AllCountry } from '../lib/data';

const Card = ({
  alpha3Code,
  flag,
  name,
  population,
  region,
  capital,
}: AllCountry) => {
  return (
    <Link href={`/${alpha3Code}`} className="block">
      <figure className="flex w-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-lg dark:bg-dark-blue dark:text-white">
        <div>
          <Image
            src={flag}
            alt={name}
            width={1000}
            height={1000}
            className="aspect-video h-full object-cover"
          />
        </div>
        <figcaption className="flex flex-col justify-between px-6 py-8">
          <h2 className="line-clamp-1 overflow-hidden text-ellipsis text-2xl font-bold">
            {name}
          </h2>
          <ul className="text-lg">
            <li>
              <span className="font-bold">Population: </span>
              <span>{population.toLocaleString()}</span>
            </li>
            <li>
              <span className="font-bold">Region: </span>
              <span>{region}</span>
            </li>
            <li>
              <span className="font-bold">Capital: </span>
              <span>{capital}</span>
            </li>
          </ul>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Card;
