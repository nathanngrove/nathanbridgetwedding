"use client";

import React from "react";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
	weight: "400",
	preload: true,
	subsets: ["latin"],
});

type CountdownDisplayProps = {
	time: string;
	unitOfTime: string;
};

function CountdownDisplay({ time, unitOfTime }: CountdownDisplayProps) {
	return (
		<div className={`flex flex-col ${parisienne.className} items-center`}>
			<div className="md:text-5xl text-4xl text-white">{time}</div>
			<div className="md:text-3xl text-2xl text-white">{unitOfTime}</div>
		</div>
	);
}

export default CountdownDisplay;
