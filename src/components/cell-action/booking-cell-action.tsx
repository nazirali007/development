"use client";

import { Button } from "@/components/ui/button";
import { Edit, EyeIcon, Loader, MoreHorizontal, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Details } from "../columns/booking-table-column";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import axios from "axios";
import prismadb from "@/lib/prismadb";

interface BookCellActionPorps {
  data: Details;
}

export const BookCellAction: React.FC<BookCellActionPorps> = ({ data }) => {
  const { toast } = useToast();
  const router = useRouter();

  async function onNewPayment({
    bookingId,
    amount,
  }: {
    bookingId: string;
    amount: number;
  }) {
    const response = await (
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`, {
        amount,
      })
    ).data;
    const currentUser = (
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/currentuser`,
        { id: data.userId }
      )
    ).data;
    const { order } = response;
    const options = {
      // key: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY, // Enter the Key id generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Capture A Trip",
      description: "Trip payment for capture a trip",
      image: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) {
        const verificationResponse = await (
          await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/duepaymentverification`,
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookingId,
              newPaidAmount: amount,
              orderId: order.id,
              paymentMethod: order.method,
            }
          )
        ).data;
        if (verificationResponse.success) {
          toast({
            title: verificationResponse.message,
            description:
              "Congratulations! An email confirmation from Capture A Trip for this booking is now waiting for you in your inbox. We're excited to be part of your journey and look forward to making your experience unforgettable. If you have any questions or special requests, feel free to reach out. Safe travels with Capture A Trip!",
            duration: 5000,
          });
          router.refresh();
        }
      },
      prefill: {
        name: currentUser?.name,
        email: currentUser?.email,
        contact: currentUser?.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);

    razor.on(
      "payment.failed",
      function (response: {
        error: {
          code: any;
          description: any;
          source: any;
          step: any;
          reason: any;
          metadata: { order_id: any; payment_id: any };
        };
      }) {
        toast({
          title: response.error.reason,
          description: response.error.description,
          variant: "destructive",
          duration: 15000,
        });
      }
    );
    //@ts-ignore
    razor.open();
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/user/bookings/${data.id}/invoice`)}
          >
            <Button variant={"ghost"}>
              <EyeIcon className='mr-2 h-4 w-4' />
              Recent Invoice
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              disabled={data.dueAmount === 0}
              variant={"ghost"}
              onClick={() =>
                onNewPayment({ bookingId: data.id, amount: data.dueAmount })
              }
            >
              {/* {
                                isLoading || paymentVerificationLoadin ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Edit className="mr-2 h-4 w-4" />
                            } */}
              Make Due Payment
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
