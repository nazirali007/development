"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { AdminBookCellAction } from "../cell-action/admin-booking-cell-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const BookingColumns: ColumnDef<any>[] = [
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
    header: "Package Name",
    cell: ({ row }) =>
    //@ts-ignore
      row.original.members.map((member) => (
        <p key={member.id} className='space-x-2'>
          {member.travelModeName}
        </p>
      )),
  },
  {
    header: "Members",
    cell: ({ row }) =>
    //@ts-ignore
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
    header: "User Email",
    cell: ({ row }) => row.original.User?.email,
  },
  {
    header: "User Name",
    cell: ({ row }) => row.original.User?.name,
  },
  {
    accessorKey: "status",
    header: "Booking Status",
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => <AdminBookCellAction data={row.original} />,
  },
];
