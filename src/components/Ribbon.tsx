import Link from 'next/link'
import React from 'react'
// import Countdown from './CountDown'

// bg-gradient-to-r from-primaryMain from-0% via-[#FEE60B] via-45% to-primaryMain to-60% 
const Ribbon = () => {
	return (
		<a href="/ladakh-spiti-early-bird" className='w-full h-9 bg-gradient-to-r from-primaryMain from-0% via-violet-400 via-45% to-primaryMain to-100% flex items-center gap-2 justify-center text-white text-base md:text-[1.1rem] py-1 hover:drop-shadow-xl duration-200 relative'>
			<div className='hover:scale-105 flex items-center gap-2'>
				<div className='drop-shadow-xl font-bold'>Ladakh & Spiti Early Bird Offer!</div>
				{/* <div className='drop-shadow-xl font-semibold'>is Live Now!</div> */}
			</div>
			{/* <Countdown /> */}
		</a>
	)
}

export default Ribbon
