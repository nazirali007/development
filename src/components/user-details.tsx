"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Loader, Minus } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User } from "@prisma/client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  phone: z.string(),
  gender: z.enum(["MALE", "FEMALE", "OTHERS"]),
  address: z.string(),
  dateofbirth: z.string(),
  about: z.string().optional(),
  instagramId: z.string().optional(),
});

interface UserDetailsProps {
  user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: user.name!,
      phone: user.phone!,
      // address: user.address!,
      about: user.about!,
      instagramId: user.instagramId!,
      gender: user.gender,
      dateofbirth: user.dateofbirth!,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { about, address, dateofbirth, gender, instagramId, name, phone } =
      data;
    setIsLoading(true);
    const response = await (
      await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
        email: user.email,
        name,
        phone,
        gender,
        address,
        dateofbirth,
        about,
        instagramId,
      })
    ).data;
    setIsLoading(false);
    if (!response.success) {
      toast({
        title: response.message,
        variant: "destructive",
      });
    }
    toast({
      title: response.message,
    });
  }

  return (
    <div className='flex w-full rounded-md bg-white p-4 text-sm sm:gap-20 xl:gap-40'>
      <div className='flex shrink-0 flex-col gap-3 text-gray-500'>
        <div className='flex h-10 items-center justify-between sm:gap-4 xl:gap-10'>
          Full Name <Minus />
        </div>
        <div className='flex h-10 items-center justify-between sm:gap-4 xl:gap-10'>
          Email Id <Minus />
        </div>
        <div className='flex h-10 items-center justify-between sm:gap-4 xl:gap-10'>
          Phone Number <Minus />
        </div>
        <div className='flex h-10 items-center justify-between sm:gap-4 xl:gap-10'>
          Gender <Minus />
        </div>
        <div className='flex h-10 items-center justify-between sm:gap-4 xl:gap-10'>
          Address <Minus />
        </div>
        <div className='flex h-10 items-center justify-between sm:gap-4 xl:gap-10'>
          Date of Birth <Minus />
        </div>
        <div className='flex h-10 items-center justify-between sm:gap-4 xl:gap-10'>
          About <Minus />
        </div>
        <div className='flex h-10 items-center justify-between sm:gap-4 xl:gap-10'>
          Instagram Id <Minus />
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-3 font-medium'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='flex flex-col sm:flex-row sm:items-center sm:gap-40 xl:gap-60'>
                <FormControl>
                  <Input
                    placeholder='Your Name'
                    {...field}
                    className='max-w-2xl rounded-none border-x-0 border-y-0 border-black px-0 focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0 sm:min-w-[250px] lg:min-w-[400px]'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className={cn(buttonVariants({ variant: "ghost" }), "pl-0")}>
            {user.email}
          </p>
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem className='flex flex-col sm:flex-row sm:items-center sm:gap-40 xl:gap-60'>
                <FormControl>
                  <Input
                    placeholder='+91 01234 56789'
                    {...field}
                    className='max-w-2xl rounded-none border-x-0 border-y-0 border-black px-0 focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0 sm:min-w-[250px] lg:min-w-[400px]'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={"male"}
                    className='flex h-10 space-x-4'
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='male' />
                      </FormControl>
                      <FormLabel className='font-normal'>Male</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='female' />
                      </FormControl>
                      <FormLabel className='font-normal'>Female</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='others' />
                      </FormControl>
                      <FormLabel className='font-normal'>Others</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem className='flex flex-col sm:flex-row sm:items-center sm:gap-40 xl:gap-60'>
                <FormControl>
                  <Input
                    placeholder='Enter your address'
                    {...field}
                    className='max-w-2xl rounded-none border-x-0 border-y-0 border-black px-0 focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0 sm:min-w-[250px] lg:min-w-[400px]'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='dateofbirth'
            render={({ field }) => (
              <FormItem className='flex flex-col sm:flex-row sm:items-center sm:gap-40 xl:gap-60'>
                <FormControl>
                  <Input
                    placeholder='dd-mm-yyyy'
                    {...field}
                    className='rounded-none border-x-0 border-y-0 border-black px-0 focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0 sm:min-w-[220px] lg:max-w-2xl xl:min-w-[400px] xl:max-w-3xl'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='about'
            render={({ field }) => (
              <FormItem className='flex flex-col sm:flex-row sm:items-center sm:gap-40 xl:gap-60'>
                <FormControl>
                  <Input
                    placeholder='about'
                    {...field}
                    className='max-w-2xl rounded-none border-x-0 border-y-0 border-black px-0 focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0 sm:min-w-[250px] lg:min-w-[400px]'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='instagramId'
            render={({ field }) => (
              <FormItem className='flex flex-col sm:flex-row sm:items-center sm:gap-40 xl:gap-60'>
                <FormControl>
                  <Input
                    placeholder='instagram id'
                    {...field}
                    className='rounded-none border-x-0 border-y-0 border-black px-0 focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0 sm:min-w-[220px] lg:max-w-2xl xl:min-w-[400px] xl:max-w-3xl'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex h-fit w-full justify-end pt-8'>
            <Button disabled={isLoading} type='submit'>
              {isLoading && <Loader className='mr-2 h-4 w-4 animate-spin' />}
              Update Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
