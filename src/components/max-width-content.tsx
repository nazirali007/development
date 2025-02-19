import { cn } from "@/lib/utils";
import React from "react";

export default function MaxWidthContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
}
