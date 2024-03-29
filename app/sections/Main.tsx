/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState, useMemo } from "react";
import { TrainSymbol } from "@/app/components";

interface HackTime {
  day1: number;
  day2: number;
  hour1: number;
  hour2: number;
  minute1: number;
  minute2: number;
  second1: number;
  second2: number;
}

export default function Main() {
  const first_day = useMemo(() => new Date("February 16, 2024 12:00:00"), []);

  function getTime(time: number) {
    const days = time / 8.64e7;
    const hours = (time - Math.floor(days) * 8.64e7) / 3.6e6;
    const minutes =
      (time - Math.floor(days) * 8.64e7 - Math.floor(hours) * 3.6e6) / 60000;
    const seconds =
      (time -
        Math.floor(days) * 8.64e7 -
        Math.floor(hours) * 3.6e6 -
        Math.floor(minutes) * 60000) /
      1000;

    return {
      day1: Math.floor(days / 10),
      day2: Math.floor(days % 10),
      hour1: Math.floor(hours / 10),
      hour2: Math.floor(hours % 10),
      minute1: Math.floor(minutes / 10),
      minute2: Math.floor(minutes % 10),
      second1: Math.floor(seconds / 10),
      second2: Math.floor(seconds % 10),
    };
  }

  const [time, setTime] = useState<HackTime>(
    getTime(first_day.getTime() - new Date().getTime())
  );

  useEffect(() => {
    setTimeout(() => {
      const now = new Date();
      const time = first_day.getTime() - now.getTime();

      const days = time / 8.64e7;
      const hours = (time - Math.floor(days) * 8.64e7) / 3.6e6;
      const minutes =
        (time - Math.floor(days) * 8.64e7 - Math.floor(hours) * 3.6e6) / 60000;
      const seconds =
        (time -
          Math.floor(days) * 8.64e7 -
          Math.floor(hours) * 3.6e6 -
          Math.floor(minutes) * 60000) /
        1000;

      setTime(getTime(time));
    }, 1e3);
  }, [time, first_day]);

  return (
    <div className="flex justify-center items-center flex-col main_background min-h-screen">
      <img
        src="/hackathon_logo_2.png"
        alt="hackathon"
        width={1750}
        height={1750}
        className="phone:w-[700px] phone:h-[200px] sm:w-[550px] sm:h-[250px] lg:w-[900px] lg:h-[430px] 2xl:w-[1400px] 2xl:h-[700px] 3xl:w-[1750px] 3xl:h-[900px]"
      />
      <h2 className="phone:text-sm sm:text-lg lg:text-xl phone:my-10 sm:mb-4 2xl:mb-8 3xl:mb-16 lg:mt-0">
        Feb 16-18, 2024 | 32 Avenue of the Americas
      </h2>
      <div className="flex phone:gap-2 sm:gap-4 lg:gap-8">
        <div className="flex flex-col items-center">
          <div className="flex gap-1 lg:gap-2">
            <TrainSymbol color="green">{time.day1}</TrainSymbol>
            <TrainSymbol color="green">{time.day2}</TrainSymbol>
          </div>
          <p className="phone:text-xs sm:text-md lg:text-xl mt-2 lg:mt-4">
            DAYS
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-1 lg:gap-2">
            <TrainSymbol color="red">{time.hour1}</TrainSymbol>
            <TrainSymbol color="red">{time.hour2}</TrainSymbol>
          </div>
          <p className="phone:text-xs sm:text-md lg:text-xl mt-2 lg:mt-4">
            HOURS
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-1 lg:gap-2">
            <TrainSymbol color="yellow">{time.minute1}</TrainSymbol>
            <TrainSymbol color="yellow">{time.minute2}</TrainSymbol>
          </div>
          <p className="phone:text-xs sm:text-md lg:text-xl mt-2 lg:mt-4">
            MINUTES
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-1 lg:gap-2">
            <TrainSymbol color="orange">{time.second1}</TrainSymbol>
            <TrainSymbol color="orange">{time.second2}</TrainSymbol>
          </div>
          <p className="phone:text-xs sm:text-md lg:text-xl mt-2 lg:mt-4">
            SECONDS
          </p>
        </div>
      </div>
      <a
        href="#"
        className="cursor-default bg-gray-500 p-2 lg:p-4 2xl:p-6 text-sm lg:text-lg 2xl:text-2xl 3xl:text-2xl font-bold rounded-full phone:mt-8 sm:mt-4 lg:mt-4 xl:mt-6 3xl:mt-16"
      >
        Registration Closed
      </a>
    </div>
  );
}
