"use client"
import clsx from 'clsx';
import React, { useState, ReactNode } from 'react'
import showdown from "showdown";

const parseHtml = (html: string): ReactNode[] => {
	const doc = new DOMParser().parseFromString(html, 'text/html');
	const parseNode = (node: Node): ReactNode => {
		switch (node.nodeType) {
			case Node.TEXT_NODE:
				return node.textContent;
			case Node.ELEMENT_NODE:
				if (node instanceof HTMLElement) {
					const tagName = node.tagName.toLowerCase();
					const props: { [key: string]: string } = Array.from(node.attributes).reduce(
						(acc, attr) => ({ ...acc, [attr.name]: attr.value }),
						{}
					);

					const children: ReactNode[] = Array.from(node.childNodes).map(parseNode);

					return React.createElement(tagName, { key: Math.random().toString(36).substr(2, 9), ...props }, ...children);
				}
				return null;
			default:
				return null;
		}
	};

	return Array.from(doc.body.childNodes).map(parseNode).filter((node): node is ReactNode => node !== null);
};


const Description = ({ heading, description , titleabout }: { heading: string, description: string, titleabout: string }) => {
	const [show, setShow] = useState(false);
	const converter = new showdown.Converter(); // Convert markdown to html element

	return (


		<div className=' flex flex-col px-2 md:px-4 lg:px-0 py-10 md:py-16  items-center justify-center'>
			<div className="flex w-[90vw] md:w-[70vw] flex-col gap-2 border border-black/80 px-4 pt-4 pb-1 md:pb-2 rounded-xl shadow-md">
				<div className='flex flex-col md:flex-row gap-1 md:items-end md:gap-2 justify-between'>
					<h2 className="text-3xl font-bold text-black/80 md:text-4xl lg:text-5xl">
						 {titleabout ? titleabout : ` About ${heading}`}
					</h2>
					<div className="text-sm pb-1 cursor-pointer font-semibold text-primaryLight hover:text-primaryDark transition-colors delay-150"
						onClick={() => setShow(!show)}
					>
						Show {show ? "Less" : "More"}
					</div>
					{/* <h2 className=" text-transparent w-1 h-1">{`Book ${heading} at Best Price`}</h2> */}
				</div>
				<div className="inline-block"><article className={`font-normal leading-normal overflow-hidden article transition-[max-height] duration-300 ease-in-out ${show ? "max-h-[10000000px]" : "max-h-[28vh]"}`}>
					{/* `${show ? "max-h-full" : "max-h-[10vh]"} border` */}
					<div
						dangerouslySetInnerHTML={{ __html: converter.makeHtml(description) }}
					>
					</div>
				</article>
				</div>
			</div>
			{/* <div className='h-[70vh] w-full sm:max-w-[65vw] bg-white'>
				<div className='pr-6'>
					<div className='h-fit border-b-gray-300 pb-1'>
						<div className='text-xl sm:text-4xl'>{`Book ${heading} at Best Price`}</div>
					</div>
					<article>
						<div className="article font-normal leading-normal" dangerouslySetInnerHTML={{ __html: description }} /></article>
				</div>
			</div> */}
		</div>

	)
}

export default Description
