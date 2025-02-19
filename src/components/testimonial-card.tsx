import React from 'react'
import Image from 'next/image';
function TestimonialCard(testimonial: any) {
    const totalHearts = 5;

    return (
        <div className="max-w-sm m-4 bg-white border border-gray-200 rounded-lg shadow ">
            <div
                className="rounded-t-lg h-[30vh] w-full relative"
            >
                <Image
                    src={`${testimonial?.testimonial?.image?.data?.attributes?.url || ""}`} alt=""
                    fill
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                />
            </div>
            <div className="p-5">
                <div className="flex">
                    {[...Array(totalHearts)].map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < testimonial?.testimonial?.rating ? 'red' : 'none'}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="w-8 h-6 text-red-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                        </svg>
                    ))}
                </div>
                <p className="mb-2 text-lg leading-6 font-extrabold tracking-tight text-gray-900">{testimonial?.testimonial?.title}
                </p>
                <p className="mb-3 font-medium text-sm md:text-base text-gray-900 text-justify">{testimonial?.testimonial?.description}</p>
                <p className="mb-3 font-extrabold text-center text-gray-900">{testimonial?.testimonial?.author}</p>
            </div>
        </div>
    )
}

export default TestimonialCard