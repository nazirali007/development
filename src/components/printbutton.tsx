"use client";

import { Button } from "@/components/ui/button";

export default function PrintButton() {
  function printFn() {
    window.print();
  }
  return (
    <Button onClick={printFn} variant={"link"}>
      Print or Download
    </Button>
  );
}
