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
import { useRouter } from 'next/navigation';

interface GetQuoteHeroFormProps {
  setShowPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export default function GetQuoteHeroForm({ setShowPopup }: GetQuoteHeroFormProps) {
  const [fetching, setFetching] = useState<boolean>(false);
  const { toast } = useToast();
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
          variant: "custom"
        });
      } else {
        toast({
          title: "Successfull 👍👍",
          description: response.message,
          variant: "custom",
        });
        form.reset();
        // router.push('/thank-you');
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`, '_blank';
        if (setShowPopup) {
          setShowPopup(false)
        }
      }
    } catch (error) {
      setFetching(false);
      toast({
        title: "Sorry, Your query could not be saved, please try again. 😫",
        description: "Contact us directly if the problem persists.",
        variant: "custom",
      });
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full space-y-4 z-50 rounded-lg border bg-white px-5 py-6 shadow-xl'
      >
        <div className='flex flex-col gap-4'>
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
                    placeholder='John'
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
                    placeholder='98XXXXXXXX'
                    {...field}
                    value={field.value ?? ""}
                    className='border-gray-400 bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
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
                    className='border-gray-400 bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
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
                  Destination
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Nepal, Dubai, and more...'
                    {...field}
                    className='border-gray-400 bg-transparent focus-visible:ring-primaryMain focus-visible:ring-offset-0'
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
            className='w-full border-[#fee60b] bg-[#fee60b] font-semibold text-[#111111] hover:bg-[#fee60b]'
          >
            {fetching && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
