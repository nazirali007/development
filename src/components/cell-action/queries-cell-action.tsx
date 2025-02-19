"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Check,
  CheckCheck,
  Eye,
  Loader,
  MoreHorizontal,
  Trash,
} from "lucide-react";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const InQueryCellAction: React.FC<{ id: string; read: boolean }> = ({
  id,
  read,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function MarkRead() {
    setIsLoading(true);
    const response = await (
      await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/indoubtform`, {
        id,
        read,
      })
    ).data;
    if (!response.success) {
      setIsLoading(false);
      toast({
        title: response.message,
        variant: "destructive",
      });
    } else {
      setIsLoading(false);
      toast({
        title: "Successfull 👍👍",
        description: response.message,
      });
      router.refresh();
    }
    setIsLoading(false);
  }
  async function onDelete() {
    setIsLoading(true);
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/indoubtform/${id}`
    );
    setIsLoading(false);
    toast({
      title: "Successfull 👍👍",
      description: "Query Deleted",
    });
    router.refresh();
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
          <DropdownMenuItem className='cursor-pointer' onClick={MarkRead}>
            {isLoading && <Loader className='mr-2 h-4 w-4 animate-spin' />}
            {read ? (
              <>
                <CheckCheck className='mr-2 h-4 w-4' />
                Read
              </>
            ) : (
              <>
                <Check className='mr-2 h-4 w-4' />
                Mark as read
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer' onClick={onDelete}>
            {isLoading ? (
              <Loader className='mr-2 h-4 w-4 animate-spin' />
            ) : (
              <Trash className='mr-2 h-4 w-4' />
            )}
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
