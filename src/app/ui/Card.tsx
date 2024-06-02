import Image from 'next/image';
import Link from 'next/link';

const Card = ({
  cca3,
  flag,
  name,
  population,
  region,
  capital,
}: {
  cca3: string;
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}) => {
  return (
    <Link href={`/${cca3}`}>
      <figure className="flex aspect-[15/16] flex-col justify-between overflow-hidden rounded-lg bg-white shadow-lg dark:bg-dark-blue dark:text-white">
        <div className="h-1/2">
          <Image
            src={flag}
            alt={name}
            width={1000}
            height={1000}
            className="h-full object-cover"
          />
        </div>
        <figcaption className="flex h-1/2 flex-col justify-between px-6 py-8">
          <h2 className="text-2xl font-bold">{name}</h2>
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
