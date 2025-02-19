"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaMinus, FaPlus, FaWhatsapp } from "react-icons/fa";
import * as z from "zod";
import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { campaignFormSchema } from "@/lib/zod-schema";
import { Loader2 } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CAT_WHATSAPP_LINK } from "@/server/db/static/variables";
import { Separator } from "@/components/ui/separator"
import { useSearchParams } from "next/navigation";

const CampaignForm = ({ destination, destinationSlug }: { destination: string, destinationSlug: string }) => {
	const searchParams = useSearchParams()
	const utm_source = searchParams.get('utm_source')
	const utm_medium = searchParams.get('utm_medium')
	const utm_campaign = searchParams.get('utm_campaign')
	const utm_term = searchParams.get('utm_term')
	const utm_content = searchParams.get('utm_content')
	const form = useForm<z.infer<typeof campaignFormSchema>>({
		resolver: zodResolver(campaignFormSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			noOfPeople: 1,
			destination: "",
			destinationSlug: "",
			message: "",
			utm: utm_source ?? "",
			utm_medium: utm_medium ?? "",
			utm_campaign: utm_campaign ?? "",
			utm_term: utm_term ?? "",
			utm_content: utm_content ?? "",
		},
	});


	// For Nishi
	const [showTooltip, setShowTooltip] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);
	const [fetching, setFetching] = useState<boolean>(false);
	const { toast } = useToast();
	const formRef = useRef<HTMLFormElement | null>(null);
	const router = useRouter();
	async function onSubmit(values: z.infer<typeof campaignFormSchema>) {
		console.log(values)
		try {
			setFetching(true);
			const response = await (
				await axios.post(
					`${process.env.NEXT_PUBLIC_BASE_URL}/api/campaignForm`,
					{
						...values,
						destination: destination,
						destinationSlug: destinationSlug,
					}
				)
			).data;

			setFetching(false);
			if (!response.success) {
				toast({
					title: response.message,
					description: "there was some error with our server please try again",
					variant: "destructive",
				});
			} else {
				toast({
					title: "Successfull 👍👍",
					description: response.message,
					style: {
						backgroundColor: "#007dbc",
						color: "white",
						fontWeight: "700",
					},
				});
				setShowTooltip(false);
				form.reset();
				// window.open(`${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`,'_blank');
				window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`, '_blank';
				// router.push('/thank-you');
			}
		} catch (error) {
			setFetching(false);
			toast({
				title: "Oops 😔😔",
				description: "Something went wrong",
				variant: "destructive",
			});
		}
	}

	const delay = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms));

	const noOfPeople = form.watch("noOfPeople");
	// const onError = async () => {
	// 	setShowTooltip(true);

	// 	const handleErrors = async () => {
	// 		// Trigger validation and get the error state
	// 		const valid = await form.trigger();
	// 		if (!valid) {
	// 			const errors = form.formState.errors;

	// 			// General error message for all missing fields
	// 			if (errors.name && errors.email && errors.phone) {
	// 				toast({
	// 					title: "Please fill in all details correctly.",
	// 					description: "",
	// 					variant: "destructive",
	// 				});
	// 				return;
	// 			}

	// 			// Helper function for repetitive toast calls
	// 			const showErrorToast = (
	// 				field: string,
	// 				title: string,
	// 				description: string
	// 			) => {
	// 				toast({
	// 					title,
	// 					description,
	// 					variant: "destructive",
	// 				});
	// 			};

	// 			// Specific field error handling
	// 			if (errors.name) {
	// 				showErrorToast(
	// 					"name",
	// 					"Name is required",
	// 					"Please provide your name."
	// 				);
	// 				await delay(1000); // Delay between toasts
	// 			}
	// 			if (errors.email) {
	// 				showErrorToast(
	// 					"email",
	// 					"Email is required",
	// 					"Please provide a valid email address."
	// 				);
	// 				await delay(1000);
	// 			}
	// 			if (errors.phone) {
	// 				showErrorToast(
	// 					"phone",
	// 					"Phone number is required",
	// 					"Please provide a valid phone number."
	// 				);
	// 				await delay(1000);
	// 			}
	// 		}
	// 	};

	// 	await handleErrors(); // Call async error handler
	// };

	useEffect(() => {
		const handleShowTooltip = () => {
			if (form.formState.errors) {
				setShowTooltip(true);
				// Hide tooltip after 2 seconds
				setTimeout(() => {
					setShowTooltip(false);
				}, 8000);
			}
		};
		// If the form has no errors, hide the tooltip
		handleShowTooltip();
		// if (!form.formState.errors) {
		// 	setShowTooltip(false);
		// }
	}, [form.formState.errors]);
	const handleClickOutside = (event: MouseEvent) => {
		if (formRef.current && !formRef.current.contains(event.target as Node)) {
			setShowTooltip(false); // Close the tooltip
		}
	};

	// Add event listener for clicks outside the form
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside); // Cleanup on unmount
		};
	}, []);

	return (
		<div className="w-full px-[1.25rem] dmsans z-20 flex justify-center">
			{/* whatsapp form */}

			{/* or */}
			{/* <div className="my-8 flex justify-center font-semibold gap-2">
				<Separator className=" w-24 md:w-60 bg-gray-400 " />
				<div className="-mt-3">
					Or
				</div>
				<Separator className=" w-24 md:w-60 bg-gray-400" />
			</div> */}
			{/* Enquiry form */}
			<div className='flex justify-center items-center z-10 w-[90vw] px-[1rem] h-[30.375rem] md:w-[67.5rem] bg-white border-1 md:ml-0 drop-shadow-sm md:h-[35.875rem] rounded-[1rem]'>
				<div id='form1' className="flex justify-center md:gap-2 lg:gap-8 w-full md:w-[60rem] md:h-[28.375rem]">

					<div style={{
						backgroundImage: `url('/campaign/unsplash_3OiYMgDKJ6k.svg')`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}} className="w-[35rem] h-[28.375rem] rounded-lg hidden md:block"

					>
					</div>


					<div className=" md:ml-0 w-[96%] md:w-[22.5rem] h-[28.375rem]">

						<div className='w-auto h-[3.5rem] md:w-[22.5rem] mb-[1.5rem] md:mb-0 md:h-[4rem] mr-[1.75rem] md:mr-0 text-black font-[500]  leading-[1.75rem]'>
							<div className='text-[1.25rem] md:text-[1.5rem] font-[500] '>
								Unlock Exclusive <span className="text-primaryMain">Offers</span>-Just Leave Your Info!
							</div>
						</div>

						<TooltipProvider>
							<div className='z-10 flex justify-center md:h-[23.375rem] md:w-[22.5rem]'>
								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
										ref={formRef}
										noValidate
										className='w-full '
									>
										<div className=' flex flex-wrap '>
											<div className='w-full'>
												<FormField
													control={form.control}
													name='name'
													render={({ field }) => (
														<FormItem className=''>
															{/* <FormLabel htmlFor='name' >Name :<span className="text-red-500">
											*
										</span></FormLabel> */}

															<FormControl className=''>
																<div
																	data-tip={`${form.formState.errors.name ? form.formState.errors.name?.message : "Name can't be empty"}`}
																	className={`${showTooltip && form.formState.errors.name ? "show-tooltip" : ""}`}
																>
																	<Input
																		{...field}
																		type='text'
																		placeholder='Name'
																		// className={`focus:border-gray-500 block w-full appearance-none border-2 border-black/80 rounded-lg bg-white/60 px-4 py-1 leading-tight focus:outline-none focus:ring-0 placeholder:text-black/40 placeholder:font-bold placeholder:opacity-95 col-span-2
																		// 	${fetching ? 'opacity-70 cursor-not-allowed' : ''}
																		// 	`}
																		className='block w-[100%] md:w-[22.5rem] h-[2.5rem]  font-[400] text-[1rem] appearance-none rounded-lg border-[1px] border-[#A7A7A7] bg-white  md:mt-[0.75rem] p-4 leading-tight text-gray-700 hover:border-primaryMain/60 focus:border-primaryMain/60 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
																		readOnly={fetching}
																	/>
																</div>
															</FormControl>
														</FormItem>
													)}
												/>
											</div>
										</div>

										<div className=' flex flex-wrap'>
											<div className='w-full'>
												<FormField
													control={form.control}
													name='email'
													render={({ field }) => (
														<FormItem>
															<FormControl>
																<div
																	data-tip={`${form.formState.errors.email ? form.formState.errors.email?.message : "Email number can't be empty"}`}
																	className={`${showTooltip && form.formState.errors.email ? "show-tooltip" : ""}`}
																>
																	<Input
																		{...field}
																		type='email'
																		placeholder='Email'
																		// className={`focus:border-gray-500 block w-full appearance-none border-2 border-black/80 rounded-lg bg-white/60 px-4 py-2 leading-tight focus:outline-none focus:ring-0 placeholder:text-black/40 placeholder:font-bold placeholder:opacity-95 col-span-2
																		// 	${fetching ? 'opacity-70 cursor-not-allowed' : ''}
																		// 	`}
																		className=' mt-[1rem] md:mt-[1rem]  block w-[100%] md:w-[22.5rem] h-[2.5rem]  font-[400] text-[1rem] appearance-none rounded-lg border-[1px] border-[#A7A7A7] bg-white p-4 leading-tight text-gray-700 hover:border-primaryMain/60 focus:border-primaryMain/60 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 md:mb-0'
																		readOnly={fetching}
																	/>
																</div>
															</FormControl>

															{/* <div className='flex justify-end items-center'><FormMessage /></div> */}
														</FormItem>
													)}
												/>
											</div>
										</div>

										<div className=' flex flex-wrap'>
											<div className='w-full '>
												<FormField
													control={form.control}
													name='phone'
													render={({ field }) => (
														<FormItem>
															<div>
																<FormControl>
																	<div
																		data-tip={`${form.formState.errors.phone ? form.formState.errors.phone?.message : "Phone number can't be empty"}`}
																		className={`${showTooltip && form.formState.errors.phone ? "show-tooltip col-span-2 flex items-center mt-[1rem] md:mt-[1rem] w-[100%] md:w-[22.5rem]  rounded-lg border-[1px] border-[#A7A7A7] bg-white/60 !p-0 hover:border-primaryMain/60" : "mt-[1rem] md:mt-[1rem] col-span-2 flex w-[100%] md:w-[22.5rem] items-center rounded-lg border-[1px] border-[#A7A7A7] bg-white/60 !p-0 hover:border-primaryMain/60"}`}
																	>
																		<div className='m-0 flex h-full items-center rounded-l-md border-r-[1px] border-[#9A9A9A] px-2 font-[400]  '>
																			+91
																		</div>
																		<Input
																			{...field}
																			className='  block w-[100%] md:w-[22.5rem] h-[2.5rem]  font-[400] text-[1rem] appearance-none rounded-r-xl border-none bg-white px-4 py-0 leading-tight text-gray-700 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
																			id='grid-last-name focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 '
																			type='text'
																			placeholder='Contact'
																			readOnly={fetching}
																		/>
																	</div>
																</FormControl>
															</div>
															{/* <div className='flex justify-end items-center'><FormMessage /></div> */}
														</FormItem>
													)}
												/>
											</div>
										</div>

										<div className=' flex flex-wrap '>
											<div className='w-full '>
												<FormField
													control={form.control}
													name='message'
													render={({ field }) => (
														<FormItem className=''>
															<FormControl className=''>
																<div
																	data-tip={`${form.formState.errors.name ? form.formState.errors.name?.message : "Please Write a Message"}`}
																	className={`${showTooltip && form.formState.errors.name ? "show-tooltip" : ""}`}
																>
																	<Input
																		{...field}
																		type='text'
																		placeholder='write any message'
																		// className={`focus:border-gray-500 block w-full appearance-none border-2 border-black/80 rounded-lg bg-white/60 px-4 py-1 leading-tight focus:outline-none focus:ring-0 placeholder:text-black/40 placeholder:font-bold placeholder:opacity-95 col-span-2
																		// 	${fetching ? 'opacity-70 cursor-not-allowed' : ''}
																		// 	`}
																		className='mt-[1rem] md:mt-[1rem]  block w-[100%] md:w-[22.5rem] h-[5rem]  font-[400] text-[1rem] appearance-none rounded-lg border-[1px] border-[#A7A7A7] bg-white px-4 pb-12 pt-6 leading-tight text-gray-700 hover:border-primaryMain/60 focus:border-primaryMain/60 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
																		readOnly={fetching}
																	/>
																</div>
															</FormControl>
														</FormItem>
													)}
												/>
											</div>
										</div>

										<div className=' mt-[1rem] md:mt-[1rem]  flex items-center justify-between w-[100%] h-[2.5rem] md:w-[22.5rem] text-[1.25rem] md:text-[1.5rem] font-[400]'>
											No. of People
											<div className='flex items-center w-[5.9375rem] h-[2.5rem] justify-evenly px-2 rounded-[0.5rem] border-[1px] border-[#9A9A9A] text-xl font-[300]'>
												<div
													onClick={() => {
														if (noOfPeople > 1)
															form.setValue("noOfPeople", noOfPeople - 1);
													}}
													className='flex h-full  items-center justify-center rounded-l-md bg-white/60'
												>
													{/* <FaMinus className='h-[0.875rem] w-[0.875rem] cursor-pointer' /> */}
													<Image
														src={
															"/campaign/minus.svg"
														}
														alt="Google Image"
														height={10}
														width={10}
														className="h-[1.875rem] w-[1.875rem] cursor-pointer"
													/>
												</div>
												<div className='flex w-full  items-center justify-center  px-1 text-black'>
													{noOfPeople}
												</div>
												<div
													className='flex h-full  items-center justify-center rounded-r-md bg-white/60'
													onClick={() => form.setValue("noOfPeople", noOfPeople + 1)}
												>
													{/* <FaPlus className='h-[0.875rem] w-[0.875rem] cursor-pointer' /> */}
													<Image
														src={
															"/campaign/plus.svg"
														}
														alt="Google Image"
														height={10}
														width={10}
														className="h-[1.875rem] w-[1.875rem] cursor-pointer"
													/>

												</div>
											</div>
										</div>
										<button
											disabled={fetching}
											className='w-[100%] h-[3.125rem] md:w-[22.5rem] md:h-[3.375rem] mt-[1rem] md:mt-[1rem]  rounded-lg bg-[#007DBC] px-4 py-[1rem]  flex justify-center items-center text-center text-[1rem] font-[600]  leading-tight text-white'
											type='submit'
										>
											{fetching && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
											{fetching ? "Sending" : "Send Enquiry"}
										</button>
									</form>
								</Form>
							</div>
						</TooltipProvider>

					</div>

				</div>
			</div>
		</div>


	);
};

export default CampaignForm;
