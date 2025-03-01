import Countdown from "@/components/Countdown";
import SubHeading from "@/components/SubHeading";
import { Parisienne } from "next/font/google";
import Image from "next/image";

const parisienne = Parisienne({
	weight: "400",
	preload: true,
	subsets: ["latin"],
});

export default function Home() {
	return (
		<>
			<section className="flex flex-col gap-12 bg-creme overflow-x-hidden">
				<Image
					src="leaves.png"
					alt="leaves"
					width={350}
					height={233}
					className="mx-auto mt-[-1rem]"
				/>
				<div className="mx-auto text-center flex flex-col gap-8">
					<h1
						className={`md:text-6xl text-5xl text-darkemerald ${parisienne.className}`}>
						Nathan and Bridget
					</h1>
					<div>
						<SubHeading
							text="Join us on"
							className="lg:text-3xl text-2xl text-darkemerald"
						/>
						<SubHeading
							text="September 20, 2025"
							className="lg:text-3xl text-2xl text-darkemerald font-bold"
						/>
						<SubHeading
							text={`as we say "I do"`}
							className="lg:text-3xl text-2xl text-darkemerald"
						/>
					</div>
				</div>
				<Image
					src="white-rose.png"
					alt="white rose"
					width={300}
					height={232}
					className="translate-x-[35vw] md:translate-x-[50vw] lg:translate-x-[65vw]"
				/>
			</section>
			<section className="bg-darkemerald p-8">
				<div className="max-w-screen-lg mx-auto flex flex-col gap-8 md:flex-row md:justify-between items-center">
					<div>
						<SubHeading
							text="How it all started"
							className={`text-white text-left max-w-screen-lg mx-auto mb-8 ${parisienne.className}`}
						/>
						<p className="text-white max-w-[60ch] text-lg leading-10 font-serif">
							We met at our first job at a pizza place—bonding
							over late-night shifts, endless orders, and the
							occasional kitchen chaos. Somewhere between dealing
							with hangry customers and making way too many
							breadsticks, we found something even better than a
							paycheck. <br />
							<br />
							Now, we are finally making it official!
						</p>
					</div>
					<Image
						src="us.jpg"
						alt="Us <3"
						className="overflow-hidden rounded-[50%] border-2 border-white outline outline-2 outline-white outline-offset-8"
						width={300}
						height={300}
					/>
				</div>
			</section>
			<section className="py-16 px-8 bg-darkemerald">
				<SubHeading
					text="Let the countdown begin!"
					className={`pb-12 text-white text-center mx-auto w-fit ${parisienne.className}`}
				/>
				<Countdown />
			</section>
		</>
	);
}
