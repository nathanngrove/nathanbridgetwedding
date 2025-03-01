"use client";

import useCountdown from "@/hooks/useCountdown";
import React from "react";
import CountdownDisplay from "./CountdownDisplay";

function Countdown() {
	const { days, hours, minutes, seconds } = useCountdown();

	return (
		<div className="flex justify-between w-full mx-auto">
			<CountdownDisplay time={days} unitOfTime={"Days"} />
			<CountdownDisplay time={hours} unitOfTime={"Hours"} />
			<CountdownDisplay time={minutes} unitOfTime={"Minutes"} />
			<CountdownDisplay time={seconds} unitOfTime={"Seconds"} />
		</div>
	);
}

export default Countdown;
