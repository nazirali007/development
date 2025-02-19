import { Icons } from "@/assets/icons";
import { Blogs } from "@/server/db/blogs/list-blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Socials from "@/components/reusable/socials";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {

  return {
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default function Page() {
  const recentPost = Blogs.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  ).slice(0, 10);
  return (
    <div>
      <main className='-mt-20'>
        <section>
          <section className='relative flex h-[500px] w-full items-end justify-center px-6 pb-10'>
            <Image
              src={
                "https://captureatrip-new-website.s3.ap-south-1.amazonaws.com/images/blog/GUx03IgZRuz3qe96G0S1DaNEteqPaVRZeNbIOHNQ.jpeg"
              }
              alt={"Best places to visit in Spiti Valley for a Happy Vacations"}
              fill
              className='object-cover'
              placeholder='blur'
              blurDataURL='/assets/249.jpg'
              quality={50}
            />
            <div className='absolute left-0 top-0 h-full w-full bg-black/40' />
            <h1
              className='relative text-3xl font-semibold text-white sm:text-4xl lg:text-5xl'
              style={{ textShadow: "0 4px 4px rgba(0,0,0,.5)" }}
            >
              Best places to visit in Spiti Valley for a Happy Vacations
            </h1>
          </section>

          <section className='mx-auto grid h-full w-full max-w-7xl gap-x-6 gap-y-8 px-4 pb-10 pt-20 sm:grid-cols-10'>
            <div className='relative col-span-1 hidden h-full w-full flex-col gap-8 sm:flex'>
              <Socials dir="vert" />
            </div>
            <div className='flex flex-col gap-4 sm:col-span-6'>
              <h2 className='text-3xl font-semibold text-black/80'>
                Best places to visit in Spiti Valley for a Happy Vacations
              </h2>
              <div className='space-y-3 text-justify text-xs sm:text-sm'>
                <p>
                  Spiti Valley is the cold desert located in Himachal Pradesh, a
                  must-visit place of India, surrounded by the snowcapped
                  mountains, breathtaking scenery, panoramic valleys and now
                  many of its spine-chilling treks are becoming so popular among
                  the tourists, not only Indian but also foreigners. Himachal
                  Pradesh has recently collected a lot of attention towards
                  itself after the lockdown happened due to Covid 19. And Spiti
                  Valley is one of the most visited places of Himachal Pradesh.
                  <br />
                  <br />
                  Rudyard Kipling has described Spiti Valley as ‘A world within
                  a world.
                  <br />
                  <br />
                  Spiti Valley is known for its winter as it only receives
                  around 250 days of sunshine in a year which makes it one of
                  the coldest places of India. It is popular for its view of
                  Mighty Himalayan Range. The barren land, pristine lakes,
                  crystal clear water, ancient monasteries are irresistible for
                  the travel freaks. It lies above 4000 metres, and from the
                  top, you will be mesmerized by the view. So, what are you
                  waiting for? Just book your trip to Spiti with us and enjoy
                  the best time of your life with the coolest trip leaders and
                  most satisfying view.
                  <br />
                  <br />
                  Absolutely, exploring the top places in Spiti Valley is
                  essential to fully immerse yourself in its breathtaking beauty
                  and unique culture. You can enhance your Spiti Valley
                  experience by considering{" "}
                  <Link
                    href={"/spiti-valley"}
                    className='text-blue-700 underline'
                  >
                    Spiti Valley packages{" "}
                  </Link>
                  , which often offer well-planned itineraries to ensure you{" "}
                  {`don't`} miss out on any of the {`region's`} gems. Whether{" "}
                  {`it's`} the ancient Key Monastery, the dramatic landscapes of
                  Pin Valley, or the charming villages like Kibber, these
                  packages can help you make the most of your journey in this
                  captivating part of the Himalayas. So, embark on your Spiti
                  Valley adventure with a well-organized package and create
                  lasting memories amidst the {`valley's`} mesmerizing
                  landscapes and rich heritage..
                </p>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    Chandratal Lake
                  </h3>
                  <p>
                    Mentioning about the most beautiful places of Spiti and not
                    adding Chandratal in that list is impossible. Also known as
                    the ‘Moon Lake’, it is situated on the ‘Samudra Tapu’. The
                    most satisfying way to spend your visit to Chandratal is by
                    camping. It has beautiful natural scenery from all sides,
                    greenery and a famous spot for stargazing while camping.
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    Key Monastery
                  </h3>
                  <p>
                    Monastery stays are always beautiful as it allows your mind
                    to relax for a bit and helps to be carefree for some time.
                    The Key Monastery is one of the famous monasteries of India,
                    situated on the bank of Spiti river at an altitude of 4,166
                    meters above sea level. It is the oldest monastery of Spiti
                    dated back to 1000 years old, built-in 11th century.
                  </p>
                  <p>
                    <span className='font-bold text-black'>Read Blog</span>:{" "}
                    <Link href='travel-blogs/offbeat-things-to-do-in-spiti-valley'>
                      Off beat thing to do in spiti valley
                    </Link>
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    2. Gauri Kund
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>: 6502
                    feet above mean sea level, Garhwal Himalayas
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : Daily from April to November
                  </p>
                  <p>
                    The second best tourist place to visit in Kedarnath is Gauri
                    Kund.Gauri Kund, nestled in the heart of the Himalayas near
                    Kedarnath, is a place of both mythological significance and
                    natural beauty. It is believed to be the spot where Goddess
                    Parvati, also known as Gauri, performed her penance to win
                    Lord {`Shiva's`} heart. This picturesque destination is
                    surrounded by lush greenery and offers a tranquil
                    atmosphere, making it an ideal place to reflect and
                    rejuvenate. While planning your visit to Kedarnath, Gauri
                    Kund should be on your list of places to explore. Kedarnath
                    places to visit often include Gauri Kund due to its
                    spiritual aura and serene surroundings. {`It's`} a place
                    where one can experience a sense of peace and spirituality
                    while being immersed in the stunning natural landscapes of
                    the Himalayan region.
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    3. Sonprayag
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>:
                    Rudraprayag district of Uttarakhand
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : Daily from May to October
                  </p>
                  <p>
                    The third tourist place in kedarnath is Sonprayag.Lying at
                    the junction of Basuki and Mandakini rivers, Sonprayag is
                    covered with snowcapped peaks and surrounded by lush green
                    valley. It is believed in the Hindu religion that taking a
                    dip in the prayags will lead to attainment of moksha. This
                    splendid village is visited in large numbers due to its
                    enthralling view and religious significance. Sonprayag is
                    only open from May to October. It remains closed for 6
                    months of the year due to unfavorable weather so, keep that
                    in mind while planning for your trip.
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    3. Sonprayag
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>:
                    Rudraprayag district of Uttarakhand
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : Daily from May to October
                  </p>
                  <p>
                    The third tourist place in kedarnath is Sonprayag.Lying at
                    the junction of Basuki and Mandakini rivers, Sonprayag is
                    covered with snowcapped peaks and surrounded by lush green
                    valley. It is believed in the Hindu religion that taking a
                    dip in the prayags will lead to attainment of moksha. This
                    splendid village is visited in large numbers due to its
                    enthralling view and religious significance. Sonprayag is
                    only open from May to October. It remains closed for 6
                    months of the year due to unfavorable weather so, keep that
                    in mind while planning for your trip.
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    4. Chorabari Tal
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>: 3
                    Kms from Kedarnath
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : September to November & April to June
                  </p>
                  <p>
                    In mythology, Chorabari Tal is the place where Lord Shiva
                    imparted the knowledge of Yoga to the Saptrishis. In 1984
                    this place became even more significant when Mahatma
                    Gandhi’s ashes were immersed here, also giving it the name
                    of Gandhi Sarovar. Chorbari Tal, a small lake with crystal
                    clear water offers a glorious view of the Himalayan peaks.
                    It was formed from Chorabari Bamak glacier. Tourists love to
                    visit this lake for the purpose of trekking, its view as
                    well as the waterfall enroute.
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    5. Vasuki Tal
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>: 8 Km
                    from Kedarnath
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : Daily from May to October
                  </p>
                  <p>
                    Vasuki Tal, a captivating glacial lake near Kedarnath, is a
                    natural wonder that beckons travelers with its pristine
                    beauty. Situated at an altitude of about 4,150 meters, this
                    stunning lake is surrounded by towering peaks and lush
                    meadows, creating a serene and awe-inspiring ambiance.{" "}
                    {`It's`} a place where one can connect with nature in its
                    purest form, and its crystal-clear waters reflect the
                    majestic landscape that surrounds it. For those looking to
                    embark on a journey to witness the breathtaking Vasuki Tal,
                    Kedarnath travel packages offer an excellent opportunity to
                    explore this remarkable destination. These thoughtfully
                    curated packages not only provide convenience and comfort
                    but also allow you to immerse yourself in the natural
                    splendor of Vasuki Tal while experiencing the spiritual
                    essence of Kedarnath.
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    6. Triyuginarayan Temple
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>:
                    Rudraprayag District, Uttarakhand
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : Summers & post monsoon
                  </p>
                  <p>
                    Said to be built by Adi Shankaracharya, this temple is
                    believed to be the spot where Lord Shiva and Goddess Parvati
                    tied the knot. Witnessed by various celestial being
                    including Lord Vishnu they joined in matrimony for an
                    eternity. Brahma Shilla situated in front of the temple is
                    believed to be the exact spot of their union. An eternal
                    flame inside the temple is believed to burning since then.
                    Devotees who visit this temple take the ashes from this fire
                    in the form of a blessing. There are various sacred kunds or
                    ponds situated near the temple you can visit.
                  </p>
                  <p>
                    <span className='font-bold text-black'>Read Blog</span>:{" "}
                    <Link href='travel-blogs/interesting-facts-about-kedarnath-you-must-know'>
                      Interesting Facts About Kedarnath You Must know
                    </Link>
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    7. Satopanth
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>:
                    Gangotri Region, Garhwal Himalayas
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : Summers & post monsoon
                  </p>
                  <p>
                    Satopanth, a hidden gem in the Garhwal Himalayas of
                    Uttarakhand, India, is a remote and pristine high-altitude
                    lake that sits at an elevation of approximately 4,600 meters
                    above sea level. This stunning alpine wonder is surrounded
                    by towering peaks, including some of the {`region's`}{" "}
                    highest, and is accessible only through challenging treks
                    that require a special permit. Satopanth is not just a place
                    of natural beauty; it also holds great spiritual
                    significance in Hindu mythology. It is believed to be the
                    place where Lord Brahma, Lord Vishnu, and Lord Shiva, the
                    three principal deities of Hinduism, take their holy dips
                    during specific celestial alignments. This profound
                    connection with Hinduism adds to the allure of Satopanth,
                    making it a destination that attracts both adventure seekers
                    and spiritual pilgrims. A journey to Satopanth is a
                    testament to the untamed majesty of the Himalayas and the
                    rich tapestry of beliefs that adorn this mystical landscape.
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    8. Gangotri Glacier
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>:
                    Uttarkashi District, Uttarakhand
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : Mid-April to June & September to November
                  </p>
                  <p>
                    This valley like glacier is made up entirely of bedrocks. It
                    is 28km in length and almost 4km in width. There are various
                    trek circuits to choose from like Gangotri Gaumukh Trek,
                    Gangotri Gomukh Tapovan Trek, and Gangotri Tapovan Trek. The
                    difficulty of the trek depends on the circuit you pick, but
                    all of these circuits offer an equally stunning view of the
                    lush meadows and marvelous nature.
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    9.Shankaracharya Samadhi
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>: 32
                    kms away from Kedarnath
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : September to November & April to June
                  </p>
                  <p>
                    Shankaracharya Samadhi is the spot where Adi Shankaracharya
                    attained moksha and submerged himself in the holy town of
                    Kedarnath. He was an important Hindu philosopher who was the
                    greatest believer of the doctrine of Advaita Vedanta, He was
                    also the savious of Vedic Dharma that is relevant in India
                    even today. He took samadhi at a young age of 32 and even
                    today his followers resonate this place with the idea of
                    human connectivity. A hot water spring is available at the
                    Samadhi that should be visited by all.
                  </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    10. Phata
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>: 31
                    kms away from Kedarnath
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : Anytime
                  </p>
                  <p>
                    Here is the last place we recommend you visit in Kedarnath,
                    according to our blog:Enroute Kedarnath, there is a small
                    village known as Phata. Situated on the Gopeshwar- Gaurikund
                    road it has been built for commercial benefit as well as
                    strategic usage by pilgrims. Phata has a helipad that is
                    used by pilgrims to hire helicopter service and reach
                    Kedarnath easily. It takes 8 minutes to reach Kedarnath in a
                    helicopter from Phata. Pilgrims also have the option of
                    stopping there for refreshments and rest.
                  </p>
                  <p>
                    After the Kedarnath floods in 2013, there has been a lot of
                    speculation about whether or not it is safe to travel to the
                    holy place. But rest assured as the Government has already
                    started making reparations and the trekking route has
                    already been changed accordingly.
                  </p>
                </div>
                <h2 className='text-2xl font-semibold text-black/80'>
                  Conclusion
                </h2>
                <p>
                  Kedarnath is a place of profound spiritual significance and
                  natural beauty, offering a diverse range of tourist
                  attractions that make it a truly remarkable destination. From
                  the iconic Kedarnath Temple to the serene Vasuki Tal, the
                  sacred Bhairavnath Temple to the adventurous Chorabari Tal
                  trek, and the tranquil Gandhi Sarovar, these top 10 tourist
                  attractions in Kedarnath have something to offer every
                  traveler. To truly immerse oneself in the wonders of this
                  Himalayan haven, considering a meticulously planned Kedarnath
                  trip is highly recommended. These packages provide a seamless
                  blend of spiritual exploration and adventure, ensuring an
                  enriching and unforgettable journey through the heart of
                  Kedarnath.
                </p>
                <p>
                  At Capture a Trip, our team of experts is dedicated to
                  curating meticulously tailored itineraries, informed by local
                  knowledge and enriched with personalized services, all with
                  the aim of meeting your distinct travel preferences. Whether
                  you are a solo adventurer seeking solitude, a family in
                  pursuit of new and meaningful experiences, or a group of
                  friends eager to dive deep into {`Kedarnath's`} culture and
                  natural beauty, Capture a Trip is your ideal partner.
                </p>
                <p>
                  Choosing Capture a Trip ensures that your journey through
                  Kedarnath transforms into a fully immersive and enriching
                  experience. Feel free to reach out to us at 9711975564 to
                  learn more about the best places to visit and to discover the
                  perfect Kedarnath trip Package that aligns with your travel
                  aspirations.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-6 px-4 sm:col-span-3'>
              <h2 className='text-center text-3xl font-semibold text-black/80'>
                Our Blog Posts
              </h2>
              <div className='flex flex-col gap-4'>
                {recentPost.map((data) => (
                  <Link
                    href={`/travel-blogs/${data.blogslug}`}
                    key={data.blogslug}
                    className='relative flex h-[200px] items-end p-2'
                  >
                    <Image
                      src={data.coverImageUrl}
                      alt={data.coverimagealttag}
                      fill
                      placeholder='blur'
                      className='object-cover'
                      blurDataURL='/assets/249.jpg'
                      quality={50}
                    />
                    <div className='absolute left-0 top-0 h-full w-full bg-black/70' />
                    <div className='relative flex flex-col'>
                      <p className='text-sm font-semibold text-white'>
                        {data.blogname}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
