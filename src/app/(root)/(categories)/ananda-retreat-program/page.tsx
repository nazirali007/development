import React from "react";
import Image from "next/image";
import TripsShower from "@/components/trips-shower";
import MaxWidthContent from "@/components/max-width-content";
import DynamicDescription from "@/components/dynamic-description";
import { getStrapiCatergoryContent, getStrapiRetreatTestimonials } from "@/lib/strapi";
import showdown from "showdown";
import { notFound } from "next/navigation";
import PageDescription from "@/components/page-description";
import TestimonialCard from "@/components/testimonial-card";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ImageSlideShow from "@/components/images-slideshow";


export const dynamic = "force-dynamic"


export async function generateMetadata() {
  const strapiContent = await getStrapiCatergoryContent({
    slug: "ananda-retreat-program",
  });

  if (!strapiContent) return notFound(); // 404

  let keywords = strapiContent?.metakeywords?.split(", ") || [];

  return {
    title: strapiContent.metatitle ? strapiContent.metatitle : "",
    description: strapiContent.metadescription
      ? strapiContent.metadescription
      : "",
    keywords: keywords || "",
    alternates: {
      canonical: `/${strapiContent.slug}`,
    },
  };
}

export default async function Page() {
  const strapiContent = await getStrapiCatergoryContent({
    slug: "ananda-retreat-program",
  });

  const strapiContentTestimonials = await getStrapiRetreatTestimonials();

  if (!strapiContentTestimonials.testimonials) return notFound(); // 404

  if (!strapiContent) return notFound(); // 404

  const strapiTrips = strapiContent.trips.data;

  // console.log("strapiTrips", strapiTrips); // debug

  let tripData = strapiTrips.map((trip: any) => {
    return {
      id: trip.id,
      slug: trip.attributes.slug,
      price: trip.attributes.price,
      discount: trip.attributes.discount,
      name: trip.attributes.name,
      pickup: trip.attributes.pickup,
      drop: trip.attributes.drop,
      coverimage: trip.attributes.coverimage,
      coverimageurl: trip.attributes.coverimageurl,
      bannerimage: trip.attributes.bannerimage,
      bannerimageurl: trip.attributes.bannerimageurl,
      isCustomized: trip.attributes.isCustomized,
      durationdays: trip.attributes.durationdays,
      dates: trip.attributes.dates,
    };
  });
  // console.log("tripData", tripData); // debug

  const {
    bannerimage,
    bannerimageurl,
    bannerimagealt,
    slug,
    trips,
    Title,
    About,
    relatedImages,
    schemamarkup,
    ...data
  } = strapiContent;

  let images = [];

  if (relatedImages.data.length > 0) {
    images = relatedImages.data.map(
      (data: { id: number; Title: string, attributes: { url: string } }, index: number) => {
        // console.log("id:", data.id, ' Title:', data.attributes.url, 'index:', index)
        if (data.Title !== null)
          return { id: data.id, Title: data.attributes.url, index: index };
      }
    );
  }

  const converter = new showdown.Converter(); // Convert markdown to html
  // const imageData = strapiContent.bannerimage.data;
  // console.log('content', imageData[0].attributes.url)
  return (
    <>
      <main className=''>
        {/* Json Schema LD */}
        {schemamarkup && (
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemamarkup) }}
          />
        )}
        <section className='relative max-h-screen min-h-screen w-full'>
          <Image
            src={
              bannerimage?.data?.attributes?.url ||
              bannerimageurl ||
              "/assets/249.jpg"
            }
            alt={"Capture A Trip International Trips"}
            fill
            placeholder='blur'
            blurDataURL='/assets/249.jpg'
            quality={10}
            loading='eager'
            priority
            className='object-cover object-center'
          />
          <div
            className='absolute left-0 top-0 z-0 h-full w-full'
            style={{
              background:
                "linear-gradient(180deg, #00000050 80%, rgba(255,255,255,1) 100%)",
            }}
          />
          <div className='absolute bottom-2/3 left-0 right-0 top-1/3 z-10 flex w-full flex-col items-center justify-around text-6xl font-bold text-white drop-shadow-xl shadow-lg '>
            {Title}
            {/* <div className='w-full'>
              <SocialMediaHero position='absolute' />
            </div> */}
          </div>
        </section>

        <MaxWidthContent className='mt-8 w-full'>
          {/* {About && strapiContent?.smallabout && strapiContent?.titleabout ? (
            <PageDescription
              heading={strapiContent?.titleabout || Title}
              smallDescription={strapiContent.smallabout}
              description={converter.makeHtml(About) as any}
            />
          ) : ( */}
            <DynamicDescription
              heading={Title}
              description={converter.makeHtml(About) as any}
            />
          {/* )} */}
        </MaxWidthContent>
        <MaxWidthContent className='w-full pb-16 pt-8'>
          <TripsShower Trips={tripData} />
        </MaxWidthContent>
        <div className="font-bold flex justify-center text-3xl lg:text-6xl py-6">
          Our Testimonials
        </div>

        <Carousel
          className='mx-auto h-full w-full max-w-[1220px] items-stretch justify-stretch overflow-hidden rounded-lg md:flex md:overflow-visible'
          opts={{
            align: "center",
          }}
        >
          <CarouselContent className='w-full rounded-lg'>
            {strapiContentTestimonials.testimonials?.map((testimonial: any, i: number) =>

              <CarouselItem
                key={testimonial.id}
                className='my-4 flex h-auto w-80 min-w-[200px] basis-1.55/2 justify-stretch self-stretch px-0.5 sm:basis-1/2 md:basis-1/3'
              >
                <div className="md:flex justify-center py-4 gap-4 flex-wrap">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            )}
          </CarouselContent>

          <CarouselNext
            aria-label='Next'
            className={cn(`absolute -right-3 top-1/2 hidden h-10 w-10
								 	 -translate-y-1/2 bg-gray-300 md:flex 2xl:-right-10`)}
          />

          <CarouselPrevious
            aria-label='Previous'
            className={cn(`absolute -left-3 top-1/2 hidden h-10 w-10
									 -translate-y-1/2 bg-gray-300 md:flex 2xl:-left-12`)}
          />
        </Carousel>
        {/* Photo Gallery */}
        {images && images.length > 0 ? (
          <div className='mt-10 flex w-full flex-col gap-8'>
            {/* <div className='px-8 text-xl font-bold text-black/80 md:text-4xl'> */}
            <div className="font-bold flex justify-center text-3xl lg:text-6xl py-6">
              Photo Gallery
            </div>
            <section className='px-2'>
              <ImageSlideShow images={images} />
            </section>
          </div>
        ) : null}
      </main>
    </>
  );
}
