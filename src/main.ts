const countdownNumbers = document.querySelectorAll(".countdown-number");

const date = new Date("2025-09-20T00:00:00").valueOf();

function getTimeUntilDate() {
	const currentDate = new Date().valueOf();
	const timeInMillisecondsUntilDate = date - currentDate;

	const daysUntilDate = timeInMillisecondsUntilDate / 1000 / 86400;
	const daysUntilDateRemainderInSeconds =
		(timeInMillisecondsUntilDate / 1000) % 86400;

	const hoursUntilDate = daysUntilDateRemainderInSeconds / 3600;
	const hoursUntilDateRemainderInSeconds =
		daysUntilDateRemainderInSeconds % 3600;

	const minutesUntilDate = hoursUntilDateRemainderInSeconds / 60;
	const secondsUntilDate = hoursUntilDateRemainderInSeconds % 60;

	const days = daysUntilDate.toString().split(".")[0];
	const hours = hoursUntilDate.toString().split(".")[0];
	const minutes = minutesUntilDate.toString().split(".")[0];
	const seconds = secondsUntilDate.toString().split(".")[0];

	return [days, hours, minutes, seconds];
}

function updateCountdown() {
	const [days, hours, minutes, seconds] = getTimeUntilDate();
	countdownNumbers[0].textContent = days;
	countdownNumbers[1].textContent = hours;
	countdownNumbers[2].textContent = minutes;
	countdownNumbers[3].textContent = seconds;
}

function repeatedlyUpdateCountdown() {
	updateCountdown();
	setTimeout(repeatedlyUpdateCountdown, 1000);
}

repeatedlyUpdateCountdown();
