import { Metadata } from "next";
import CustomNotFound from "@/components/not-found";

export const metadata: Metadata = {
  title: "404 - Page not found",
  description:
    "Uh oh! This page does not exist, maybe you clicked an old link or misspelled. Please try again…",
};

const Custom404 = (): JSX.Element => {
  return (
    <>
      <CustomNotFound />
    </>
  );
};
export default Custom404;
