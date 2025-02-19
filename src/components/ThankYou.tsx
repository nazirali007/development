"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';

const ThankYou = () => {
	// const [secondsRemaining, setSecondsRemaining] = useState(6);

	const router = useRouter();

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setSecondsRemaining((prev) => prev - 1);
	// 	}, 1000);
	// 	if (secondsRemaining === 0) {
	// 		console.log('Redirecting you back...');
	// 		router.back()
	// 	}
	// 	return () => clearInterval(interval);
	// }, [secondsRemaining, router]);

	return (
		<>
			<div className='relative flex h-screen flex-col items-center justify-center bg-gradient-to-b from-primaryMain/90 via-primaryLight/70 to-transparent via-40% to-90%'>
				<h1 className='text-center text-4xl font-bold md:text-5xl'>
					Thank you for Reaching Out to us.
				</h1>
				<p className='mt-4 text-center md:text-lg'>
					Our Sales Executive will reach out to you soon.
				</p>
				<Button
					onClick={() => {
						router.back()
					}}
					className='mt-4 rounded-md bg-primaryMain px-4 py-2 text-lg font-bold text-zinc-100 hover:bg-primaryMain/95 hover:text-white'
				>
					Go Back
				</Button>
				{/* {secondsRemaining > 0 ? (
					<>
						<p className='absolute bottom-5 text-xs italic md:text-sm lg:text-base'>
							Redirecting to back in {secondsRemaining} seconds...
						</p>
					</>
				) : (
					<>
						<p className='absolute bottom-5 text-xs italic md:text-sm lg:text-base'>
							Redirecting you now...
						</p>
					</>
				)} */}
			</div>
		</>
	)
}

export default ThankYou
