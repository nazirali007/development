import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import { navRoutes } from "./routes";
import Header from "./header";
import { MobileNavbar } from "./mobile-navbar";
import { Navlink } from "./navLink";
import Searchbar, { MobileSearchBar } from "./nav-searchbar";
import HomeSearchbox from "../home-searchbox";
import Ribbon from "../Ribbon";

export default function NavBar() {
    return (
        <>
            <Header>
                {/* <Ribbon /> */}
                <div className='flex no-scrollbar h-full w-full items-stretch justify-between gap-2'>
                    <div className='flex w-full lg:w-max items-center justify-between lg:gap-6'>
                        <div className='flex w-max items-center justify-between gap-2'>
                            <a
                                href={"/"}
                                className='w-[35%] md:w-auto'
                            >
                                <Image
                                    src='/assets/images/logomd.png'
                                    alt='logo'
                                    // fill
                                    height={50}
                                    width={50}
                                    className='sm:hidden w-20 h-8'
                                    blurDataURL='/assets/249.jpg'
                                    quality={50}
                                />
                                <Image
                                    src={"/assets/images/logolg.png"}
                                    alt='logo'
                                    // fill
                                    height={50}
                                    width={150}
                                    className='hidden sm:block'
                                    blurDataURL='/assets/249.jpg'
                                    quality={50}
                                />
                            </a>
                            <div className='flex items-center justify-center text-sm h-full w-full md:w-min'>
                                <a
                                    href={`tel:+918287636079`}
                                    className='flex items-center gap-2 w-max justify-center text-center font-bold text-white flex-row'
                                >
                                    <Phone className='h-4 w-4' />
                                    {`(+91) 8287636079 `}
                                </a>
                            </div>
                            <div className="w-[40%]">
                                <Searchbar />
                            </div>
                        </div>
                        <MobileSearchBar className={"lg:hidden"} />
                        <MobileNavbar navRoutes={navRoutes} />
                    </div>
                    <ul className='hidden w-full items-center justify-between gap-3 font-semibold text-white whitespace-nowrap lg:flex xl:gap-6 max-w-fit'>
                        {navRoutes.map((route) => (
                            <li
                                key={route.href}
                                className={`flex items-center h-full justify-center text-center text-base`}
                            // class="linear-wipe text-[20vw]"
                            >
                                {route.sublinks ? (
                                    <div className='group h-full relative flex cursor-pointer items-center gap-1 transition-all duration-300 ease-in-out'>
                                        <a href={route.href} className='flex flex-col gap-1 w-full text-start'>
                                            {route.label}
                                            {/* <span className='h-0.5 w-full origin-left scale-x-0 bg-white transition-all duration-300 ease-in-out' /> */}
                                            <span className='h-[2px] w-full origin-left scale-x-0 bg-transparent transition-all duration-300 ease-in-out group-hover:scale-x-100' />
                                        </a>
                                        <ChevronDown className='flex pb-0.5 group-hover:hidden' />{" "}
                                        <ChevronUp className='hidden pb-0.5 group-hover:flex' />{" "}
                                        <span className='absolute top-full hidden w-full flex-col justify-center rounded-sm bg-zinc-50 !px-1 !py-0.5 text-black duration-300 ease-in-out group-hover:flex md:gap-2 md:p-2'>
                                            {route.sublinks.map((sublink) => (
                                                <Navlink key={sublink.href} className="text-start flex w-full hover:text-primaryMain rounded-sm px-1 transition py-1 duration-300 ease-in-out hover:bg-zinc-100" activeClassName="text-primaryMain bg-zinc-100 font-semibold shadow-sm hover:text-black" href={sublink.href}>
                                                    {sublink.label}
                                                </Navlink>
                                            ))}
                                        </span>
                                    </div>
                                ) : (
                                    <Navlink key={route.href} className={`group w-full h-full items-center text-start justify-center flex flex-col gap-1 duration-300 ease-in-out transition ${route.href == "/international-newyear-tour-package" && 'linear-wipe'}`} activeClassName="" href={route.href}>
                                        {route.label}
                                        <span className='h-[2px] w-full origin-left scale-x-0 bg-white transition-all duration-300 ease-in-out group-hover:scale-x-100' />
                                    </Navlink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </Header>
        </>
    );
}
