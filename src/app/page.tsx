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
					src="nathanbridgetwedding/leaves.png"
					alt="leaves"
					width={350}
					height={233}
					className="mx-auto mt-[-1rem]"
				/>
				<h1
					className={`text-5xl text-darkemerald mx-auto ${parisienne.className}`}>
					Nathan and Bridget
				</h1>
				<Image
					src="nathanbridgetwedding/white-rose.png"
					alt="white rose"
					width={300}
					height={232}
					className="translate-x-[35vw] md:translate-x-[50vw] lg:translate-x-[65vw]"
				/>
			</section>
			<section className="bg-darkemerald p-8">
				<SubHeading
					text="How it all started"
					className={`text-white mx-auto`}
				/>
				<p className="text-white max-w-[60ch] text-sm/8 font-serif">
					Six years ago, we met at our first job at a pizza
					place—bonding over late-night shifts, endless orders, and
					the occasional kitchen chaos. Somewhere between dealing with
					hangry customers and making way too many breadsticks, we
					found something even better than a paycheck. <br />
					<br />
					Now, after six years of laughter and adventures, we are
					finally making it official!
				</p>
			</section>
			<section className="py-16 px-8 bg-creme">
				<SubHeading
					className={`text-darkemerald mx-auto pb-4`}
					text={"Suggest some music"}
				/>
				<div className="text-red-500 font-bold w-fit mx-auto">
					*Not all submitted songs will be played.*
				</div>
				<SubmitASongForm />
			</section>
			<section className="py-16 px-8 bg-darkemerald">
				<SubHeading
					text="Let the countdown begin!"
					className="pb-4 text-white text-4xl mx-auto w-fit"
				/>
				<Countdown />
			</section>
		</>
	);
}
