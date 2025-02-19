import { stringify } from 'querystring';
import React from 'react';

interface timeProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const TimerContainer = ({
    days,
    hours,
    minutes,
    seconds,
}: timeProps) => {

    let daysStrings = days.toString()
    let hoursStrings = hours.toString()
    let minutesStrings = minutes.toString()
    let secondsStrings = seconds.toString()

    if (seconds == 0) {
        if (minutes != 0) {
            seconds = 59;
        }

    }
    if (minutes == 0) {
        if (hours != 0) {
            minutes = 59;
        }
    }

    if (hours == 0) {
        if (days != 0) {
        }
    }

    if (days < 10) {
        daysStrings = '0' + days;
    }

    if (hours < 10) {
        hoursStrings = '0' + hours;
    }

    if (minutes < 10) {
        minutesStrings = '0' + minutes;
    }

    if (seconds < 10) {
        secondsStrings = '0' + seconds;
    }

    return (
        <div className='rounded-xl'>
            <div className='grid grid-cols-2 gap-2 md:flex md:items-center md:justify-between rounded-xl text-sm font-bold'>
                <div className='flex flex-wrap justify-end items-baseline text-wrap'>
                    {days}<div className='text-[0.7rem] font-semibold'>days</div>
                </div>:
                <div className='flex flex-wrap items-end justify-end'>
                    {hours} <div className='text-[0.7rem] leading-[18px] font-semibold'>hrs</div>
                </div>:
                <div className='flex items-end justify-end'>
                    {minutes} <div className='text-[0.7rem] leading-[18px] font-semibold'>min</div>
                </div>:
                <div className='flex items-end justify-end'>
                    {seconds} <div className='text-[0.7rem] leading-[18px] font-semibold'>s</div>
                </div>
            </div>
        </div>
    );
};