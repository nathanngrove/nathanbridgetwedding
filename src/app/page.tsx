import Countdown from "@/components/Countdown";
import SubHeading from "@/components/SubHeading";
import SubmitASongForm from "@/components/SubmitASongForm";
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
				<h1
					className={`md:text-5xl text-4xl text-darkemerald mx-auto ${parisienne.className}`}>
					Nathan and Bridget
				</h1>
				<Image
					src="white-rose.png"
					alt="white rose"
					width={300}
					height={232}
					className="translate-x-[35vw] md:translate-x-[50vw] lg:translate-x-[65vw]"
				/>
			</section>
			<section className="bg-darkemerald p-8">
				<div className="max-w-screen-lg mx-auto flex gap-4 items-center">
					<div>
						<SubHeading
							text="How it all started"
							className={`text-white text-left max-w-screen-lg mx-auto mb-8`}
						/>
						<p className="text-white max-w-[60ch] text-sm/10 font-serif">
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
					<Image src="us.jpg" alt="Us <3" width={300} height={300} />
				</div>
			</section>
			<section className="py-16 px-8 bg-darkemerald">
				<SubHeading
					text="Let the countdown begin!"
					className="pb-4 text-white md:text-4xl text-2xl mx-auto w-fit"
				/>
				<Countdown />
			</section>
		</>
	);
}
