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
			<div className="text-5xl text-white">{time}</div>
			<div className="text-3xl text-white">{unitOfTime}</div>
		</div>
	);
}

export default CountdownDisplay;
