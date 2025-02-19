"use client";

import CountUp from "react-countup";

export default function AnimatedNumber({
  counter,
  start = 0o0,
  delay = 0,
  after,
  duration = 2.5,
}: {
  counter: number; // The number to animate to
  start?: number; // The number to start from
  delay?: number; // The delay in seconds
  after?: React.ReactNode; // The content to display after the number
  duration?: number; // The duration of the animation
}) {
  return (
    <>
      <CountUp start={start} delay={delay} end={counter} duration={duration} />
      {after}
    </>
  );
}
