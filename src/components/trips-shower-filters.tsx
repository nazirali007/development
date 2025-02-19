"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { TripStrapiCard } from "./trip-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import RequestCallback from "./RequestCallback";
export type TripType = "All" | "Domestic" | "International";
export type TripDays =
  | "All"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15";

export default function TripsShower({ Trips }: any) {
  const [tripType, setTripType] = useState<TripType>("All");
  const [tripDates, setTripDates] = useState<TripDays>("All");

  const filteredTrips = Trips.filter((data: any) => {
    // Filter based on trip type [ All | Domestic | International ]
    if (tripType === "International") return data.isInternational;
    if (tripType === "Domestic") return !data.isInternational;
    if (tripType === null) return true; // If no trip type is selected,
    return true;
  }).filter((data: any) => {
    // Filter based on trip days [ All | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ]
    if (tripDates === "All") return true;
    if (tripDates === null) return true; // If no trip dates are available,
    return data.durationdays === parseInt(tripDates);
  });
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <section>
      {/* Filters */}
      {showForm && <RequestCallback showPopup={showForm} setShowPopup={setShowForm} />}
      <div>
        <div className='sticky top-16 z-10 overflow-hidden opacity-100 flex items-center justify-between px-4 pb-6 pt-2 md:flex-col-reverse md:items-start md:gap-4 xl:px-0'>
          <div className='flex w-full flex-row items-start justify-between gap-2 sm:justify-start md:flex-row md:items-start md:gap-4'>
            <div className='flex h-10 w-fit flex-row items-center justify-between md:flex-row md:items-center'>
              <div className='min-10 flex w-fit flex-row items-center justify-between gap-2 md:flex-row md:items-start md:gap-4'></div>
              <div className='min-10 flex h-full sticky top-14 z-10 w-full flex-row items-center justify-center'>
                <label className='min-10 relative inline-flex h-full cursor-pointer select-none items-center justify-center rounded-md bg-white shadow-card'>
                  <button
                    type='button'
                    onClick={() => setTripType("All")}
                    className={`without-ring flex h-full basis-1/5 items-center justify-center space-x-[6px] rounded-l border-none border-primaryMain px-3 py-2 text-center text-sm font-medium text-gray-950 transition duration-150 sm:min-w-[80px] ${tripType === "All"
                      ? "inset-1 bg-primaryMain/40 text-black"
                      : "-inset-1 bg-primaryMain/20"
                      }`}
                  >
                    All
                  </button>
                  <button
                    type='button'
                    onClick={() => setTripType("Domestic")}
                    className={cn(
                      `without-ring flex h-full basis-2/5 items-center justify-center space-x-[6px] border border-y border-none border-slate-900 px-3 py-2 text-center text-sm font-medium text-gray-950 transition duration-150 sm:min-w-[60px] ${tripType === "Domestic"
                        ? "inset-1 bg-primaryMain/40 text-black"
                        : "-inset-1 bg-primaryMain/20"
                      }`
                    )}
                  >
                    Domestic
                  </button>
                  <button
                    type='button'
                    onClick={() => setTripType("International")}
                    className={`without-ring flex h-full basis-2/5 items-center justify-center space-x-[6px] rounded-r border-none border-primaryMain px-3 py-2 text-center text-sm font-medium text-gray-950 transition duration-150 sm:min-w-[120px] ${tripType === "International"
                      ? "inset-1 bg-primaryMain/40 text-black"
                      : "-inset-1 bg-primaryMain/20"
                      }`}
                  >
                    International
                  </button>
                </label>
              </div>
            </div>

            {/* Days Filter */}
            <div className='flex max-h-10 w-fit flex-row items-center justify-between gap-2 bg-white  md:flex-row md:gap-4 rounded-xl'>
              <Select
                onValueChange={(value) => setTripDates(value as TripDays)}
              >
                <SelectTrigger className='bg-opacity-100 opacity-100 without-ring items-center justify-between border-none border-primaryMain bg-primaryMain/20 px-3 py-2 text-center text-sm font-medium text-gray-950 sm:min-w-[120px]'>
                  <SelectValue
                    placeholder='Duration'
                    className='hidden sm:block'
                  />
                </SelectTrigger>
                <SelectContent className='z-[100]'>
                  <SelectItem value={"All"}>All</SelectItem>
                  {Trips
                    // .filter((data: any) => data.isCustomized === false)
                    .map((data: any) => data.durationdays)
                    .filter(
                      (value: any, index: any, self: any) =>
                        self.indexOf(value) === index
                    )
                    .sort((a: any, b: any) => a - b)
                    .map((value: any) => {
                      if (value === null) return null; // if date is null return null
                      return (
                        <SelectItem key={value} value={value}>
                          {value} Days
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        {filteredTrips.length > 0 ? (
          <>
            <div className='z-0 mt-14 grid auto-rows-fr grid-cols-6 gap-2 px-2 py-5 sm:mt-0 sm:grid-cols-6 md:gap-5 md:px-6 md:py-0 lg:grid-cols-9 xl:grid-cols-12 xl:px-0'>
              {filteredTrips.map((data: any) => (
                <TripStrapiCard
                  className='col-span-3'
                  key={data.slug}
                  data={data}
                  showForm={showForm} setShowForm={setShowForm}
                />
              ))}
            </div>
          </>
        ) : (
          <div className='col-span-6 flex h-96 flex-col items-center justify-center text-center'>
            <Image
              src='/assets/images/sad-figure.svg'
              alt='No Trips Found'
              width={300}
              height={300}
              className='object-contain'
            />

            <h1 className='text-2xl font-bold text-gray-950'>No Trips Found</h1>
            <p className='text-sm font-medium text-gray-950'>
              For any queries, or custom trips, please contact us directly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
