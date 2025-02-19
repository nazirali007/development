"use client";

import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "@/hooks/use-on-click.outside";

export function Searchbox({
  iconClass,
  inputClass,
  linkClass,
  innerfont,
}: {
  iconClass?: string;
  inputClass?: string;
  linkClass?: string;
  innerfont?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [filteredData, setFilteredData] = React.useState<
    | {
        name: string;
        slug: string;
      }[]
    | undefined
  >([]);
  const navRef = React.useRef<HTMLDivElement | null>(null);
  // const data = getTripSearched();

  // useEffect(() => {
  //   // Filter the data based on the condition when 'value' changes
  //   const filtered = data?.filter((trip) =>
  //     trip.name.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  //   // Update 'open' based on the filtered data
  //   setOpen(value !== "" && filtered?.length! > 0);
  // }, [value, data]);

  useEffect(() => {
    if (value) {
      setOpen(true);
    } else {
      // setOpen(false)
    }
  }, [value]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleInputFocus = () => {
    setOpen(true);
  };

  const handleInputBlur = () => {
    // Delay closing the dropdown to handle clicks on the dropdown options
    setTimeout(() => {
      // setOpen(false);
    }, 200);
  };

  useOnClickOutside(navRef, () =>
    setTimeout(() => {
      setOpen(false);
    }, 200)
  );

  return (
    <div className='relative z-50 w-full p-1'>
      <div className='relative flex'>
        <MapPin className={cn(iconClass)} />
        <input
          type='text'
          placeholder='Search Trips'
          value={value}
          onChange={onInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className={cn(
            "w-full font-medium outline-none placeholder:text-gray-800/80",
            inputClass,
            innerfont
          )}
        />
        <Search className={cn(iconClass)} />
      </div>
      {open && (
        <div
          ref={navRef}
          className='custom-scrollbar absolute top-[120%] z-50 flex max-h-40 w-full flex-col gap-2 overflow-y-scroll bg-white p-4'
        >
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((list) => (
              <Link
                key={list.slug}
                href={`/trip/${list.slug}`}
                className={cn(
                  "transition-all duration-200 ease-in-out",
                  linkClass
                )}
              >
                {list.name}
              </Link>
            ))
          ) : (
            <p className={innerfont}>no result found</p>
          )}
        </div>
      )}
    </div>
  );
}
