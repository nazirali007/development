"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
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
import { cn } from "@/lib/utils";
import { formSchema } from "@/lib/zod-schema";
import { useRouter } from 'next/navigation';

// const formSchema = z.object({
//   name: z.string().min(1, {
//     message: "Name can not be empty.",
//   }),
//   phone: z
//     .string()
//     .min(1, { message: "Phone can not be empty." })
//     .refine((value) => /^[0-9]+$/.test(value), {
//       message: "Please enter a valid phone number with only numbers.",
//     }),
//   email: z.string().min(1, { message: "Email can not be empty." }),
//   destination: z.string(),
// });

interface GetQuoteInDoubtFormProps {
  className?: string;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GetQuoteInDoubtForm({
  className = "",
  setShowPopup,
}: GetQuoteInDoubtFormProps) {
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
  // hello`
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
      setShowPopup(false);
      if (!response.success) {
        toast({
          title: response.message,
          description: "there was some error with our server please try again",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Successfull 👍👍",
          description: response.message,
          style: {
            backgroundColor: "#007dbc",
            color: "white",
            fontWeight: "700"
          }
        });
        // window.open(`${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`, '_blank');
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`, '_blank';
        // router.push('/thank-you');
        form.reset();
        setShowPopup(false);
      }
    } catch (error) {
      setFetching(false);
      setShowPopup(false);
      toast({
        title: "Oops 😔😔",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  }
  return (
    <div className={cn('flex flex-col', `${className}`)}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full'
        >
          <div className='flex flex-col gap-8'>
            <div className="flex flex-row gap-x-8">

              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem className='relative'>
                    <FormLabel htmlFor='name'>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Full name'
                        {...field}
                        className='border-gray-400 bg-white focus-visible:ring-primaryMain focus-visible:ring-offset-0 z-[150] shadow-sm'
                      />
                    </FormControl>
                    <FormMessage className="absolute flex flex-wrap w-full  break-normal whitespace-normal text-xs" />
                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='phone'>Phone No</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Number'
                        {...field}
                        value={field.value ?? ""}
                        className='border-gray-400 bg-white focus-visible:ring-primaryMain focus-visible:ring-offset-0 z-[150] shadow-sm'
                      />
                    </FormControl>
                    <FormMessage className=" absolute text-xs" />
                  </FormItem>
                )}
              />

            </div>
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='email'>Email ID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter email'
                        type='email'
                        {...field}
                        className='border-gray-400 bg-white focus-visible:ring-primaryMain focus-visible:ring-offset-0 z-[150] shadow-sm'
                      />
                    </FormControl>
                    <FormMessage className="absolute text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='destination'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='destination'>Destination</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Dubai, Srinagar with Family, etc.'
                        {...field}
                        className='border-gray-400 bg-white focus-visible:ring-primaryMain focus-visible:ring-offset-0 z-[150] shadow-sm'
                      />
                    </FormControl>
                    <FormMessage className="absolute text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='flex flex-col font-semibold text-white'>
            <button
              disabled={fetching}
              type='submit'
              className='lg:mt-4 flex flex-row gap-1 items-center justify-center z-[150] rounded-md shadow-sm bg-primaryMain px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-primaryMain/95 hover:text-white'
            >
              {fetching && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              {
                fetching ? 'Submitting' : 'Submit'
              }
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
