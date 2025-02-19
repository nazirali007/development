import NavBar from "@/components/nav-bar";
import MaxWidthContent from "@/components/max-width-content";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getStrapiBookingTrip } from "@/lib/strapi";
import BookingQueryForm from "@/components/bookingQuery-form";

// export const metadata: Metadata = {
// 	title: `Booking Query`,
// 	alternates: {
// 		canonical: '/bookingquery',
// 	},

// };

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	return {
		title: `Booking Query`,
		description: 'Booking Query',
		keywords: 'Booking Query',
		alternates: {
			canonical: `/bookingquery/${params.slug}`,
		},

	}
}


export default async function Page({ params }: { params: { slug: string } }) {
	let strapiTrip = await getStrapiBookingTrip({ slug: params.slug });

	if (!strapiTrip) {
		return notFound();
	}

	strapiTrip = {
		...strapiTrip,
		dates: strapiTrip.dates.map((date: any) => ({
			date: date.tripdate,
		})),
	}

	strapiTrip.dates.map((date: any) => {
		return date
	})

	// console.log("strapiTrip", strapiTrip.costing);

	return (
		<>
			<div className='flex flex-col items-center bg-zinc-100/60'>
				<div
					className={cn(
						"relative z-20 flex h-[75vh] w-full flex-col items-center justify-center bg-cover bg-fixed bg-bottom ",
						`bg-[url('https://captureatrip.s3.amazonaws.com/uploads/category/images/banner/vietnam-2.webp')] bg-cover bg-fixed bg-center`
					)}
				>
					<div className='absolute left-0 top-0 z-10 h-full w-full bg-black/40'></div>

					<div className='z-10 flex flex-col items-center gap-y-1 px-2 text-center text-lg font-bold uppercase text-white sm:px-4 md:gap-y-4 md:text-xl lg:text-3xl '>
						<h4>I Came, I Saw, I Captured</h4>
						<p className='text-sm font-semibold md:text-xl'>Capture A Trip</p>
					</div>
					<div className='absolute bottom-0 z-10 mt-6 w-full bg-black/40 px-2 py-6 text-center text-2xl font-bold uppercase text-white sm:px-4 md:text-6xl '>
						Booking
					</div>
				</div>

				<MaxWidthContent className='mb-20 flex min-h-screen w-full flex-col gap-y-12 px-2 sm:px-4 md:px-6'>
					<div className='mx-auto mt-10 gap-y-10 flex w-full flex-col justify-center '>
						<div className='flex w-full flex-col items-center gap-y-4 text-center text-xl font-semibold sm:text-2xl lg:text-5xl'>

							<p className='text-sm font-semibold text-black sm:text-lg'>
								Please fill the form below to book the trip.
							</p>
						</div>
						<BookingQueryForm trip={strapiTrip} />
					</div>
				</MaxWidthContent>
			</div>
		</>
	);
}
