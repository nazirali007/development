"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Booking, BookingMember, User } from "@prisma/client";
import { format } from "date-fns";
import { BookCellAction } from "../cell-action/booking-cell-action";
export type Details = Booking & {
  members: BookingMember[];
};

export const bookingColumns: ColumnDef<Details>[] = [
  {
    accessorKey: "tripName",
    header: "Trip Name",
  },
  {
    accessorKey: "tripDate",
    header: "Trip Date",
    cell: ({ row }) => format(row.original.tripDate, "PPP"),
  },
  {
    header: "Packege Name",
    cell: ({ row }) =>
      row.original.members.map((member) => (
        <p key={member.id} className='space-x-2'>
          {member.travelModeName}
        </p>
      )),
  },
  {
    header: "Members",
    cell: ({ row }) =>
      row.original.members.map((member) => (
        <p key={member.id} className='space-x-2'>
          {member.memberCount} {member.memberCount > 1 ? "Persons" : "Person"}
        </p>
      )),
  },
  {
    accessorKey: "totalAmount",
    header: "Amount (GST includes)",
  },
  {
    accessorKey: "paidAmount",
    header: "Paid Amount",
  },
  {
    accessorKey: "dueAmount",
    header: "Due Amount",
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => <BookCellAction data={row.original} />,
  },
];
