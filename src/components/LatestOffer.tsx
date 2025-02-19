'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import GetQuoteHeroForm from './get-quote-hero-form'
import Link from 'next/link'

const LatestOffer = () => {
	const [showPopup, setShowPopup] = useState<boolean>(false)
	// const router = useRouter()
	const pathname = usePathname()
	// const [delay, setDelay] = useState<number>(1000)
	useEffect(() => {
		if (pathname !== '/ladakh-spiti-early-bird' && !pathname.includes('/trip/')) {
			setShowPopup(false)
		}
		// else {
		// 	const timer = setTimeout(() => {
		// 		setShowPopup(false)
		// 		localStorage.setItem('popupShown', 'true')
		// 	}, delay)

		// 	return () => clearTimeout(timer)
		// }
	}, [pathname])
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPopup(true)
		}, 20000)
		return () => clearTimeout(timer)

	}, [])
	return (
		<>
			{showPopup && (
				<div className='fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center overflow-hidden bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out'>
					<div className='absolute left-1/2 top-1/2 z-[100] flex min-h-[60vh]  w-[90vw] md:w-[30vw] -translate-x-1/2 -translate-y-1/2 flex-col gap-2 overflow-hidden rounded-md p-2 bg-gradient-to-br from-primaryMain from-0% via-violet-400 text via-25% to-primaryMain to-90% mt-10'>
						{/* Uncomment and adjust Image component if needed */}
						{/* <Image
							src={src}
							alt={"image"}
							fill
							style={{
								objectFit:"fit",
								objectPosition:"top"
								}}
							className="shadow-2x1 h-full w-full cursor-pointer rounded-lg object-fill object-center sm:object-cover"
							blurDataURL='/assets/249.jpg'
							quality={80}
				            /> */}
						<div
							// href="/summer-sale"
							className='font-black text-[0.9rem] md:text-lg text-center text-white drop-shadow-sm hover:drop-shadow-xl hover:scale-105 duration-200'>
							Ladakh & Spiti Early Bird Offer!
						</div>
						<GetQuoteHeroForm setShowPopup={setShowPopup} />
						{/* Close button */}
						<div
							onClick={() => setShowPopup(false)}
							className='absolute right-[0.5rem] z-[105] top-[0.5rem] cursor-pointer rounded-sm opacity-70 transition-all duration-500 ease-in-out hover:rotate-180 hover:text-primaryMain hover:opacity-100'
						>
							<X className='h-6 w-6 rounded-full border border-zinc-200 bg-white px-1 font-bold shadow-sm text-gray-500' />
						</div>
					</div>
				</div >
			)}
		</>
	)
}

export default LatestOffer
