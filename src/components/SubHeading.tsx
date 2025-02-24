import React from "react";
import { twMerge } from "tailwind-merge";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
	weight: "400",
	preload: true,
	subsets: ["latin"],
});

type SubHeadingProps = {
	text: string;
	className?: string;
};

function SubHeading({ text, className }: SubHeadingProps) {
	return (
		<h2
			className={
				className
					? twMerge(`text-3xl ${parisienne.className}`, className)
					: `text-3xl ${parisienne.className}`
			}>
			{text}
		</h2>
	);
}

export default SubHeading;
