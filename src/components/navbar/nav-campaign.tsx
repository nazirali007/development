import React from 'react'
import Header from './header'
import SearchBar from './nav-searchbar'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import { MobileSearchBar } from "./nav-searchbar";

const NavCampaign = () => {
	return (
		<>
			<Header>
				<div className='flex gap-2 items-center w-full h-full'>
					<div className='basis-1/3'>
						<Link
							href={"/"}
							className='w-[35%] md:w-auto'
						>
							<Image
								src='/assets/images/logomd.png'
								alt='logo'
								// fill
								height={50}
								width={50}
								className='sm:hidden'
								blurDataURL='/assets/249.jpg'
								quality={50}
							/>
							<Image
								src={"/assets/images/logolg.png"}
								alt='logo'
								// fill
								height={50}
								width={150}
								className='hidden sm:block'
								blurDataURL='/assets/249.jpg'
								quality={50}
							/>
						</Link>

					</div>
					<div className='basis-1/3 px-[5vw]'>
						<div className='hidden md:block'>
							<SearchBar />
						</div>

					</div>


					<Link
						href={`tel:+918287636079`}
						className='flex items-center gap-2 w-max justify-end font-[400] text-white flex-row basis-1/3 '
					>
						<MobileSearchBar className={"md:hidden"} />
						<Phone className="h-5 w-5" />
						<span className="hidden md:block text-[1rem]">{`(+91) 8287636079`}</span>
					</Link>



				</div>
			</Header>
		</>
	)
}

export default NavCampaign
