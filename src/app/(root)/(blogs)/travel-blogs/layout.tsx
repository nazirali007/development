import ScrollButton from "@/components/scroll-button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travel Blogs",
    alternates: {
        canonical: '/travel-blogs',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
