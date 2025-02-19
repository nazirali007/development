"use client";

import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { cn } from "@/lib/utils";

export default function DateShow({ dates }: { dates: any[] }) {
	// Extract unique months from dates
	dates = Array.from(new Set(dates));

	const uniqueMonths = Array.from(
		new Set(dates.map((date) => new Date(date).getMonth()))
	).filter(value => !isNaN(value)).sort((a, b) => a - b);

	const uniqueMonthsYear = Array.from(
		new Set(dates.map((date) => new Date(date).getMonth() + new Date(date).getFullYear() * 100))
	).filter(value => !isNaN(value)).sort((a, b) => a - b);

	// Filter out months without dates and filter only current month and upcoming months
	const filteredMonths = uniqueMonths.filter((month) => {
		const datesForMonth = dates.filter(
			(date) => new Date(date).getMonth() === month
		);
		const currentDate = new Date();
		const currentMonth = currentDate.getMonth();
		return datesForMonth.length > 0 && month >= currentMonth;
	});
	const filteredMonthsYear = uniqueMonthsYear.filter((month) => {
		const datesForMonth = dates.filter(
			(date) => new Date(date).getMonth() + new Date(date).getFullYear() * 100 === month
		);
		const currentDate = new Date();
		const currentMonth = currentDate.getMonth();
		const currentYear = currentDate.getFullYear()
		return datesForMonth.length > 0 && month >= currentMonth + currentYear * 100;
	});

	// Set default selected month to the first unique month with dates
	const defaultMonth = filteredMonths.length > 0 ? filteredMonths[0] : null;
	const defaultMonthYear = filteredMonthsYear.length > 0 ? filteredMonthsYear[0] : null;

	const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
	const [selectedMonthYear, setSelectedMonthYear] = useState(defaultMonthYear);

	const handleClick = (month: any) => {
		setSelectedMonth(month);
	};
	const handleClick2 = (monthYear: any) => {
		// setSelectedMonth(month);
		setSelectedMonthYear(monthYear);
	};

	useEffect(() => {
		// Update selected month if the default month changes
		setSelectedMonth(defaultMonth);
		setSelectedMonthYear(defaultMonthYear);
	}, [defaultMonth, defaultMonthYear]);

	// Function to filter dates for the selected month
	const filterDatesForMonth = (month: number) => {
		const currentDate = new Date();
		return dates.filter((date) => {
			const dateValue = new Date(date);
			return dateValue >= currentDate && dateValue.getMonth() === month;
		});
	};
	const filterDatesForMonthYear = (monthYear: number) => {
		const currentDate = new Date();
		return dates.filter((date) => {
			const dateValue = new Date(date);
			return dateValue >= currentDate && dateValue.getMonth() + dateValue.getFullYear() * 100 === monthYear;
		});
	};

	const [dropDown, setDropDown] = useState<boolean>(false);

	const dropdownRef = useRef<any>();

	const closeDropdown = () => {
		setDropDown(false);
	};

	const handleOutsideClick = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			closeDropdown();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick);
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// console.log('dates', moment(dates[0]).month() + moment(dates[0]).year() * 100);
	// console.log('unqiue months and Year', uniqueMonthsYear)

	return (
		<div className='w-full flex flex-col gap-4'>
			{/* Buttons for each unique month with dates */}
			<div className='flex flex-wrap md:hidden relative'>
				{/* Dropdown selector */}
				<div className='' ref={dropdownRef}>
					<button
						onClick={() => setDropDown(!dropDown)}
						className='bg-primaryLight cursor-pointer px-6 py-2 font-bold uppercase  text-white transition-all delay-100'
					>
						{moment(
							dates.find((date) => moment(date).month() + moment(date).year() * 100 === selectedMonthYear)
						).format("MMM")}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='ml-2 inline-block h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.41-1.42L10 10.59l3.29-3.3a1 1 0 111.42 1.42l-4 4a1 1 0 01-.71.28z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
					{dropDown && (
						<div className={cn('absolute grid grid-cols-2 left-0 right-0 top-10 z-[105] mt-4 w-full flex-col rounded-sm border border-zinc-300 bg-slate-100 p-2 shadow-lg',
							filteredMonthsYear.length > 2 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-1 max-w-full min-h-18'
						)}>
							{filteredMonthsYear.map((month) => (
								<button
									key={month}
									onClick={() => {
										handleClick2(month);
										setDropDown(false);
									}}
									className={`basis-1/2 m-1 px-6 py-2 h-fit font-bold uppercase transition-all delay-100 rounded-lg  ${selectedMonthYear === month
										? " cursor-pointer border-2 border-white text-white bg-primaryLight"
										: "cursor-pointer text-primaryLight border bg-slate-50 border-primaryLight"
										}`}
								>
									{moment(
										dates.find((date) => moment(date).month() + moment(date).year() * 100 === month)
									).format("MMM")}
								</button>
							))}
						</div>
					)}
				</div>
			</div>

			<div className='hidden md:flex flex-wrap'>
				{filteredMonthsYear.map((month) => (
					<button
						key={month}
						onClick={() => handleClick2(month)}
						className={`px-6 py-2 font-bold uppercase transition-all delay-100 border-4 border-primaryLight  ${selectedMonthYear === month
							? "text-primaryLight cursor-text bg-white"
							: " bg-primaryLight cursor-pointer text-white"
							}`}
					>
						{moment(
							dates.find((date) => moment(date).month() + moment(date).year() * 100 === month)
						).format("MMM")}
						{/* {new Date(
								dates.find((date) => new Date(date).getMonth() === month)
								).toLocaleString("default", {
								month: "short",
						})} */}
					</button>
				))}
			</div>

			{/* Display selected month's dates */}
			<div className='flex flex-wrap w-full items-center gap-4 px-5'>
				{selectedMonthYear !== null &&
					filterDatesForMonthYear(selectedMonthYear!).map((date, index) => (
						<div
							key={date}
							className='bg-primaryLight flex w-16 flex-col gap-2 rounded p-1 pt-2 text-center font-semibold'
						>
							<div className='flex items-start justify-center text-base uppercase text-white'>
								{moment(date).format("MMM")}
							</div>
							<div className=' rounded-b bg-white text-2xl'>
								{/* {new Date(date).toLocaleDateString("default", {
					                  day: "numeric",
					                })} */}
								{moment(date).format("D")}
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
