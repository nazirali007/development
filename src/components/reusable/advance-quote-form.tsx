"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { CustomizedTripFormSchema as formSchema } from "@/lib/zod-schema";
import { generateMonth } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: "Kashmir Spring Trip Enquiry Form | Kashmir Customized Trip",
};

const TripType = [
    {
        id: 1,
        type: "Solo Traveler",
        value: "Solo Traveler",
    },
    {
        id: 2,
        type: "Looking for a Honeymoon / Couple Trip",
        value: "Honeymoon / Couples",
    },
    {
        id: 3,
        type: "2 - 4 PAX",
        value: "2-4PAX",
    },
    {
        id: 4,
        type: "5 - 7 PAX",
        value: "5-7PAX",
    },
    {
        id: 5,
        type: "7 + PAX",
        value: "7+PAX",
    },
];

const TripMode = [
    {
        id: 1,
        type: "Group Trip / Fixed Departure",
        value: "Group Trip / Fixed Departure",
    },
    {
        id: 2,
        type: "Customized / Private Trips",
        value: "Customized / Private Trips",
    },
];

const TripMonth = generateMonth();

export default function AdvanceQuoteForm({
    data,
}: {
    data: {
        formtitle: string;
        formdescription: string;
        destination: string;
    };
}) {
    const [fetching, setFetching] = useState<boolean>(false);
    const [open, setOpen] = React.useState(false);


    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            phone: "",
            email: "",
            tripMonth: "",
            tripType: "",
            tripMode: "",
            tripDestination: data.destination || "Customized Trip",
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("form", values);
        try {
            setFetching(true);
            const response = await (
                await axios.post(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/customBooking`,
                    values
                )
            ).data;
            setFetching(false);
            if (!response.success) {
                toast({
                    title: response.message,
                    // variant: "custom"
                });
            } else {
                setOpen(true);
                form.reset();
            }
        } catch (error) {
            setFetching(false);
            toast({
                title: "Opps, Something went wrong! 😔",
                description: "Contact us directly if the problem persists.",
                // variant: "custom",
            });
        }
    }
    return (
        <>
            <Form {...form}>
                <section className='flex flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-slate-50 md:min-w-[700px]'>
                    <div className=' px-2 py-4'>
                        <h2 className='text-center text-3xl font-bold text-primaryMain sm:text-4xl md:text-4xl lg:text-5xl'>
                            {data.formtitle || "Get in Touch"}
                        </h2>
                        <p className='text-center text-sm font-medium text-gray-900 sm:text-base'>
                            {data.formdescription || "Fill out the form below to get a quote"}
                        </p>
                    </div>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='flex min-h-[550px] w-full flex-col justify-between space-y-4 rounded-b-lg rounded-t-2xl border-b-2 border-primaryLight px-5 py-6 text-black shadow-sm'
                    >
                        <div className='flex h-full flex-col justify-between'>
                            <div className='relative flex flex-col gap-4'>
                                <FormField
                                    control={form.control}
                                    name='fullname'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className='relative block w-full'>
                                                    <Input
                                                        placeholder='John Doe'
                                                        {...field}
                                                        className='peer w-full rounded border border-gray-400 bg-transparent px-2 py-6 text-sm transition-shadow focus:border-primaryLight focus:outline-none focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                                                    />
                                                    <span className='absolute left-2 top-1 -translate-y-1/2 scale-100 bg-white px-2 text-sm font-medium transition-transform peer-focus:scale-0'>
                                                        <FormLabel className='text-xs font-semibold'>
                                                            Full Name
                                                            <span
                                                                className='text-red-500'
                                                                aria-hidden='true'
                                                                title='Required'
                                                            >
                                                                *
                                                            </span>
                                                        </FormLabel>
                                                    </span>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='phone'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className='relative block w-full'>
                                                    <Input
                                                        placeholder='9841234567'
                                                        {...field}
                                                        className='peer w-full rounded border border-gray-400 bg-transparent px-2 py-6 text-sm transition-shadow focus:border-primaryLight focus:outline-none focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                                                    />
                                                    <span className='absolute left-2 top-1 -translate-y-1/2 scale-100 bg-white px-2 text-sm font-medium transition-transform peer-focus:scale-0'>
                                                        <FormLabel className='text-xs font-semibold'>
                                                            Contact Number
                                                            <span
                                                                className='text-red-500'
                                                                aria-hidden='true'
                                                                title='Required'
                                                            >
                                                                *
                                                            </span>
                                                        </FormLabel>
                                                    </span>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className='relative block w-full'>
                                                    <Input
                                                        placeholder='john.example@mail.com'
                                                        {...field}
                                                        className='peer w-full rounded border border-gray-400 bg-transparent px-2 py-6 text-sm transition-shadow focus:border-primaryLight focus:outline-none focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                                                    />
                                                    <span className='absolute left-2 top-1 -translate-y-1/2 scale-100 bg-white px-2 text-sm font-medium transition-transform peer-focus:scale-0'>
                                                        <FormLabel className='text-xs font-semibold'>
                                                            Email Address
                                                            <span
                                                                className='text-red-500'
                                                                aria-hidden='true'
                                                                title='Required'
                                                            >
                                                                *
                                                            </span>
                                                        </FormLabel>
                                                    </span>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='tripType'
                                    render={({ field }) => (
                                        <FormItem className='space-y-3'>
                                            <FormLabel>
                                                What kind of trip are you looking for ?{" "}
                                                <span
                                                    className='text-red-500'
                                                    aria-hidden='true'
                                                    title='Required'
                                                >
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className='flex flex-col space-y-1'
                                                >
                                                    {TripType.map((type, index) => (
                                                        <FormItem
                                                            className='flex items-center space-x-3 space-y-0'
                                                            key={`key-${index}`}
                                                        >
                                                            <FormControl>
                                                                <RadioGroupItem value={type.value} />
                                                            </FormControl>
                                                            <FormLabel className='font-normal'>
                                                                {type.type}
                                                            </FormLabel>
                                                        </FormItem>
                                                    ))}
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='tripMode'
                                    render={({ field }) => (
                                        <FormItem className='space-y-3'>
                                            <FormLabel>
                                                Type of trip you want to take{` `}?{" "}
                                                <span
                                                    className='text-red-500'
                                                    aria-hidden='true'
                                                    title='Required'
                                                >
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className='flex flex-col space-y-1'
                                                >
                                                    {TripMode.map((type, index) => (
                                                        <FormItem
                                                            className='flex items-center space-x-3 space-y-0'
                                                            key={`key-${index}`}
                                                        >
                                                            <FormControl>
                                                                <RadioGroupItem value={type.value} />
                                                            </FormControl>
                                                            <FormLabel className='font-normal'>
                                                                {type.type}
                                                            </FormLabel>
                                                        </FormItem>
                                                    ))}
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='tripMonth'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className='relative mt-2 block w-full'>
                                                    <Controller
                                                        control={form.control}
                                                        name='tripMonth'
                                                        render={({ field: { onChange, value } }) => (
                                                            <Select onValueChange={onChange} value={value}>
                                                                <SelectTrigger className='px-2 py-6'>
                                                                    <SelectValue placeholder='Choose Trip Month' />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        {TripMonth.map((type, index) => (
                                                                            <SelectItem
                                                                                className='my-0.5 py-2'
                                                                                value={type.value}
                                                                                key={`key-${index}`}
                                                                            >
                                                                                {type.type}
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        )}
                                                    />
                                                    <span className='absolute left-2 top-1 -translate-y-1/2 scale-100 bg-slate-50 px-2 text-sm font-medium transition-transform peer-focus:scale-0'>
                                                        <FormLabel className='text-xs font-semibold'>
                                                            Trip Month
                                                            <span
                                                                className='text-red-500'
                                                                aria-hidden='true'
                                                                title='Required'
                                                            >
                                                                *
                                                            </span>
                                                        </FormLabel>
                                                    </span>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='h-fit w-full pt-4'>
                                <Button
                                    disabled={fetching}
                                    type='submit'
                                    className={cn(
                                        "flex w-full items-center transition duration-300 ease-in-out",
                                        " bg-gradient-to-b from-primaryLight to-primaryMain font-semibold text-white hover:opacity-80"
                                    )}
                                >
                                    {fetching ? (
                                        <>
                                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />{" "}
                                            Submitting
                                        </>
                                    ) : (
                                        <>Submit</>
                                    )}
                                </Button>
                            </div>
                        </div>
                        <div
                            className='relative flex h-10 w-full flex-1 flex-col justify-end pt-4 text-center
          text-sm font-semibold text-gray-500
          '
                        >
                            Capture your travel dreams with us. We will make it happen.
                        </div>
                    </form>
                </section>
            </Form>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent className='bg-white text-gray-500'>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-primaryMain text-2xl">Form Submitted Successfully</AlertDialogTitle>
                        <AlertDialogDescription className="text-sm md:text-base flex flex-col gap-1">
                            <span>Thank you, We have received your query.</span>
                            <span>Our destination expert will share details with you shortly, Meanwhile you can check the details on our website</span>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Close</AlertDialogCancel>
                        <AlertDialogAction asChild className="hover:bg-primaryMain/80 hover:opacity-90 duration-150 transition ease-in-out bg-primaryMain/95">
                            <Link href={`/trip/Summer-kashmir-long-circuit`} className="flex flex-row items-center">
                                Kashmir Backpacking Trip
                                <ExternalLink className="ml-2" size={15} />
                            </Link>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
