"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Custom404 = (): JSX.Element => {
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);
    if (secondsRemaining === 0) {
      console.log('Redirecting to homepage...');
      router.push('/');
    }
    return () => clearInterval(interval);
  }, [secondsRemaining, router]);

  return (
    <>
      <div className='relative flex h-screen flex-col items-center justify-center'>
        <h1 className='text-center text-4xl font-bold md:text-5xl'>
          404 - Page Not Found
        </h1>
        <p className='mt-4 text-center md:text-lg'>
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link
          href='/'
          className='mt-4 rounded-md bg-primaryMain px-4 py-2 text-lg font-bold text-zinc-100 hover:bg-primaryMain/95 hover:text-white'
        >
          Go back home
        </Link>
        {secondsRemaining > 0 ? (
          <>
            <p className='absolute bottom-5 text-xs italic md:text-sm lg:text-base'>
              Redirecting to homepage in {secondsRemaining} seconds...
            </p>
          </>
        ) : (
          <>
            <p className='absolute bottom-5 text-xs italic md:text-sm lg:text-base'>
              Redirecting to homepage now...
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Custom404;