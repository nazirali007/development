import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import React from "react";

import { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us",
  description: "Capture a Trip is a best and leading tour operator, offering unforgettable experiences to its customers all over from the world  with the best deals on tours and activities",
  alternates: {
    canonical: '/about-us'
  },
};

export default function Page() {
  return (
    <>
      <main className='flex flex-col gap-16'>
        <section className='relative -top-14 flex h-[500px] w-full items-center justify-center'>
          <Image
            src={"/assets/images/img-about-us.jpg"}
            alt=''
            fill
            className='object-cover'
            placeholder='blur'
            blurDataURL='/assets/249.jpg'
          // quality={50}
          />
          <div className='absolute left-0 top-0 h-full w-full backdrop-blur-sm' />
          <h1 className='relative text-4xl font-bold text-white sm:text-6xl'>
            ABOUT US
          </h1>
        </section>

        <section className='mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-2 sm:px-4 md:px-2'>
          <h2 className='flex items-center gap-4 text-3xl font-bold text-textColor md:text-start md:text-4xl lg:text-5xl'>
            The Idea Behind Capture A Trip
          </h2>
          <div className='mx-auto mt-10 w-full max-w-7xl flex flex-col gap-6 px-4'>
            <p className='text-justify text-sm lg:text-base'>{`Step into a world of adventure with Capture A Trip, where every journey is an opportunity to connect, explore, and discover. For over 6 years, we've been curating unforgettable travel experiences that bring people together and fulfill their wanderlust.`}</p>
            <p className='text-justify text-sm lg:text-base'>{`Forget the stress of planning and organizing – we've perfected the art of seamless travel, so you can focus on soaking up every moment of your adventure. Safety is our mantra, especially for solo female travelers. With us, you'll find a supportive community that prioritizes your well-being and ensures you feel secure every step of the way.`}</p>{" "}
            <p className='text-justify text-sm lg:text-base'>{`But what sets us apart is our passion for the extraordinary. We're not content with the ordinary tourist traps – we're on a mission to uncover the hidden gems, the secret spots, and the offbeat destinations that will leave you in awe. From remote villages to untouched landscapes, we'll take you on a journey of discovery like no other.`}</p>{" "}
            <p className='text-justify text-sm lg:text-base'>{`So whether you're seeking adrenaline-pumping adventures, cultural immersion, or simply a chance to escape the ordinary, Capture A Trip is your ticket to unforgettable experiences and lifelong memories. Join us and let's embark on the adventure of a lifetime together.`}</p>

          </div>
        </section>

        <section className='mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-4'>

          <h2 className='flex items-center gap-4 text-3xl font-bold text-textColor md:text-start md:text-4xl lg:text-5xl'>
            The Idea Behind Capture A Trip
          </h2>
          <div className='mx-auto mt-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-3 md:gap-6 px-4'>
            {
              AboutUs.map((person) => (
                <div key={person.id} className='flex flex-col items-center gap-2'>
                  <div className='flex flex-row md:flex-col items-center gap-2'>
                    <div className='relative h-32 w-32 overflow-hidden rounded-full'>
                      <Image
                        src={person.image}
                        alt=''
                        fill
                        className='object-cover'
                        placeholder='blur'
                        blurDataURL='/assets/249.jpg'
                      // quality={50}
                      />
                    </div>
                    <div className='flex ml-2 md:ml-0 text-start md:text-center flex-col items-start md:items-center gap-2'>
                      <h2 className='text-xl font-semibold text-black/80'>
                        {person.name}
                      </h2>
                      <p>{person.role}</p>
                      <div className='flex gap-2'>
                        {person.linkedin && (
                          <Link href={person.linkedin} target='_blank' rel='noreferrer' className='flex hover:scale-[1.08] hover:opacity-90 duration-300 transition ease-in-out cursor-pointer items-center gap-1 text-[#0077B5]'>
                            <FaLinkedin size={20} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='text-justify text-sm'>{person.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </>
  );
}

const AboutUs: {
  id: number;
  name: string;
  linkedin?: string;
  role: string;
  image: string;
  description: string;
}[] = [
    {
      id: 1,
      name: "Nitin Khanna",
      linkedin: "https://www.linkedin.com/in/nitkhanna",
      role: "Founder",
      image: "/assets/images/nitin.jpg",
      description: `Nitin is the start of everything. A young enterpreneur whose unique vision of the travel sector led him to build what CAT is today. For years he travelled solo to test the waters to establish a new travel company and since then his travel expeditions have never come to a halt. He has travelled with over 1,000+ people and knows the smallest of on-ground necessities and knows what makes a travelling experience memorable. He's the man with the perfect set of leadership skills and functions as a thread that weaves every department and person of CAT together. It is because of him travellers have found a community and this company stands together as a tight-knit family.`,
    },
    {
      id: 2,
      name: "Vishal Kapoor",
      linkedin: "https://www.linkedin.com/in/vishal-kapoor-2a2807262/",
      role: "Head of Sales & Marketing",
      image: "/assets/images/vishal.jpg",
      description: `If one were to describe Vishal in a sentence it would be 'a true workaholic' (a bigger gymaholic). His convincing skills when it comes to sales are undefeatable and his optimistic outlook makes everybody look up to him. He leads the sales team through most pressure yet it's a mystery how he does with utmost calmness because one has never seen him leave his gentle demeanor. In just three years he has tailored 500+ itineraries and led 50+ trips, with his speciality of never disappointing a single traveller who has travelled with him.`,
    },
    {
      id: 3,
      name: "Arpit Goyal",
      linkedin: "https://www.linkedin.com/in/arpit-goyal-99a23318b/",
      role: "Head of Operations",
      image: "/assets/images/arpit.jpg",
      description: `Arpit is the backbone of CAT who single-handedly leads all the travel operations. With his sharp observation and excellent problem solving skills, he tests the locations and vendors before anyone experiences them. It is commendable that he has such in depth industry knowledge at such a young age. It's still a mystery how he juggles smoothly between studies and his passion for travelling, as he has covered more than 20 Indian states on his own!`
    }, {
      id: 4,
      name: "Anandita Kaul",
      linkedin: "https://www.linkedin.com/in/anandita-kaul-82a8a3155/",
      role: "Content Head",
      image: "/assets/images/annie.jpg",
      description: `Introducing Anandita, our exceptional Content Head with a passion for words and a knack for captivating storytelling. With her extensive experience in the realm of content creation and management, Anandita is an invaluable asset to our team.With Anandita at the helm of our content strategy, we are confident in our ability to deliver engaging, informative, and persuasive content that drives meaningful connections with our audience. Her commitment to excellence, combined with her exceptional skill set, makes her an indispensable asset to our team. We are proud to have Anandita as our Content Head, and we look forward to the remarkable contributions she will continue to make in shaping our content and driving our brand's success.`
    }
  ]