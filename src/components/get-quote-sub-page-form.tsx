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
import { Loader2 } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/assets/icons";
import { CAT_WHATSAPP_LINK } from "@/server/db/static/variables";
import { useRouter } from 'next/navigation';

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

export default function GetQuoteSubPageForm({
  videoUrl,
}: {
  videoUrl: string;
}) {
  const [fetching, setFetching] = useState<boolean>(false);
  const { toast } = useToast();
  const [iframe1, setIframe1] = useState(false);
  const router = useRouter();

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
          variant: "destructive",
        });
      } else {
        toast({
          title: "Successfull 👍👍",
          description: response.message,
        });
        form.reset();
        // router.push('/thank-you');
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`, '_blank';
      }
    } catch (error) {
      setFetching(false);
      toast({
        title: "Oops 😔😔",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  }
  return (
    <div className='flex flex-col relative gap-2 w-full bg-white px-8 py-6 rounded-xl shadow-sm'>
      <div className='text-center text-3xl font-bold text-black/90 py-3'>{`Reach out to us`}</div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-3'
        >
          <div className='flex flex-col gap-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Name'
                      {...field}
                      className='border-gray-400 bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex gap-2'>
              <div className='w-full'>
                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder='Phone Number'
                          {...field}
                          value={field.value ?? ""}
                          className='border-gray-400 bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Email ID'
                      type='email'
                      {...field}
                      className='border-gray-400 bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='destination'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder='Destination'
                    {...field}
                    className='border-gray-400 bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex flex-col gap-4 font-semibold text-white'>
            <Button
              disabled={fetching}
              type='submit'
              className='w-full rounded-md transition-colors delay-100 text-black bg-secondaryMain text-base font-semibold hover:bg-secondaryDark'
            >
              {fetching && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Get Quote
            </Button>
            <div className="flex gap-2 ">
              <Link
                target="_blank" href={CAT_WHATSAPP_LINK}
                className='flex justify-center gap-2 rounded-md bg-[#47a985] hover:bg-[#177955] py-2 w-full transition-colors delay-100'
              >
                <Icons.whatsapp className='h-6 w-6 scale-110' />
                {`Whatsapp`}
              </Link>
              <Link
                href="tel:+918287636079"
                className='flex justify-center gap-2 rounded-md bg-[#ed8d2b] hover:bg-[#dd6d0b] py-2 w-full transition-colors delay-100'
              >
                <div className='relative h-6 w-6 rotate-3'>
                  <Icons.phone className='absolute h-full w-full' />
                </div>
                {`Call Now`}
              </Link>
            </div>

          </div>
        </form>
      </Form>

      {/* <Image
        src={`/assets/images/air-travel.svg`}
        alt='background image'
        height={200}
        width={200}
        quality={50}
        className='absolute -right-10 hidden xl:block top-20 -z-20 -rotate-12 rounded-b-xl object-cover opacity-20'
      /> */}
    </div>
  );
}
