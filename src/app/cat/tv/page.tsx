import { cn } from "@/lib/utils";
import React from "react";
import { FaAnglesRight, FaHashtag } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import Image from "next/image";
import { getStrapiTVContent, getStrapiTVCustomContent, getStrapiTVLeaderContent } from "@/lib/strapi";
import { notFound } from "next/navigation";
import InfiniteScroll from "@/components/infinite-scroll";
import { EmployeesSpotlight } from "@/components/ui/emloyees-spotlight";
import bg from '../../../../public/assets/tv/bg.jpg';
export const dynamic = "force-dynamic";

export default async function Page() {
  const strapiContent = await getStrapiTVContent();
  const strapiLeaderContent = await getStrapiTVLeaderContent();
  const strapiCustomContent = await getStrapiTVCustomContent();
  if (!strapiContent) {
    return notFound();
  }
  if (!strapiLeaderContent) {
    return notFound();
  }
  if (!strapiCustomContent) {
    return notFound();
  }
  //testing
  const pageType = strapiContent.view;
  return (
    <>
      {pageType === 'leaderboard' ? (
        <EmployeePage strapiContent={strapiContent} strapiLeaderContent={strapiLeaderContent} />
      ) : pageType === 'noticeboard' ? (
        <NoticeBoard strapiContent={strapiContent} />
      ) : (
        <Custom strapiCustomContent={strapiCustomContent} />
      )
      }
      {/*       
        // <Welcome strapiContent={strapiContent} />
       */}
      {/* <Message strapiContent={strapiContent} /> */}
    </>
  );
}

const Message = async ({ strapiContent }: any) => {
  return (
    <div className="relative w-full h-[100vh]">
      <Image
        src={"/assets/tv/congrats.png"}
        alt={"message"}
        className="relative overflow-hidden"
        placeholder='blur'
        fill
        blurDataURL='/assets/249.jpg'
        priority
        loading='eager'
        quality={100}
        style={{
          objectFit: "cover",
          objectPosition: "center"
        }}
      />
    </div>
  )
}

const Welcome = async ({ strapiContent }: any) => {
  const theme = true;
  // const speed: "normal" | "fast" | "slow" = "normal";

  const todayDate = new Date().toLocaleString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="h-[100vh] bg-[url(/assets/tv/bg.jpg)] flex flex-col items-center justify-center text-white gap-4 bg-cover">
      <div className="text-secondaryMain text-6xl font-bold">Samosa and Vodka Party in Evening </div>
      <div className="h-[45vh] w-[30vw] relative">
        <Image
          src={"/assets/tv/annie.png"}
          alt={strapiContent.employee?.data?.attributes?.alternativeText}
          className="relative overflow-hidden rounded-2xl"
          placeholder='blur'
          fill
          blurDataURL='/assets/249.jpg'
          priority
          loading='eager'
          quality={100}
        />
      </div>
      {/* <div className=" text-secondaryMain text-6xl font-bold">Aman Chadha</div> */}
      <div className="text-6xl font-semibold text-secondaryMain">Congratulations</div>
      <div className="text-4xl font-semibold uppercase">Annie for completing an year</div>
    </div>
  )
}

const NoticeBoard = async ({ strapiContent }: any) => {
  const theme = true;
  const speed: "normal" | "fast" | "slow" = "normal";

  const todayDate = new Date().toLocaleString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // console.log(strapiContent);

  return (
    <>
      <>
        <div>
          <Image className="relative flex w-full flex-col items-center justify-start bg-cover bg-fixed bg-bottom xl:max-h-screen xl:overflow-hidden" src={bg} alt={'not found'} />
          {/* absolute date on top right */}
          <div className='absolute right-0 top-0 p-4 text-lg font-bold uppercase text-white'>
            <h1 className='text-xl capitalize sm:text-2xl md:text-3xl xl:text-3xl'>
              {todayDate}
            </h1>
          </div>

          {/* Content */}
          <center>
            <div className="absolute top-28 height-100vh width-full">
              <div className="text-secondaryMain text-6xl font-bold">
                <i>
                  NOTICE BOARD
                </i>
              </div>
              <div className="text-white text-4xl pt-12 px-16" dangerouslySetInnerHTML={{ __html: `${strapiContent.noticeboard}` }}>
              </div>
            </div>
          </center>
        </div>
      </>
    </>
  );
};


const EmployeePage = async ({ strapiContent, strapiLeaderContent }: any) => {
  return (
    <>
      <div>
        <Image className="relative flex w-full flex-col items-center justify-start bg-cover bg-fixed bg-bottom xl:max-h-screen xl:overflow-hidden" src={bg} alt={'not found'} />
        <EmployeesSpotlight
          className='-top-40 left-[35%] md:-top-20 md:left-[35%]'
          fill='#ffffff'
        />
        <div className='absolute top-4 z-10 flex h-full w-full flex-col items-center text-center text-lg font-bold uppercase text-white md:text-xl lg:text-3xl p-[1.5vh]'>
          <section className='relative flex h-full w-full flex-col'>
            <div
              className={cn(
                "relative left-0 right-0 z-20 flex h-full min-h-screen w-full flex-col items-center justify-start bg-cover bg-fixed bg-bottom"
              )}
            >
              <div className='flex h-full w-full flex-1 flex-col justify-center'>
                <div
                  className="flex flex-col w-full overflow-hidden items-center justify-center h-[55vh]"
                >
                  <div
                    className={cn(
                      "relative z-10 flex flex-col w-full items-center justify-center h-[10vh]"
                    )}
                  >
                    <h1
                      className="text-7xl font-bold text-[#FFD700] inset-1"
                    >
                      {strapiContent.heading || "Top Performers"}
                    </h1>
                    <p
                      className='text-xl font-bold text-white'
                    >
                      {strapiContent.description || "of the Month awarded to"}
                    </p>
                  </div>
                  <div className='flex h-full w-full flex-1 flex-row-reverse items-center justify-center mt-[1vh] basis-1/3 gap-[10vh]'>
                    <div className='flex min-h-full w-full max-w-fit flex-row items-end justify-center'>
                      <div>
                        <TopEmployee
                          className='size-52 lg:size-[32vh] 2xl:size-[38vh]'
                          rank={3}
                          employee={strapiContent.topemployees.data[2]}
                        />
                      </div>
                    </div>
                    <div>
                      <TopEmployee
                        className='size-52 lg:size-[32vh] 2xl:size-[38vh]'
                        classNameMain='justify-center items-center w-fit'
                        rank={1}
                        employee={strapiContent.topemployees.data[0]}
                      />
                    </div>
                    <div className='flex min-h-full w-full max-w-fit flex-row items-end justify-center'>
                      <div>
                        <TopEmployee
                          className='size-52 lg:size-[32vh] 2xl:size-[38vh]'
                          rank={2}
                          employee={strapiContent.topemployees.data[1]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex h-[50vh] w-full flex-row overflow-hidden items-center justify-center'>
                  <TopTeam strapiLeaderContent={strapiLeaderContent.topemployees.data[0].attributes.team} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const TopTeam = ({
  strapiLeaderContent,
  className = "",
  classNameMain = "",
  rank,
}: {
  strapiLeaderContent: any;
  className?: string;
  classNameMain?: string;
  rank?: number;
}) => {
  return (
    <>
      <div
        className={cn(
          "flex h-full w-full flex-row items-center justify-center gap-[10vh] text-center",
          `${classNameMain}`
        )}
      >
        <div className='flex w-full max-w-2xl flex-col items-center justify-center gap-[1vh] text-start capitalize text-white md:gap-8 md:text-xl lg:text-3xl xl:max-w-[80vh]'>
          <h2 className="text-3xl font-bold text-[#FFD700] inset-1 uppercase text-start w-full gap-4">
            <FaAnglesRight className='inline-block w-10 h-10 text-[#FFD700]' />
            {strapiLeaderContent.heading || 'BEST PERFORMING SALES TEAM'}
          </h2>
          <h2 className='text-6xl ml-32 font-bold text-[#FFD700]  text-start line-clamp-3 capitalize w-full'>
            {strapiLeaderContent.data.attributes.name}
          </h2>
        </div>
        <div className='flex h-full w-full max-w-fit flex-row items-center justify-start'>
          <div
            className={cn(
              "relative h-[35vh] w-[40vh] rounded-xl border-2 border-yellow-400 shadow-md",
              className
            )}
          >
            <Image
              src={strapiLeaderContent.data.attributes.leader.data.attributes.avatar.data.attributes.url || "/assets/249.jpg"}
              alt={
                strapiLeaderContent.data.attributes.leader.data.attributes.avatar.data.attributes.alternativeText ||
                strapiLeaderContent.heading
              }
              className='relative overflow-hidden rounded-xl border-4 border-yellow-400 object-cover object-center'
              placeholder='blur'
              fill
              blurDataURL='/assets/249.jpg'
              priority
              loading='eager'
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};

const TopEmployee = ({
  employee,
  className = "",
  classNameMain = "",
  rank,
}: {
  employee: {
    id: number;
    attributes: {
      Name: string,
      avatar: {
        data: {
          id: number,
          attributes: {
            url: string;
            alternativeText: string;
          };
        };
      };
    };
    totalconvertedleads: number;
    totalconvertedsales: number;
  };
  className?: string;
  classNameMain?: string;
  rank?: number;
}) => {
  return (
    <>
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center text-center",
          `${classNameMain}`
        )}
      >
        <div className={cn("relative rounded-xl shadow-md", className)}>
          <div className={cn('absolute -left-8 max-h-fit w-6 text-[#FFD700] flex flex-col -gap-4 items-center justify-center text-center text-4xl',
            rank === 1 ? 'top-0' : 'top-4'
          )}>
            <FaCrown className='h-6 w-6 text-[#FFD700]' />
            {rank}
          </div>
          <Icon className='absolute -bottom-3 -left-3 h-6 w-6 text-[#FFD700]' />
          <Icon className='absolute -right-3 -top-3 h-6 w-6 text-[#FFD700]' />
          <Icon className='absolute -bottom-3 -right-3 h-6 w-6 text-[#FFD700]' />

          <Avatar
            src={employee.attributes.avatar.data.attributes.url}
            alt={
              employee.attributes.avatar.data.attributes.alternativeText || employee.attributes.Name
            }
            className='relative overflow-hidden rounded-3xl object-cover object-center'
          />
        </div>
        <TopEmployeeName name={employee.attributes.Name} />
      </div>
    </>
  );
};

const Avatar = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <>
      <Image
        src={src || "/assets/249.jpg"}
        alt={alt}
        className={cn(
          "relative overflow-hidden rounded-full border-4 border-yellow-400 object-cover object-center",
          `${className}`
        )}
        placeholder='blur'
        fill
        blurDataURL='/assets/249.jpg'
        priority
        loading='eager'
        quality={100}
      />
    </>
  );
};

const TopEmployeeName = ({ name }: { name: string }) => {
  return (
    <>
      <div className='-mt-10 flex h-full w-full flex-col items-center justify-center px-[10vh] text-center'>
        <div
          className={cn(
            "relative z-10 flex h-full w-full flex-row items-center justify-center",
            "rounded-xl border-x-4 border-y-4 border-yellow-400 bg-gradient-to-r from-blue-950 via-blue-950 to-blue-950 shadow-md"
          )}
        >
          <h1
            className={cn(
              "py-1 px-4 text-2xl font-semibold text-[#FFD700] md:text-3xl xl:text-2xl",
              "flex items-center justify-center gap-2 capitalize"
            )}
          >
            {name}
          </h1>
        </div>
      </div>
    </>
  );
};

const Custom = ({ strapiCustomContent }: any) => {
  return (
    <>
      <Image className="relative flex w-full flex-col items-center justify-start bg-cover bg-fixed bg-bottom xl:max-h-screen xl:overflow-hidden" src={strapiCustomContent.custom.data.attributes.url} alt={strapiCustomContent.custom.data.attributes.name} fill />
    </>
  )
}