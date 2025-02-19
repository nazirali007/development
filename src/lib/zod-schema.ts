
import * as z from "zod";
import { Gender } from "@prisma/client";


export const bookingSchema = z.object({
	id: z.string().min(1, "ID must be at least 1 character long"),
});

export const bookingQuerySchema = z.object({
	tripName: z.string().min(1, "Trip name must be at least 1 character long"),
	tripDate: z.date(),
	tripDuration: z
		.string()
		.min(1, "Trip duration must be at least 1 character long"),
	name: z.string().min(1, "Name must be at least 1 character long"),
	email: z.string().email("Invalid email"),
	phone: z.string().min(1, "Phone must be at least 1 character long"),
	memberCounts: z.record(z.number().min(1, "Member count must be at least 1")),
	slug: z.string().min(1, "Slug must be at least 1 character long"),
});

export const bookingQueryPatchSchema = z.object({
	id: z.string().min(1, "ID must be at least 1 character long"),
	read: z.boolean(),
});

export const deletebookingQuery = z.object({
	params: z.object({
		id: z.string(),
	}),
});

export const checkoutAmountSchema = z.object({
	amount: z.number().min(1, "Amount must be at least 1"),
});

export const duePaymentVerificationSchema = z.object({
	razorpay_order_id: z.string(),
	razorpay_payment_id: z.string(),
	razorpay_signature: z.string(),
	newPaidAmount: z.number(),
	orderId: z.string(),
	paymentMethod: z.string(),
	bookingId: z.string(),
});

export const inDoubtSchema = z.object({
	name: z
		.string()
		.min(1, "Name is Required")
		.min(3, "Name must be at least 3 character long")
		.max(50, "Name must be at most 50 character long"),
	phone: z
		.string()
		.min(1, "Phone is Required")
		.min(10, "Phone must be at least 10 character long"),
	email: z.string().min(1, "Email is Required").email("Invalid email"),
	destination: z.string().min(1, "Destination is Required"),
});

export const paymentVerficationSchema = z.object({
	razorpay_order_id: z.string(),
	razorpay_payment_id: z.string(),
	razorpay_signature: z.string(),
	gstAmount: z.number(),
	memberCounts: z.record(z.number()),
	paidAmount: z.number(),
	totalAmount: z.number(),
	tripName: z.string(),
	tripDate: z.string(), // Change to z.date() if you want to enforce a date format
	tripDuration: z.string(),
	orderId: z.string(),
	tripslug: z.string(),
	paymentMethod: z.string(),
	tcsAmount: z.number(),
	userId: z.string(),
});

export const isEmail = z
	.string()
	.min(1, "Email is Required")
	.email("Invalid email");

export const userSchema = z.object({
	email: z.string().min(1, "Email is Required").email("Invalid email"),
	name: z
		.string()
		.min(1, "Name is Required")
		.min(3, "Name must be at least 3 character long")
		.max(50, "Name must be at most 50 character long"),
	phone: z
		.string()
		.min(1, "Phone is Required")
		.min(10, "Phone must be at least 10 character long"),
	gender: z.nativeEnum(Gender),
	address: z.string(),
	dateofbirth: z.string(),
	about: z.string(),
	instagramId: z.string(),
});

export const CustomizedTripFormSchema = z.object({
	fullname: z.string().min(1, {
		message: "Name can not be empty.",
	}),
	phone: z
		.string()
		.min(1, { message: "Phone can not be empty." })
		.refine((value) => /^[0-9]+$/.test(value), {
			message: "Please enter a valid phone number with only numbers.",
		}),
	email: z.string().min(1, { message: "Email can not be empty." }),
	tripMonth: z.string().min(1, { message: "Month can not be empty." }),
	tripType: z.string().min(1, { message: "Trip Type can not be empty." }),
	tripMode: z.string().min(1, { message: "Mode can not be empty." }),
	tripDestination: z.string().optional(),
});


export const campaignFormSchema = z.object({
	name: z
	.string()
	.min(1, { message: "Name cannot be empty" })
	.max(50, { message: "Name must not exceed 50 characters" })
	.refine((value) => /^[a-zA-Z\s]+$/.test(value), {
		message: "Name must contain only letters and spaces",
	}),
  email: z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .email({ message: "Please enter a valid email address" })
		.refine((value) => value.includes("@"), {
      message: "Email must contain an @ symbol",
    }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be exactly 10 digits" })
    .max(10, { message: "Phone number must be exactly 10 digits" })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Please enter a valid phone number with only digits.",
    }), // Must be 10 digits and only numbers
  noOfPeople: z.coerce.number().min(1).default(1),
  destination: z.string(),
  destinationSlug: z.string(),
  message: z.string(),
  utm: z.string(),
  utm_medium:z.string(),
  utm_campaign:z.string(),
  utm_term:z.string(),
  utm_content:z.string(),

});

export const formSchema = z.object({
	name: z
	.string()
	.min(1, { message: "Name cannot be empty" })
	.max(50, { message: "Name mustn't exceed 50 characters" })
	.refine((value) => /^[a-zA-Z\s]+$/.test(value), {
		message: "Only letters and spaces allowed",
	}),
  email: z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .email({ message: "Please enter a valid email address" })
		.refine((value) => value.includes("@"), {
      message: "Email must contain an @ symbol",
    }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be exactly 10 digits" })
    .max(10, { message: "Phone number must be exactly 10 digits" })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Please enter a valid phone number with only digits.",
    }), // Must be 10 digits and only numbers
  destination: z.string(),
	});