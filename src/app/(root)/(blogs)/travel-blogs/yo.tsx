import NavBar from "@/components/nav-bar";
import RecentPosts from "@/components/recent-posts-blog";
import { Blogs } from "@/server/db/blogs/list-blog";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  const recentPost = Blogs.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  ).slice(0, 10);
  return (
    <>
      <main className='-mt-20'>
        <section>
          <div>
            <div className='relative flex h-[500px] w-full items-center justify-center'>
              <Image
                src={"/assets/images/img-blog.jpg"}
                alt=''
                fill
                className='object-cover'
                placeholder='blur'
                blurDataURL='/assets/249.jpg'
                quality={50}
              />
              <div className='absolute left-0 top-0 h-full w-full bg-black/40' />
              <div className='relative flex scale-105 flex-col items-center gap-2'>
                <h2 className='text-5xl font-semibold text-white lg:text-6xl'>
                  Blog
                </h2>
                <h3 className='text-xl font-semibold text-white'>
                  I Came, I Saw, I Captured
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center gap-4 py-8'>
          <h2 className='text-3xl font-semibold text-black/80 sm:text-4xl'>
            Recent Posts
          </h2>
          <RecentPosts posts={recentPost} />
        </section>

        <section className='flex flex-col gap-14 px-4'>
          {Blogs.map((blog, index) => (
            <div
              key={index}
              className={`mx-auto grid w-full max-w-7xl gap-6 sm:grid-cols-2 ${index % 2 === 0 ? "lg:grid-flow-col" : "lg:grid-flow-col-reverse"}`}
            >
              <div
                className={`xl:[350px] relative h-[280px] w-full lg:h-[350px] ${index % 2 === 0 ? "order-1 lg:order-none" : "order-none lg:order-1"}`}
              >
                <Image
                  src={blog.coverImageUrl}
                  alt={blog.coverimagealttag}
                  fill
                  placeholder='blur'
                  className='object-cover'
                  blurDataURL='/assets/249.jpg'
                  quality={50}
                />
              </div>
              <div className='my-auto flex flex-col gap-4 lg:gap-8'>
                <h2 className='text-xl font-semibold text-black/80'>
                  {blog.blogname}
                </h2>
                {blog.miniDescription}
                <Link
                  href={`/blog/${blog.blogslug}`}
                  className='flex w-fit items-center gap-2 p-1 text-xl font-semibold text-primaryMain hover:bg-primaryMain hover:text-white'
                >
                  CONTINUE <ArrowBigRightDash />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
