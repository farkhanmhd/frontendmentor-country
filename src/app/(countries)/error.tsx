'use client';

import { useRouter } from 'next/navigation';

const Error = () => {
  const router = useRouter();

  const handleReset = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-semibold text-red-600">
        Something went wrong
      </h1>
      <button
        onClick={handleReset}
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Reset
      </button>
    </div>
  );
};

export default Error;
