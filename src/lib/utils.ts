import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatIndianRupees(number: number) {
  // Convert number to string
  let numStr = number.toString();

  // Split the string into whole and decimal parts
  let parts = numStr.split(".");

  // Format the whole part with commas
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Concatenate the whole and decimal parts with a dot
  return parts.join(".");
}

// function to generate current to dec month in array
export function generateMonth() {
  const month = new Date().getMonth();
  const monthArray = [];
  for (let i = month; i < month + 12; i++) {
    monthArray.push({
      id: i,
      type: new Date(new Date().setMonth(i)).toLocaleString('default', { month: 'long' }),
      value: new Date(new Date().setMonth(i)).toLocaleString('default', { month: 'long' })
    });
  }
  return monthArray;
}
