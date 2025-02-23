import Countdown from "@/components/Countdown";
import SubHeading from "@/components/SubHeading";
import SubmitASongForm from "@/components/SubmitASongForm";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({ weight: "400", preload: true });

export default function Home() {
	const weddingDate = new Date("2025-09-20T00:00:00");

	return (
		<>
			<section className="flex flex-col gap-12 bg-creme overflow-x-hidden">
				<img
					src="/leaves.png"
					alt="leaves"
					width={350}
					className="mx-auto mt-[-1rem]"
				/>
				<h1
					className={`text-5xl text-darkemerald mx-auto ${parisienne.className}`}>
					Nathan and Bridget
				</h1>
				<img
					src="/white-rose.png"
					alt="white rose"
					width={300}
					className="translate-x-[35vw] md:translate-x-[50vw] lg:translate-x-[65vw]"
				/>
			</section>
			<section className="bg-darkemerald p-8">
				<SubHeading
					text="How it all started"
					className={`text-white mx-auto`}
				/>
				<p className="text-white max-w-[60ch] text-sm/8">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Quia laborum quibusdam provident temporibus aliquam. Iusto
					labore sapiente ipsam maiores, quos obcaecati? Suscipit,
					deleniti quidem eveniet non nihil debitis facilis autem
					omnis, voluptatibus accusamus sapiente natus temporibus,
					quisquam maxime voluptas impedit eos alias delectus nisi
					ipsa voluptatum molestias dolores! Molestias, et.
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
				<Countdown countdownDate={weddingDate} />
			</section>
		</>
	);
}
