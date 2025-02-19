'use client';
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';

import { TimerContainer } from './timerContainer';

const Countdown: NextPage = () => {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const targetDate = new Date('2025-03-15T00:00:00Z').getTime();

    useEffect(() => {
        const updateTime = setInterval(() => {
            const nowTime = new Date().getTime();
            const timeDiff = targetDate - nowTime;

            const newDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const newHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const newMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const newSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            setDays(newDays);
            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);

            if (timeDiff <= 0) {
                clearInterval(updateTime);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        }, 1000);

        return () => {
            clearInterval(updateTime);
        };
    }, []);

    return (
        <div className='md:flex flex-col hidden items-center absolute top-[0.3rem] right-2 px-2 py-0.5 rounded-sm bg-black/40'>
            <TimerContainer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        </div>
    );
};

export default Countdown;