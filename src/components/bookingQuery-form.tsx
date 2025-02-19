"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { bookingQuerySchema } from "@/lib/zod-schema";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiTrip } from "react-icons/bi";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import {
	ArrowRight,
	ChevronDown,
	ChevronUp,
	ChevronUpCircleIcon,
	Clock,
	IndianRupee,
	Loader,
	MapPin,
	MinusSquareIcon,
	PlusSquareIcon,
} from "lucide-react";
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { format } from "date-fns";
import axios from "axios";
import { toast, useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { getStrapiBookingTrip } from "@/lib/strapi";
import moment from "moment";
import { CAT_WHATSAPP_LINK } from "@/server/db/static/variables";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
type Checked = DropdownMenuCheckboxItemProps["checked"]
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
interface BookingFormProps {
	slug: string;
}

const steps = [
	{
		id: "Step 1",
		name: "Batch Date",
		fields: ["tripName", "tripDate", "tripDuration"],
	},
	{
		id: "Step 2",
		name: "Member Counts/ Sharing",
		fields: ["memeberCounts"],
	},
	{
		id: "Step 3",
		name: "Personal Information",
		fields: ["name", "email", "phone"],
	},
	{
		id: "Step 4",
		name: "Submit",
	}
];

const BookingQueryForm = ({
	trip
}: {
	trip: {
		durationdays: number;
		name: string;
		dates: {
			date: Date;
		}[];
		costing: {
			id: number,
			__component: 'trip.costing' | 'trip.costingnote',
			Mode: string,
			Price: string,
			partialamount: null | undefined | any,
			discountedprice: null | undefined | any,
		}[],
		pickup: string;
		drop: string;
		slug: string;
	};
}) => {
	const [previousStep, setPreviousStep] = useState(0);
	const [currentStep, setCurrentStep] = useState(0);
	const router = useRouter();

	const delta = currentStep - previousStep;

	const next = async () => {
		const fields = steps[currentStep].fields;
		status();

		// console.log("fields", fields);

		if (currentStep < steps.length - 1) {
			// if (currentStep === steps.length - 2) {
			// 	console.log("Handle submit");
			// 	GetConnect();
			// }
			if (currentStep === 0) {
				if (!tripDate) {
					toast({
						title: "Select a date to continue",
						variant: "custom",
						duration: 1500,
					});
					return;
				}
			}

			if (currentStep === 1) {
				if (Object.keys(travelModeMembers).length === 0) {
					toast({
						title: "Add atleast one member to book the trip",
						variant: "custom",
						duration: 1500,
					});
					return;
				}
			}

			if (currentStep === 2) {
				if (!name) {
					toast({
						title: "Required Name field",
						variant: "custom",
						duration: 1500,
					});
					return;
				}
				if (!email) {
					toast({
						title: "Required Email field",
						variant: "custom",
						duration: 1500,
					});
					return;
				}
				if (!phone) {
					toast({
						title: "Required Phone field",
						variant: "custom",
						duration: 1500,
					});
					return;
				}
				// if (checkbox === false) {
				// 	toast({
				// 		title: "Please agree to the terms and conditions",
				// 		variant: "custom",
				// 		duration: 1500,
				// 	});
				// 	return;
				// }
			}

			setPreviousStep(currentStep);
			setCurrentStep((step) => step + 1);
		}
	};

	const prev = () => {
		status();
		if (currentStep > 0) {
			setPreviousStep(currentStep);
			setCurrentStep((step) => step - 1);
		}
	};

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	// const [checkbox, setCheckbox] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const defaultMonth = trip.dates.length > 0 ? trip.dates[0].date : null;
	const [filteredMonth, setFilteredMonth] = useState(defaultMonth);

	const uniqueMonths = trip.dates.map((date) => {
		let months = moment(date.date).format("M")
		return months
	}).filter((value, index, self) => {
		return self.indexOf(value) === index;
	}
	);

	// Filter out months without dates and filter only current month and upcoming months
	const filteredMonths = Array.from(
		new Set(trip.dates.map((date) => new Date(date.date)))
	)
	const [selectedMonth, setSelectedMonth] = useState<string | null>(uniqueMonths[0]);

	// console.log("filteredMonths", filteredMonths, trip.dates);
	const handleClick = (month: string) => {
		setSelectedMonth(month);
	};

	const [travelModeMembers, setTravelModeMembers] = useState<{
		[id: string]: number;
	}>({});

	const [tripDate, setTripDate] = useState<
		Date | null
	>(
	);

	const status = () => {
		console.info("Current Step", currentStep);
		// console.info({
		// 	"tripName": trip.name,
		// 	"tripDuration": trip.durationdays,
		// 	"name": name,
		// 	"email": email,
		// 	"phone": phone,
		// 	"tripDate": tripDate,
		// 	"travelModeMembers": travelModeMembers,
		// 	"slug": trip.slug,
		// });
	}

	function handelMembers(mode: string) {
		setTravelModeMembers((prev) => ({
			...prev,
			[mode]: (prev[mode] || 0) + 1,
		}));
	}

	function handleRemoveMember(mode: string) {
		setTravelModeMembers((prev) => {
			const updatedMembers = {
				...prev,
				[mode]: Math.max((prev[mode] || 0) - 1, 0),
			};

			// Remove the key if the count is 0
			if (updatedMembers[mode] === 0) {
				delete updatedMembers[mode];
			}

			return updatedMembers;
		});
	}

	async function GetConnect() {
		try {
			if (Object.keys(travelModeMembers).length === 0) {
				toast({
					title: "Add atleast one member to book the trip",
					variant: "custom",
					duration: 1500,
				});
				return;
			}
			if (!name) {
				toast({
					title: "Required Name field",
					variant: "custom",
					duration: 1500,
				});
			}
			if (!email) {
				toast({
					title: "Required Email field",
					variant: "custom",
					duration: 1500,
				});
			}
			if (!phone) {
				toast({
					title: "Required Phone field",
					variant: "custom",
					duration: 1500,
				});
			}
			// if (checkbox === false) {
			// 	toast({
			// 		title: "Please agree to the terms and conditions",
			// 		variant: "custom",
			// 		duration: 1500,
			// 	});
			// 	return;
			// }

			setIsLoading(true);
			// console.log("client", travelModeMembers)
			const headers = {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*", // Example CORS header (should be set by the server)
				"Access-Allow-Origin": "*",
			};


			const response = await (
				await axios.post(
					`${process.env.NEXT_PUBLIC_BASE_URL}/api/bookingquery`,
					{
						tripName: trip.name,
						tripDate,
						tripDuration: `${trip.durationdays}D - ${trip.durationdays - 1}N`,
						name,
						email,
						phone,
						memberCounts: travelModeMembers,
						slug: `${process.env.NEXT_PUBLIC_BASE_URL}/trip/${trip.slug}`,
					},
					{
						headers: headers,
					}
				)
			).data;

			toast({
				title: "Booking Successful",
				description: "Our team will contact you soon. Thank you!",
				variant: "custom",
			});
			// router.push("/thank-you")
			window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`, '_blank';
			setCurrentStep((step) => step + 1);

			// clear form
			// setName("");
			// setEmail("");
			// setPhone("");
			// setTravelModeMembers({});
			// setTripDate(null);

			setIsLoading(false);

		} catch (error: any) {
			setIsLoading(false);
			console.log(error);
			toast({
				title: "Oops! Something went wrong, Please try again later.",
				description: "Contact Support, if the problem persists",
				variant: "custom",
			});
		}
	}
	// console.log('date', trip.tripdates)

	const handlePhoneChange = (e: any) => {
		const inputValue = e.target.value;
		if (/^\+?[0-9\s]*$/.test(inputValue)) {
			setPhone(e.target.value)
		}
	}

	return (
		<>
			<section className='relative mx-auto flex w-full max-w-[1000px] flex-col gap-y-4 rounded-lg border border-gray-50 bg-white px-2 py-4 shadow-lg md:gap-8 md:px-20 md:py-16'>
				{/* Steps Header */}
				<nav aria-label='Progress'>
					<ol
						role='list'
						className='space-y-4 md:flex md:flex-row md:space-x-8 md:space-y-0'
					>
						{steps.map((step, index) => (
							<li key={step.name} className='md:flex-1'>
								{currentStep > index ? (
									<div className='border-primaryLight group flex w-full flex-col border-l-4 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
										<span className='text-primaryLight text-sm font-medium transition-colors '>
											{step.id}
										</span>
										<span className='text-sm font-medium'>{step.name}</span>
									</div>
								) : currentStep === index ? (
									<div
										className='border-primaryMain flex w-full flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
										aria-current='step'
									>
										<span className='text-primaryMain text-sm font-medium'>
											{step.id}
										</span>
										<span className='text-sm font-medium'>{step.name}</span>
									</div>
								) : (
									<div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
										<span className='text-sm font-medium text-gray-500 transition-colors'>
											{step.id}
										</span>
										<span className='text-sm font-medium'>{step.name}</span>
									</div>
								)}
							</li>
						))}
					</ol>

					<div className='mt-10 px-8'>
						<h3 className='text-primaryMain flex flex-row items-center gap-x-2 text-start text-lg font-semibold md:text-xl'>
							<BiTrip className='hidden h-6 w-6 sm:block' />
							{trip.name}
						</h3>
						<div className='text-primaryMain mt-8 flex w-full flex-col justify-between gap-y-6 px-2 text-xs font-semibold sm:mt-4 sm:flex-row sm:text-sm'>
							<div className='flex flex-col gap-2'>
								<span className='flex items-center gap-2'>
									<Clock className='h-4 w-4' />
									{trip.durationdays}D - {trip.durationdays - 1}N
								</span>
								<span className='flex items-center gap-2'>
									<MapPin className='h-4 w-4' />
									<span className='flex items-center gap-1'>
										{trip.pickup} <ArrowRight className='h-5 w-5' />{" "}
										{trip.drop}
									</span>
								</span>
							</div>
						</div>
					</div>
				</nav>

				{/* Form */}
				<form className={cn('py-4',)}>
					{/* 1st */}
					{currentStep === 0 && (
						<>
							<motion.div
								initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.1, ease: "easeInOut" }}
								className="flex flex-col gap-4 w-full min-h-inherit"
							>
								<div className="flex md:hidden text-start justify-start flex-col items-start w-full min-h-inherit bg-white">
									<h2 className="text-primaryMain text-lg sm:text-xl font-semibold">
										Select a Date
									</h2>

									<div className="flex flex-col w-full mt-2">
										<DropdownMenu>
											<DropdownMenuTrigger type="button"
												className='w-fit bg-primaryLight flex flex-row gap-1 items-center justify-center cursor-pointer py-2 px-6 rounded-sm font-bold uppercase text-white transition-all delay-100'
											>
												{selectedMonth ? moment(selectedMonth, "M").format("MMMM") : "Select a Month"}
												<ChevronDown className={cn("h-4 w-4")} />
											</DropdownMenuTrigger>
											<DropdownMenuContent className="max-h-[40vh] ml-4 overflow-y-scroll no-scrollbar gap-1">
												<DropdownMenuLabel>
													Select a Month
												</DropdownMenuLabel>
												<DropdownMenuSeparator />
												{uniqueMonths.map((month) => (
													<DropdownMenuItem
														key={month}
														onClick={() => handleClick(month)}
														className={`px-6 py-2 m-1 font-bold uppercase transition-all delay-100 border-2 border-primaryLight  ${selectedMonth === month
															? "text-primaryLight cursor-text bg-white"
															: " bg-primaryLight cursor-pointer text-white"
															}`}
													>
														{/* {moment(
															uniqueMonths.find((date) => moment(date).format("M") === month)
														).format("MMM")} */}
														{moment(month, "M").format("MMMM")}
													</DropdownMenuItem>
												))}
											</DropdownMenuContent>
										</DropdownMenu>


										<ToggleGroup type="single" className="flex flex-wrap gap-2 mt-2 justify-start sm:ml-2">
											{trip.dates
												.filter((date) => moment(date.date).format("M") === selectedMonth)
												.filter((date) => moment(date.date).isAfter(moment()))
												.map((date: any, index: any) => (
													<ToggleGroupItem
														className={cn(`border-gray-300 border w-48`, date.date === tripDate ? "data-[state=on]:bg-primaryLight/20 bg-primaryLight/20 border-primaryLight shadow-sm duration-300 transition-colors ease-linear" : "")}
														key={index}
														value={date.date}
														aria-label={format(date.date, "PPP")}
														onClick={() => setTripDate(date.date)}
													>
														{format(date.date, "PPP")}
													</ToggleGroupItem>
												))}
										</ToggleGroup>
									</div>
								</div>
								<div className="hidden md:flex justify-center items-center w-full min-h-inherit bg-white">
									<ToggleGroup type="single" className="flex flex-wrap gap-2">
										{trip.dates
											.filter((date) => moment(date.date).isAfter(moment()))
											.map((date: any, index: any) => (
												<ToggleGroupItem
													className={cn(`border-gray-300 border w-48`, date.date === tripDate ? "data-[state=on]:bg-primaryLight/20 bg-primaryLight/20 border-primaryLight shadow-sm duration-300 transition-colors ease-linear" : "")}
													key={index}
													value={date.date}
													aria-label={format(date.date, "PPP")}
													onClick={() => setTripDate(date.date)}
												>
													{format(date.date, "PPP")}
												</ToggleGroupItem>
											))}
									</ToggleGroup>
								</div>
							</motion.div>
						</>
					)}

					{/* 2nd */}
					{currentStep === 1 && (
						<>
							<motion.div
								initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.1, ease: "easeInOut" }}
							>
								<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6'>
									<div className='sm:col-span-6'>
										<label
											htmlFor='memberCounts'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Member Counts <span className='text-red-500'
												aria-hidden='true'
												title="Required"
											>*</span>
										</label>
										<div className='mt-2'>
											<div className='grid grid-cols-1 gap-4'>
												{trip.costing
													.filter((cost) => cost.__component === 'trip.costing')
													.map((travel: any, index: number) => (
														<div
															key={index}
															className='rounded-md border border-gray-200 p-2'
														>
															<h4 className='border-b border-gray-200 py-1 text-center text-black'>
																{travel.Mode}
															</h4>
															<div className='flex items-center justify-between p-2'>
																<span>Price</span>
																{Number(travel.discountedprice) !== 0 && (
																	<span className='flex items-center text-gray-600 line-through'>
																		<IndianRupee className='h-4 w-4' />
																		{travel.discountedprice} off
																	</span>
																)}
																<span className='flex items-center'>
																	<IndianRupee className='h-4 w-4' />
																	{travel.Price}
																</span>
															</div>
															<div className='flex items-center justify-between p-2'>
																<span>Members</span>
																<div className='flex select-none items-center gap-4'>
																	<span
																		className='cursor-pointer'
																		onClick={() =>
																			handleRemoveMember(travel.Mode)
																		}
																	>
																		<MinusSquareIcon className='text-primaryMain ' />
																	</span>
																	<span className='border-primaryMain rounded border px-2 py-1'>
																		{travelModeMembers[travel.Mode] || 0}
																	</span>
																	<span
																		className='cursor-pointer'
																		onClick={() => handelMembers(travel.Mode)}
																	>
																		<PlusSquareIcon className='text-primaryMain ' />
																	</span>
																</div>
															</div>
														</div>
													))}

												<div className="flex flex-col gap-1">
													{trip.costing.filter((cost) => cost.__component === 'trip.costingnote').map((note: any, index: number) => (
														<p className="flex bg-gray-100 rounded-md py-1 px-2 text-sm" key={index}>
															{note.note}
														</p>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</>
					)}

					{/* 3rd */}
					{currentStep === 2 && (
						<>
							<motion.div
								initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.1, ease: "easeInOut" }}
							>
								<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6'>
									<div className='sm:col-span-3'>
										<label
											htmlFor='name'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Name <span className='text-red-500'
												aria-hidden='true'
												title="Required"
											>*</span>
										</label>
										<div className='mt-2'>
											<input
												type='text'
												placeholder="Your Name"
												value={name}
												onChange={(e) => setName(e.target.value)}
												autoComplete='given-name'
												className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryLight sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:col-span-3'>
										<label
											htmlFor='email'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Email <span className='text-red-500'
												aria-hidden='true'
												title="Required"
											>*</span>
										</label>
										<div className='mt-2'>
											<input
												type='email'
												required
												placeholder="example@mail.com"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												autoComplete='email'
												className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryLight sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:col-span-3'>
										<label
											htmlFor='phone'
											className='block text-sm font-medium
                                                leading-6 text-gray-900'
										>
											Phone <span className='text-red-500'
												aria-hidden='true'
												title="Required"
											>*</span>
										</label>
										<div className='mt-2'>
											<input
												type='tel'
												placeholder="+91 12345 67890"
												value={phone}
												onChange={
													handlePhoneChange
												}
												autoComplete='tel'
												className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryLight sm:text-sm sm:leading-6'
											/>
										</div>

										{/* Read Terms and Conditions Checkbox */}
										{/* <div className='flex items-center justify-start gap-2 mt-4'>
											<div className="flex">
												<div className="flex items-center h-5">
													<input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox"
														checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)}
														className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" />
												</div>
												<div className="ms-2 text-sm">
													<label className="font-medium text-gray-900 dark:text-gray-300">
														Agree to the <Link href="/terms-and-conditions" className="text-primaryMain hover:underline hover:underline-offset-2">
															Terms and Conditions
														</Link>
													</label>
													<p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">
														By selecting this, you agree to our terms and conditions.
													</p>
												</div>
											</div>
										</div> */}
									</div>
								</div>
							</motion.div>
						</>
					)}

					{/* 4th */}
					{/* Confirmation */}
					{currentStep === 3 && (
						<>
							<motion.div
								initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.1, ease: "easeInOut" }}
								className="flex justify-between flex-col h-full"
							>
								<div className='mt-10 gap-x-6 gap-y-8 flex flex-col justify-center items-center'>
									<div>
										<h4
											className='text-primaryMain text-center text-2xl md:text-3xl font-bold'
										>
											Congrats!
										</h4>
										<p className='text-center text-sm font-medium'>
											Our team will contact you soon. Thank you!
										</p>
									</div>

									<div>
										<h3 className="text-lg font-semibold">Details</h3>
										<table className="mt-4">
											<tr>
												<th>Name:</th>
												<td className="text-blue-500">{name}</td>
											</tr>
											<tr>
												<th>Email:</th>
												<td className="text-blue-500">{email}</td>
											</tr>
											<tr>
												<th>Phone:</th>
												<td className="text-blue-500">{phone}</td>
											</tr>
										</table>

										<div className="mt-6 flex flex-col gap-y-2">
											<h2 className="font-bold text-lg">Confirm your Booking with us with an inital payment of ₹{` `}5000 /- only</h2>
											<p className="mt-3">
												<b>Note:</b> The Remaining amount has to paid.
											</p>
											<p className="font-medium">
												*Plus 3% additional charges on the next step.
											</p>
										</div>

										<div className="mt-6 flex flex-col gap-y-2">
											<h2 className="font-bold text-lg">
												I dont Want to Pay Payment Gateway Charges!!
											</h2>
											<h3 className="font-medium">
												To Save Gateway payment charges UPI at captureatrip@oksbi and send us a screenshot at <Link
													href={CAT_WHATSAPP_LINK} className="hover:underline underline-offset-2 text-primaryLight"
												>+91 8287636079</Link>
											</h3>
										</div>
									</div>


								</div>
								<div className='flex flex-col gap-4 mt-20 w-full justify-center items-center'>

									<Link
										href='/'
										className='flex items-center max-w-fit justify-center gap-2 bg-primaryMain hover:bg-primaryDark w-full rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm'
									>
										Go Back Home
									</Link>
								</div>
							</motion.div>
						</>
					)}
				</form>

				{/* Navigation Footer */}
				<div className='mt-8 px-4 pt-5'>
					<div className='flex justify-between'>

						<button
							type='button'
							onClick={prev}
							disabled={currentStep === 0}
							className='bg-primaryMain min-h-10 flex items-center justify-center hover:bg-primaryLight rounded text-white px-4 py-1 text-sm font-semibold shadow-sm disabled:cursor-not-allowed disabled:opacity-50 sm:text-base'
						>
							Previous
							{/* <BsArrowLeft /> */}
						</button>

						<button
							type='button'
							onClick={next}
							disabled={currentStep === steps.length - 1}
							className={cn('bg-primaryMain min-h-10 flex items-center justify-center hover:bg-primaryLight rounded text-white px-4 py-1 text-sm font-semibold shadow-sm disabled:cursor-not-allowed disabled:opacity-50 sm:text-base',
								currentStep === 2 ? 'hidden' : 'flex')}
						>
							{/* <BsArrowRight /> */}
							Next
						</button>

						<button
							onClick={GetConnect}
							disabled={
								isLoading ||
								Object.keys(travelModeMembers).length === 0 ||
								!name ||
								!email ||
								!phone ||
								currentStep !== 2
							}
							className={cn('flex items-center max-w-fit justify-center gap-2 sm:gap-3 md:gap-4 flex-row bg-primaryMain hover:bg-primaryDark w-full rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm disabled:cursor-not-allowed disabled:bg-gray-400',
								currentStep === 2 ? 'flex' : 'hidden')}
						>
							{isLoading ? (
								<>
									<Loader className='h-4 w-4 animate-spin' />
									Booking...
								</>
							) : (
								<>
									<MdOutlineAirplanemodeActive className='h-4 w-4' />
									Book Now
								</>
							)}
						</button>

					</div>
				</div>
			</section>
		</>
	);
};

export default BookingQueryForm;
