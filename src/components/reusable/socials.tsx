import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/assets/icons";
import {
  CAT_TWITTER_LINK,
  CAT_FB_LINK,
  CAT_INSTA_LINK,
  CAT_LINKEDIN_LINK,
  CAT_WHATSAPP_LINK,
} from "@/server/db/static/variables";

function Socials({ className, dir = "horz" }: { className?: string, dir?: "horz" | "vert" }) {
  return (
    <div
      className={cn("relative flex h-fit w-fit gap-8 text-primaryMain",
        dir === "vert" ? "flex-col" : "flex-row",
        `${className}`
      )}
    >
      <Link
        href={CAT_TWITTER_LINK}
        arial-label={"CAT Twiiter / X"}
        target='_blank'
        className='relative h-7 w-7'
      >
        <Icons.img68 className='absolute h-full w-full transition-all duration-200 hover:scale-125' />
      </Link>
      <Link
        href={CAT_FB_LINK}
        arial-label={"CAT Facebook"}
        target='_blank'
        className='relative h-7 w-7'
      >
        <Icons.img69 className='absolute h-full w-full transition-all duration-200 hover:scale-125' />
      </Link>
      <Link
        href={CAT_INSTA_LINK}
        arial-label={"CAT Instagram"}
        target='_blank'
        className='relative h-7 w-7'
      >
        <Icons.img70 className='absolute h-full w-full transition-all duration-200 hover:scale-125' />
      </Link>
      <Link
        href={CAT_LINKEDIN_LINK}
        arial-label={"CAT Linkedin"}
        target='_blank'
        className='relative h-7 w-7'
      >
        <Icons.img71 className='absolute h-full w-full transition-all duration-200 hover:scale-125' />
      </Link>
      <Link
        href={CAT_WHATSAPP_LINK}
        arial-label={"CAT Whatsapp"}
        target='_blank'
        className='relative h-7 w-7'
      >
        <Icons.img72 className='absolute h-full w-full transition-all duration-200 hover:scale-125' />
      </Link>
    </div>
  );
}

export default Socials;
