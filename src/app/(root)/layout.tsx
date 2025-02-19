import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
// import ScrollButton from "@/components/scroll-button";
import LatestOffer from "@/components/LatestOffer";
import NavBar from "@/components/navbar/index";
import ScrollButton from "@/components/scroll-button";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster />
      <ScrollButton />
      <NavBar />
      <LatestOffer />
      {children}

      <Footer />
    </>
  );
}
