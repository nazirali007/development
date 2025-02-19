"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Inquiry } from "@prisma/client";
import { format } from "date-fns";
import { AdminBookCellAction } from "../cell-action/admin-booking-cell-action";
import { InQueryCellAction } from "../cell-action/queries-cell-action";

export const InQueriesColumns: ColumnDef<Inquiry>[] = [
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
    accessorKey: "destination",
    header: "Destination",
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <InQueryCellAction id={row.original.id} read={row.original.read} />
    ),
  },
];
