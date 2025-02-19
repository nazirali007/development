import { Icons } from "@/assets/icons";
import Socials from "@/components/reusable/socials";
import { Blogs } from "@/server/db/blogs/list-blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
              alt={"Top 10 Tourist Attractions in Kedarnath"}
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
              Top 10 Tourist Attractions in Kedarnath
            </h1>
          </section>

          <section className='mx-auto grid h-full w-full max-w-7xl gap-x-6 gap-y-8 px-4 pb-10 pt-20 sm:grid-cols-10'>
            <div className='relative col-span-1 hidden h-full w-full flex-col gap-8 sm:flex'>
              <Socials dir="vert" />
            </div>
            <div className='flex flex-col gap-4 sm:col-span-6'>
              <h2 className='text-3xl font-semibold text-black/80'>
                Top 10 Tourist Attractions in Kedarnath
              </h2>
              <div className='space-y-3 text-justify text-xs sm:text-sm'>
                <p>
                  Kedarnath, nestled in the serene Himalayan foothills of
                  Uttarakhand, boasts a wealth of breathtaking tourist
                  attractions that beckon travelers from across the globe. Among
                  the top 10 must-visit spots are the Kedarnath Temple, an
                  ancient Hindu shrine perched at an elevation of 3,583 meters,
                  and the pristine Vasuki Tal, a stunning glacial lake
                  surrounded by majestic peaks. The sacred Bhairavnath Temple,
                  the challenging Chorabari Tal trek, and the ethereal Gandhi
                  Sarovar lake are also on this list of gems. For those seeking
                  an unforgettable Kedarnath experience, consider the
                  meticulously curated Kedarnath trip packages that offer a
                  seamless blend of spiritual exploration and adventure,
                  ensuring an enriching journey through this Himalayan haven.
                  Kedarnath, with its mesmerizing tourist places and places to
                  visit in Kedarnath, promises a truly memorable adventure in
                  the lap of nature.
                  <br />
                  Feel free to reach out to us with any questions; {`we're`}{" "}
                  here to assist you in exploring the meticulously crafted{" "}
                  <Link
                    href={"kedarnath-tour-packages"}
                    className='text-blue-700 underline'
                  >
                    Kedarnath Tour Package
                  </Link>{" "}
                  by Capture a Trip.
                </p>
                <h2 className='text-3xl font-semibold text-black/80'>
                  Top 10 Famous Tourist Attractions in Kedarnath
                </h2>
                <p>
                  Kedarnath boasts several famous tourist attractions, each a
                  beautiful place in its own right. The Kedarnath Temple, a
                  sacred marvel perched at 3,583 meters, offers spiritual solace
                  amid stunning Himalayan vistas. Vasuki Tal, a serene glacial
                  lake surrounded by majestic peaks, showcases {`nature's`}{" "}
                  beauty.
                </p>
                <h2 className='text-3xl font-semibold text-black/80'>
                  Here is a list of the top 10 Kedarnath tourist place
                </h2>
                <ul className='pl-5'>
                  <li className='list-decimal'>Kedarnath Temple</li>
                  <li className='list-decimal'>Gauri Kund</li>
                  <li className='list-decimal'>Sonprayag</li>
                  <li className='list-decimal'>Chorabari Tal</li>
                  <li className='list-decimal'>Vasuki Tal</li>
                  <li className='list-decimal'>Triyuginarayan Temple</li>
                  <li className='list-decimal'>Satopanth</li>
                  <li className='list-decimal'>Gangotri Glacier</li>
                  <li className='list-decimal'>Shankaracharya Samadhi</li>
                  <li className='list-decimal'>Phata</li>
                </ul>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-xl font-semibold text-black/80'>
                    1. Kedarnath Temple
                  </h3>
                  <p>
                    <span className='font-bold text-black'>Location</span>:
                    Garhwal Himalyan Range, near Mandakini River
                    <br />
                    <span className='font-bold text-black'>
                      Opening Timings
                    </span>
                    : Daily from 4 am to 9 pm, April to November
                  </p>
                  <p>
                    The First most beautiful tourist place to visit in kedarnath
                    is Kedarnath Temple. Dedicated to Hindu Lord Shiva, the
                    historic relevance of the Kedarnath Temple dates back to the
                    Hindu epic Mahabharat. It is believed that after defeating
                    their cousins, Pandavas built this temple to atone for the
                    sins they committed in the war. Known for the intricate
                    architecture and carved idols of various Hindu deities, this
                    temple is considered one of the most holy temples by Hindus.
                    You should especially visit the peak of Kedarnath and
                    Bhairava Temple to get the full experience of this majestic
                    beauty.
                  </p>
                  <p>
                    <span className='font-bold text-black'>Read Blog</span>:{" "}
                    <Link href='travel-blogs/tips-and-tricks-for-a-comfortable-kedarnath-yatra'>
                      Things to carry for kedarnath trek
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
