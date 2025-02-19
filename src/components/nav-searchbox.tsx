"use client";

import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "@/hooks/use-on-click.outside";

export default function NavSearchbox({
	className,
	...props
}: {
	className?: string;
	props?: any;
}) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");
	const [filteredData, setFilteredData] = React.useState<
		| {
			name: string;
			slug: string;
		}[]
		| undefined
	>([]);
	const navRef = React.useRef<HTMLDivElement | null>(null);
	// const data = getTripSearched();

	// useEffect(() => {
	// 	// Filter the data based on the condition when 'value' changes
	// 	const filtered = data?.filter((trip) =>
	// 		trip.name.toLowerCase().includes(value.toLowerCase())
	// 	);
	// 	setFilteredData(filtered);
	// 	// Update 'open' based on the filtered data
	// 	setOpen(value !== "" && filtered?.length! > 0);
	// }, [value, data]);

	useEffect(() => {
		if (value) {
			setOpen(true);
		} else {
			// setOpen(false)
		}
	}, [value]);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleInputFocus = () => {
		setOpen(true);
	};

	const handleInputBlur = () => {
		// Delay closing the dropdown to handle clicks on the dropdown options
		setTimeout(() => {
			// setOpen(false);
		}, 200);
	};

	useOnClickOutside(navRef, () =>
		setTimeout(() => {
			setOpen(false);
		}, 200)
	);

	return (
		<>
			<section
				{...props}
				className={cn('rounded-t-md  bg-white',
					open ? 'rounded-t-md ' : 'rounded-md'
					, `${className}`)}>
				<div className='relative z-50'>
					<div className='flex px-1'>
						{/* <MapPin className={cn(`text-primaryMain md:w-8 md:h-8 w-6 h-6`)} /> */}
						<Search className={cn(`text-primaryMain w-6 h-6`)} />
						<input
							type='text'
							placeholder='Search Trips'
							value={value}
							onChange={onInputChange}
							onFocus={handleInputFocus}
							onBlur={handleInputBlur}
							className={cn(
								"w-full font-medium outline-none placeholder:text-gray-800/80",
								'px-1 md:px-2'
							)}
						/>
					</div>
					{open && (
						<div
							ref={navRef}
							className='absolute top-8 md:top-10 z-50 flex max-h-40 w-full flex-col gap-2 overflow-y-scroll bg-white px-4 py-4 rounded-b-md'
						>
							{filteredData && filteredData.length > 0 ? (
								filteredData.map((list) => (
									<Link
										key={list.slug}
										href={`/trip/${list.slug}`}
										className={cn(
											"transition-all duration-200 ease-in-out flex flex-row gap-1 items-center justify-start w-full",
											`text-sm text-gray-600 hover:text-gray-900 hover:font-semibold border-b pb-1 px-0.5`
										)}
									>
										<Search className={cn(`md:w-4 md:h-4 w-3 h-3`)} />
										{list.name}
									</Link>
								))
							) : (
								<p className='text-gray-600'>
									<span className='text-gray-800/80 sm:hidden block'>Oops, No results found</span>
									<span className='hidden sm:block'>Oops, No Search result found</span>
								</p>
							)}
						</div>
					)}
				</div>
			</section>
		</>
	);
}
