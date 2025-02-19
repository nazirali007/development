"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { AdminBookCellAction } from "../cell-action/admin-booking-cell-action";
import { BookingQueryCellAction } from "../cell-action/booking-query-cell-actions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const BookingQueryColumns: ColumnDef<any>[] = [
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => format(row.original.createdAt, "PPP"),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
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
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <BookingQueryCellAction id={row.original.id} read={row.original.read} />
    ),
  },
];
