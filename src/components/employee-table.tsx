"use client";

import * as React from 'react'
import Image from 'next/image'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { cn, formatIndianRupees } from '@/lib/utils';
import { Crown, IndianRupee } from 'lucide-react';

type Employee = {
    rank: number,
    name: string,
    avatar: {
        data: {
            attributes: {
                url: string,
                alternativeText: string
            }
        }
    },
    totalconvertedleads: number,
    totalconvertedsales: number
}


const columnHelper = createColumnHelper<Employee>()

const columns = [
    columnHelper.accessor('rank', {
        cell: info => (
            <>
                <div className='flex flex-row gap-1 items-center '>
                    <Crown className="text-yellow-300 -rotate-2" size={20} />
                    <span className="text-sm text-gray-500 font-medium">{info.row.index + 1}</span>
                </div>
            </>
        ),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('avatar', {
        header: 'Employee',
        cell: info => (
            <Image
                src={info.getValue().data.attributes.url}
                alt={info.getValue().data.attributes.alternativeText}
                className={cn('object-cover object-center relative size-10 rounded-full overflow-hidden')}
                placeholder='blur'
                width={100}
                height={100}
                blurDataURL='/assets/249.jpg'
                priority
                loading="eager"
                quality={50}
            />
        ),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('name', {
        header: 'Name',
        cell: info => (
            <>
                <p className='font-medium'>
                    {info.getValue()}
                </p>
            </>
        ),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('totalconvertedleads', {
        header: 'Converted Leads',
        cell: info => info.getValue(),
        footer: info => (
            <>
                <div
                    className="flex flex-row gap-1 items-center font-medium text-gray-800"
                >
                    {info.column.id}
                </div>
            </>
        )
    }),
    columnHelper.accessor('totalconvertedsales', {
        header: 'Total Sales',
        cell: info => (
            <div className='flex flex-row gap-1 items-center '>
                <IndianRupee className="text-gray-800 -rotate-2" size={20} />
                <span className="text-sm text-black font-medium">
                    {formatIndianRupees(info.getValue())}
                </span>
            </div>
        ),
        footer: info => info.column.id,
    }),
]

function TopEmployeesTable({
    defaultData
}: {
    defaultData: Employee[]
}) {
    const [data, _setData] = React.useState(() => [...defaultData])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <>
            <section className='flex w-full h-full overflow-x-scroll overflow-y-hidden rounded-xl'>
                <table className="w-full table-auto rounded-xl">
                    <thead className="bg-zinc-300 uppercase mb-4 rounded-t-xl">
                        <tr>
                            {table.getHeaderGroups().map(headerGroup => (
                                <React.Fragment key={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <th
                                            key={header.id}
                                            className="px-4 py-2 text-left"
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </th>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tr>
                    </thead>
                    <tbody className=''>
                        {table.getRowModel().rows.map((row, index: number) => (
                            <tr
                                key={row.id}
                                className={cn(
                                    'text-sm',
                                    index % 2 === 0 ? '' : 'bg-zinc-100/60'
                                )}
                            >
                                {row.getVisibleCells().map(cell => (
                                    <td
                                        key={cell.id}
                                        className="px-4 py-2 text-left"
                                        style={{ width: '20%' }}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <p className="mt-4 text-center text-sm w-full bg-zinc-50 px-1 py-2 rounded-b-xl">
                Thank you for your hard work and dedication!
            </p>
        </>
    )
}

export default TopEmployeesTable