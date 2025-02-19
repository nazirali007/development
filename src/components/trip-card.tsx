'use client'
import { format } from "date-fns";
import { formatIndianRupees } from "@/lib/utils";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import classNames from "classnames";
import { FaPhoneAlt } from "react-icons/fa";

export const TripStrapiCard = ({ data, className, showForm,
	setShowForm }: {
		data: {
			id: number;
			slug: string;
			price: string;
			discount: string;
			name: string;
			pickup: string;
			drop: string;
			coverimageurl?: any;
			bannerimageurl?: any;
			isCustomized: boolean;
			durationdays: number;
			dates: any[];
			coverimage: string;
			bannerimage: string
		};
		className?: string;
		showForm: boolean,
		setShowForm: React.Dispatch<React.SetStateAction<boolean>>
	}) => {
	// console.log('trip', data)
	// const { id, slug, price, discount, name, pickup, drop, coverimageurl, bannerimageurl, isCustomized, durationdays, dates, } = data;

	let newDates: any = [];

	if (data && data.dates && data?.dates.length > 0) {
		// console.log("dates1", dates); // debug
		// newDates = data?.dates.map((date: {
		// 	id: number;
		// 	tripdate: Date;
		// }) => {
		// 	return date.tripdate;
		// })
		newDates = data.dates
	}
	newDates = Array.from(new Set(newDates)).sort((a: any, b: any) => {
		return new Date(a).getTime() - new Date(b).getTime();
	});
	//console.log(newDates, "=======");
	// console.log("New Dates", slug, discount); // debug
	const formattedPrice = Number((Number(data.price) / 3).toFixed(2));
	const formattedIndianRupees = formatIndianRupees(formattedPrice);
	// console.log('data', data)
	return (
		<>
			<div
				key={data.id}
				// href={`/trip/${data.slug}`}
				// target="_blank"
				className={cn(
					"group flex h-[50vh] md:h-full w-full flex-col justify-around bg-primaryLight/[0.03] gap-y-1 overflow-visible rounded-lg border-t border-x border-zinc-100 shadow-md transition-all duration-200",
					`${className}`
				)}
			>
				<Link
					href={`/trip/${data.slug}`}
					target="_blank"
					className='relative min-h-[7.6rem] sm:h-[11rem] w-full basis-2/3 group-hover:opacity-90 md:min-h-[13rem] md:h-auto'
				>
					<Image
						src={data?.coverimage || data?.bannerimage || data.coverimageurl || data.bannerimageurl || '/assets/249.jpg'}
						alt={data.name}
						fill
						className='rounded-t-md object-cover'
						blurDataURL='/assets/249.jpg'
						// quality={50}
						// loading='lazy'
						placeholder="blur"
						style={{
							objectFit: "cover",
							objectPosition: "center"
						}}
					/>

					<div className='text-textColor/95 flex w-full items-center h-10 justify-between font-semibold absolute left-0 top-1.5 md:top-4'>
						{data?.discount && Number(data?.discount) > 0 ? (
							<div className='flex flex-row items-center justify-between w-full gap-x-0.5 md:gap-x-2 text-[0.6rem] lg:text-base'>
								<span className='relative text-black bg-secondaryMain pl-1 md:pl-2 pr-4 md:pr-5 py-1' style={{ clipPath: 'polygon(0 0, 83% 0, 100% 100%, 0% 100%)' }}>
									<div className="absolute h-[300%] w-4 bg-white/60 shadow-lg shadow-white -z-10 top-0 left-0 skew-x-12 animate-fade-in-right repeat-infinite duration-1000"></div>
									<div className="flex gap-2">
										<span className='text-[0.8rem] font-bold flex gap-1 lg:text-base text-gray-600'>
											<span className=" font-semibold">Save</span>
											<span className=" font-semibold">
												₹{formatIndianRupees(Number(data?.price) - Number(data?.discount))}/-
											</span>
										</span>
										{/* <span className='text-[0.8rem] font-semibold lg:text-base mr-2'>
											₹{formatIndianRupees(Number(discount))}
										</span> */}
									</div>
								</span>
							</div>
						) : <></>}
					</div>
				</Link>
				<div className='flex h-full flex-1 basis-1/3 flex-col justify-between text-white'>

					<Link href={`/trip/${data.slug}`} target="_blank" className='flex w-full flex-row items-center justify-between px-1 mb-2'>
						<span
							className={classNames('flex flex-row text-primaryMain border border-primaryMain items-center justify-center gap-x-1 px-2 text-[0.6rem] md:text-sm font-semibold rounded-xl', data.isCustomized ? "text-primaryMain" : "text-white bg-primaryMain")}
							title={data.pickup}
						>
							{data.isCustomized ? (<>
								Custom</>) : (<>
									Group </>)}
						</span>

						{data.durationdays > 1 && (
							<span
								className='flex flex-row items-center gap-x-1 rounded px-1 py-1 text-[0.6rem] md:text-xs font-semibold text-gray-800'
							>
								<Clock className='text-primaryMain h-3 w-3 md:h-4 md:w-4' />
								<>
									{data.durationdays}D {data.durationdays - 1}N
								</>
							</span>
						)}
					</Link>
					<div className='text-textColor/95 flex w-full items-center justify-between font-semibold px-2'>
						{Number(data.price) !== 0 ? (
							// Price
							<div className='flex flex-row items-center justify-between w-full gap-x-0.5 md:gap-x-2 text-xl'>
								<span className='relative text-black'>
									{
										data?.discount && Number(data?.discount) > 0 ? (
											<div className="flex gap-2">
												<span className='font-semibold line-through  text-gray-600'>
													{"  "}₹{formatIndianRupees(Number(data?.price))}{"  "}
												</span>
												<span className='font-semibold mr-2'>
													₹{formatIndianRupees(Number(data?.discount))}
												</span>
											</div>
										) : (<span className='font-semibold'>
											₹{formatIndianRupees(Number(data?.price))}

										</span>)
									}
								</span>
							</div>
						) : (
							// Customized
							<div className='flex flex-row items-center justify-between w-full gap-1 md:gap-4 text-[0.6rem] lg:text-base'>
								<span className='flex items-center justify-center text-black' style={{ clipPath: 'polygon(0 0, 83% 0, 100% 100%, 0% 100%)' }}>
									Price on Request
									<HiOutlineInformationCircle size={14} title="Please Call Our Expert For Pricing" className="hidden md:block transition-all duration-200 opacity-50 hover:opacity-100" />
								</span>
							</div>
						)}
					</div>
					<Link
						href={`/trip/${data.slug}`}
						target="_blank"
						className='text-textColor/95 text-sm md:text-base line-clamp-2 py-0.5 px-2 font-semibold'
						title={data.name}
					>
						<div className="truncate w-[98%]">
							{data.name}
						</div>
					</Link>

					<Link
						href={`/trip/${data.slug}`}
						target="_blank"
						className='text-textColor/80 items-center py-1 md:py-2 flex gap-0.5 md:gap-2 px-2 text-[0.6rem] md:text-sm font-medium'>
						<CalendarDays className='text-primaryMain h-5 w-5' />
						{newDates && (
							<>
								{data?.isCustomized ? (
									<span className='' title='Date of your choice'>
										Any date of your choice
									</span>
								) : (
									<div className='truncate w-[98%]'>
										{newDates.length === 0 ? (
											<span title='Date of your choice'>
												Dates on Request
											</span>
										) : (
											newDates
												.filter((date: any) => new Date(date) > new Date())
												.map((date: any) => (
													`${format(date, "MMM' 'dd")}, `
												))
										)}

									</div>
								)}
							</>
						)}
					</Link>

					<div className="flex gap-1 w-full px-1 md:px-2 py-1 md:py-2 justify-between roundedb-lg">
						<Link href="tel:+918287636079" className=" bg-primaryMain flex items-center justify-center px-1.5 py-1 rounded-md "><FaPhoneAlt className="h-3 w-3 sm:h-5 sm:w-5" /></Link>
						<div onClick={() => setShowForm(true)} className="w-full bg-primaryMain flex items-center justify-center md:text-base text-sm px-1 py-1 font-semibold rounded-md cursor-pointer">Request Callback</div>
					</div>
					{/* <div className='col-span-4 rounded-b-md bg-zinc-200 px-2 py-1 md:py-2 mt-2 text-[0.5rem] md:text-xs'>
						{data.discount === "0" && data.price == "0" ? (
							<>
								<p className='text-textColor/70  font-medium'>
									or <span className='font-semibold'>3</span> monthly payments {` `}
									<span className='text-primaryMain'>(T&C)</span>
								</p>
							</>
						) : (
							<>
								<p className='text-textColor/70 font-medium'>
									or <span className='font-semibold'>3</span> monthly payments of
									<span className='ml-0.5 font-semibold'>
										₹{formattedIndianRupees}
									</span>
									<span className='text-primaryMain'>(T&C)</span>
								</p>
							</>
						)}
					</div> */}
				</div>
			</div>
		</>
	)
}

export const TripCard = ({
	key,
	data,
	className,
}: {
	key: number;
	data: {
		id: number;
		slug: string;
		coverimageurl: string;
		coverimagealttag: string;
		duration: string;
		name: string;
		discountedPrice: string;
		startingcost: string;
		isCustomized: boolean;
		pickuplocation: string;
		tripdates: Date[];
	};
	className?: string;
}) => {
	return (
		<>
			<Link
				key={key}
				href={`/trip/${data.slug}`}
				target="_blank"
				className={cn(
					"group flex h-full flex-col w-full bg-primaryLight/[0.03] justify-around gap-y-1 overflow-visible rounded-lg border-t border-x border-zinc-100 shadow-md transition-all duration-200",
					`${className}`
				)}
			>
				<div
					className='relative min-h-[14rem] sm:h-[14rem] lg:min-h-60 w-full basis-2/3 group-hover:opacity-90 md:min-h-60 md:h-auto'
				>
					<Image
						src={data.coverimageurl}
						alt={data.coverimagealttag}
						fill
						className='rounded-t-md object-cover'
						blurDataURL='/assets/249.jpg'
						// quality={80}
						loading='lazy'
					/>
					{/* {Number(data.startingcost) !== 0 && (
						<div className='min-w-1/5 gold-shine-effect bg-secondaryMain relative top-4 flex max-w-fit flex-row items-center gap-1 overflow-hidden rounded-r-md px-2 py-1 font-semibold shadow-sm'>
							<Tag size={16} className='' />
							Save ₹{` `}
							<span
								className='text-sm font-bold'
								title={`Save ₹${Number(data.startingcost) - Number(data.discountedPrice)}`}
							>
								{formatIndianRupees(
									Number(data.startingcost) - Number(data.discountedPrice)
								)}
							</span>
						</div>
					)} */}
				</div>
				<div className='flex h-full flex-1 basis-1/3 min-h-[210px] flex-col justify-between text-white'>
					<div className='flex w-full flex-row items-center justify-between px-1 mb-2'>
						<span
							className='flex flex-row gap-x-1 rounded p-1 text-xs font-semibold text-gray-800'
							title={data.pickuplocation}
						>
							<MapPin className='text-primaryMain h-4 w-4' />{" "}
							{data.pickuplocation}
						</span>
						{/* <div className='flex flex-row gap-x-1 rounded p-1 text-xs font-semibold text-gray-800'>
							{data.isCustomized ? "Customized" : "Group Trip"}
						</div> */}
						<span
							className='flex flex-row gap-x-1 rounded px-1 py-1 text-xs font-semibold text-gray-800'
							title={data.duration}
						>
							<Clock className='text-primaryMain h-4 w-4' /> {data.duration}
						</span>
					</div>
					<h2
						className='text-textColor/95 text-xl md:text-lg line-clamp-2 py-1 px-2 font-semibold capitalize'
						title={data.name}
					>
						{data.name}
					</h2>
					<div className='text-textColor/95 flex w-full items-center h-10 justify-between font-semibold'>
						{/* Price / GroupTrip */}
						{Number(data.discountedPrice) !== 0 ? (
							// Price
							<div className='flex flex-row items-center justify-between w-full gap-x-2'>
								<span className='text-lg lg:text-base text-black bg-secondaryMain pl-2 pr-4 py-1' style={{ clipPath: 'polygon(0 0, 83% 0, 100% 100%, 0% 100%)' }}>
									₹{` `}
									{formatIndianRupees(Number(data.discountedPrice))}
									{` `}/-
								</span>
								{data.isCustomized ? <div className='flex flex-row gap-x-1 rounded-xl px-2 py-1 text-xs font-semibold  mx-4 text-primaryMain border-2 border-primaryMain'>
									Customised
								</div> : <div className='flex flex-row gap-x-1 rounded-xl px-2 py-1 text-xs font-semibold text-white mx-4 bg-primaryMain'>
									Group Trip
								</div>}

							</div>
						) : (
							// Customized
							<div className='flex flex-row items-center justify-between w-full gap-x-2'>
								<span className='text-lg flex items-center gap-1 pr-6 lg:text-base text-black bg-secondaryMain pl-2 py-1' style={{ clipPath: 'polygon(0 0, 83% 0, 100% 100%, 0% 100%)' }}>
									{` `}
									Price on Request
									{` `}
									<HiOutlineInformationCircle size={14} title="Please Call Our Expert For Pricing" className="mb-2 transition-all duration-200 opacity-50 hover:opacity-100" />
								</span>
								{data.isCustomized ? <div className='flex flex-row gap-x-1 rounded-xl px-2 py-1 text-xs font-semibold  mx-4 text-primaryMain border-2 border-primaryMain'>
									Customised
								</div> : <div className='flex flex-row gap-x-1 rounded-xl px-2 py-1 text-xs font-semibold text-white mx-4 bg-primaryMain'>
									Group Trip
								</div>}

								{/* <div className='flex flex-row gap-x-1 rounded-xl px-2 py-1 text-xs font-semibold text-white mx-4 bg-primaryMain'>
									{data.isCustomized ? "Customised" : "Group Trip"}
								</div> */}
							</div>
						)}


						{/* {Number(data.startingcost) !== 0 && (
										<span className='text-lg text-zinc-600 pl-2 pr-4 py-1 flex items-center'>
											₹{` `}
											<div className="line-through ">
												{formatIndianRupees(Number(data.startingcost))}
											</div>


											{Number(data.startingcost) !== 0 && (
												<div className='min-w-1/5 flex max-w-fit flex-row items-center gap-1 overflow-hidden px-2 py-1 font-semibold text-base text-red-600'>
													{/* <Tag size={16} className='' /> */}
						{/* {

														Math.round((1 - Number(data.discountedPrice) / Number(data.startingcost)) * 100)
													}% OFF
												</div>
											)}

										</span>
									)} */}

					</div>
					<span className='text-textColor/80 my-2 flex gap-2 px-2 text-sm font-medium'>
						<CalendarDays className='text-primaryMain h-5 w-5' />
						{data.isCustomized || data.tripdates.length === 0 ? (
							<span className='' title='Date of your choice'>
								Any date of your choice
							</span>
						) : (
							""
						)}
						{data.tripdates.length > 3 ? (
							<>
								{data.tripdates
									.filter((date: any) => new Date(date) > new Date())
									.slice(0, 3)
									.map((date: any, index: number) => (
										<span key={index}>{format(date, "MMM' 'dd")},</span>
									))}
								{data.tripdates.length > 3 && "..."}
							</>
						) : (
							data.tripdates
								.filter((date: any) => new Date(date) > new Date())
								.map((date: any, index: number) => (
									<span key={index}>{format(date, "MMM' 'dd")},</span>
								))
						)}
					</span>
					<div className='col-span-4 rounded-b-md bg-zinc-200 px-2 py-2 mt-2'>
						{data.discountedPrice === "0" && data.startingcost == "0" ? (
							<>
								<p className='text-textColor/70 text-xs font-medium'>
									or <span className='font-semibold'>2</span> monthly payments {` `}
									<span className='text-primaryMain'>(T&C)</span>
								</p>
							</>
						) : (
							<>
								<p className='text-textColor/70 text-xs font-medium'>
									or <span className='font-semibold'>2</span> monthly payments of{` `}
									{` `}<span className='font-semibold'>
										{` `}₹
										{formatIndianRupees(Number(data.discountedPrice) / 2)}
									</span>{" "}
									{Number(data.discountedPrice) / 2 !== Number(data.discountedPrice)
										? `each`
										: ``}{` `}
									<span className='text-primaryMain'>(T&C)</span>
								</p>
							</>
						)}
					</div>

					{/* Buttons */}
					{/* <div className=' flex gap-3  px-1 py-2'>
						<Link
							href={"/"}
							target='_blank'
							className='border-primary bg-primaryMain/10 text-primary hover:bg-primaryMain/20 flex w-full items-center justify-center rounded-md border p-2 text-center text-sm font-semibold transition-all  duration-200 hover:shadow-sm md:text-sm'
						>
							Call Now
						</Link>

						{data.isCustomized ||
							Number(data.discountedPrice) === 0 ||
							data.tripdates.length === 0 ? (
							<div
								// disabled={true}
								className='hover:bg-pirmaryDark bg-primary hover:bg-primaryDark flex w-full items-center justify-center rounded-md p-2 text-center text-sm font-semibold text-white transition-all duration-200 hover:shadow-sm md:text-sm'
							>
								Request Callback
							</div>
						) : (
							<Link
								href={`/book/${data.slug}`}
								className='hover:bg-pirmaryDark bg-primary hover:bg-primaryDark flex w-full items-center justify-center rounded-md p-2 text-center text-sm font-semibold text-white transition-all duration-200 hover:shadow-sm md:text-sm'
							>
								Request Callback
							</Link>
						)}
					</div> */}
				</div>
			</Link >
		</>
	);
};
