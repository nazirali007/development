import { BiSolidUpArrow } from "react-icons/bi";
import Link from "next/link";
import { cn } from "@/lib/utils";

function TripNavigation({
    NavigationItems,
}: {
    NavigationItems: {
        title: string;
        href: string;
    }[];
}) {

    return (
        <>
            <div
                className="sticky left-0 right-0 top-[4.5rem] z-50 mx-[2vh] rounded-md flex flex-col gap-4 overflow-hidden text-black bg-[#99cbe4] md:top-20 md:mx-0 md:rounded-md"
            >
                <div className='flex h-full w-full items-center justify-center text-xs'>
                    {NavigationItems && NavigationItems.length > 0
                        ? NavigationItems.map((item, index) => (
                            <>
                                <Link
                                    key={index}
                                    href={item.href}
                                    className='flex h-full w-full flex-row items-center justify-center border-r py-2 border-primaryDark px-1 text-center text-xs uppercase font-semibold transition duration-300 ease-in-out bg-[#99cbe4] sm:text-sm xl:text-sm'
                                >
                                    {item.title}
                                </Link>
                            </>
                        ))
                        : null}
                    <Link
                        href={"#about"}
                        title="Go to Top"
                        className='flex h-full w-full max-w-6 flex-row items-center justify-center py-2 text-center text-xs font-semibold text-primaryDark transition duration-300 ease-in-out hover:bg-primaryMain sm:text-sm md:max-w-8 xl:text-base 2xl:text-lg'
                    >
                        <BiSolidUpArrow className='h-3 w-3' />
                    </Link>
                </div>
            </div >
        </>
    );
}

export default TripNavigation;
