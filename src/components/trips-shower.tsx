"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { TripStrapiCard } from "./trip-card";
import Image from "next/image";
import RequestCallback from "./RequestCallback";

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
  const [tripDates, setTripDates] = useState<TripDays>("All");

  const filteredTrips = Trips.filter((data: any) => {
    // Filter based on trip days [ All | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ]
    if (tripDates === "All") return true;
    if (tripDates === null) return true; // If no trip dates are available,
    return data.durationdays === parseInt(tripDates);
  });
  const [showForm, setShowForm] = useState<boolean>(false);
  // console.log("trips", Trips)
  return (
    <div>
      {showForm && <RequestCallback showPopup={showForm} setShowPopup={setShowForm} />}
      <div className='flex items-center justify-center px-4 pb-6 pt-2 md:flex-col-reverse md:items-start md:gap-4 xl:px-0'>
        <div className='flex w-full flex-row items-start justify-between gap-2 sm:justify-start md:flex-row md:items-start md:gap-4'>
          {/* Days Filter */}
          <div className='flex max-h-10 w-fit flex-row items-center justify-between gap-2 p-0.5 md:flex-row md:gap-4'>
            <Select onValueChange={(value) => setTripDates(value as TripDays)}>
              <SelectTrigger className='without-ring items-center justify-between border-none border-primaryMain bg-primaryMain/20 px-3 py-2 text-center text-sm font-medium text-gray-950 sm:min-w-[120px]'>
                <SelectValue
                  placeholder='Duration'
                  className='hidden sm:block'
                />
              </SelectTrigger>
              <SelectContent className='z-[100]'>
                <SelectItem value={"All"}>All</SelectItem>
                {Trips.map((data: any) => data.durationdays)
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
        <div className={`grid auto-rows-fr items-center justify-between gap-4 px-2 py-5 md:px-6 md:py-0 sm:grid-cols-9 lg:grid-cols-9 xl:grid-cols-12 ${filteredTrips.length <= 4 ? 'sm:gap-4 md:gap-6 grid-cols-1 px-8' : 'grid-cols-6 sm:gap-3 md:gap-5 '}`}>
          {filteredTrips.map((data: any) => (
            <TripStrapiCard
              className='col-span-3 md:col-span-4'
              key={data.slug}
              data={data}
              showForm={showForm} setShowForm={setShowForm}
            />
          ))
          }
        </div>
      )
        : (
          <div className='col-span-6 flex h-96 flex-col items-center justify-center text-center'>
            <Image
              src='/assets/images/sad-figure.svg'
              alt='No Trips Found'
              width={300}
              height={300}
              className='object-contain'
              quality={50}
            />

            <h1 className='text-2xl font-bold text-gray-950'>No Trips Found</h1>
            <p className='text-sm font-medium text-gray-950'>
              For any queries, or custom trips, please contact us directly.
            </p>
          </div>
        )
      }
    </div >
  );
}
