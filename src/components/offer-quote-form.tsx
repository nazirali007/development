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
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2, MessageCircle } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name can not be empty.",
  }),
  phone: z
    .string()
    .min(1, { message: "Phone can not be empty." })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Please enter a valid phone number with only numbers.",
    }),
  email: z.string().min(1, { message: "Email can not be empty." }),
  destination: z.string(),
});

export default function OfferQuoteForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fetching, setFetching] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      destination: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setFetching(true);
      const response = await (
        await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/indoubtform`,
          values
        )
      ).data;
      setFetching(false);
      if (!response.success) {
        toast({
          title: response.message,
          variant: "custom"
        });
      } else {
        toast({
          title: "Successfull Submitted! 🎉",
          description: response.message,
          variant: "custom",
        });
        form.reset();
      }
    } catch (error) {
      setFetching(false);
      toast({
        title: "Opps, Something went wrong! 😔",
        description: "Contact us directly if the problem persists.",
        variant: "custom",
      });
    }
  }
  return (
    <Form {...form}>
      <section className="flex flex-row justify-between gap-x-8 h-full w-full">
        {children}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full flex justify-between flex-col space-y-4 rounded-lg border-primaryLight border-b-2 min-h-[550px] bg-gradient-to-b from-slate-100 via-white from-10% via-50% to-slate-100 text-black px-5 py-6 shadow-sm'
        >
          <div className="flex flex-col justify-between h-full">
            <div className='flex relative flex-col gap-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs font-semibold'>Name <span className='text-red-500'
                      aria-hidden='true'
                      title="Required"
                    >*</span></FormLabel>
                    <FormControl>
                      <Input
                        placeholder='John Doe'
                        {...field}
                        className='border-gray-400 bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                      />
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
                    <FormLabel className='text-xs font-semibold'>Phone <span className='text-red-500'
                      aria-hidden='true'
                      title="Required"
                    >*</span></FormLabel>
                    <FormControl>
                      <Input
                        placeholder='+91 98XXXXXXXX'
                        {...field}
                        value={field.value ?? ""}
                        className='border-gray-400 bg-white bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                      />
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
                    <FormLabel className='text-xs font-semibold'>Email <span className='text-red-500'
                      aria-hidden='true'
                      title="Required"
                    >*</span></FormLabel>
                    <FormControl>
                      <Input
                        placeholder='example@mail.com'
                        type='email'
                        {...field}
                        className='border-gray-400 bg-white bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='destination'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs font-semibold'>
                      Description
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Destination, Date, Number of People, Star Rating, etc.'
                        {...field}
                        type="description"
                        className='border-gray-400 bg-white bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                      />
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
                className={cn('w-full flex items-center duration-300 transition ease-in-out',
                  ' to-primaryLight/50 bg-gradient-to-b from-primaryLight font-semibold text-white')}
              >
                {fetching ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Sending
                  </>
                ) : (
                  <>
                    <MessageCircle className='mr-2 h-4 w-4' /> Get Quote
                  </>
                )}
              </Button>
            </div>
          </div>
          <div className='h-10 flex flex-col flex-1 justify-end relative w-full pt-4 text-center
          text-sm text-gray-300 font-semibold
          '>
            Let us help you plan your next trip. We will get back to you with the best offers.
          </div>
        </form>
      </section>
    </Form>
  );
}
